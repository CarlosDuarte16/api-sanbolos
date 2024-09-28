import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';
import con from './repository/connection.js';

const server = express();
server.use(cors());
server.use(express.json());

adicionarRotas(server);

// Rota para teste de conexão com o banco
server.get('/Produto', async (req, res) => {
  try {
    const connection = await con(); // Estabelecer conexão com o banco de dados
    const [rows] = await connection.query('SELECT 1 AS test'); // Teste simples de conexão
    res.send({ message: 'Conexão com o banco de dados bem-sucedida!', resultado: rows });
  } catch (err) {
    res.status(500).send({ erro: 'Falha na conexão com o banco de dados', detalhe: err.message });
  }
});

const PORTA = process.env.PORTA;


server.listen(PORTA, () => {
  console.log(`API SUBIU na porta ${PORTA}`);
});



// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import adicionarRotas from './rotas.js';

// const server = express();
// server.use(cors());
// server.use(express.json());

// adicionarRotas(server);

// server.get('/Produto', async (req, res) => {
//   try {
  
//     const [rows] = await con.query('SELECT 1 AS test');
//     res.send({ message: 'Conexão com o banco de dados bem-sucedida!', resultado: rows });
//   } catch (err) {
//     res.status(500).send({ erro: 'Falha na conexão com o banco de dados' });
//   }
// });

// const PORTA = process.env.PORTA

// server.listen(PORTA, () => {
//   console.log(`API SUBIU na porta ${process.env.PORTA}`);
// });
