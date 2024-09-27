import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';

const server = express();
server.use(cors());
server.use(express.json());

adicionarRotas(server);

server.get('/Produto', async (req, res) => {
  try {
  
    const [rows] = await con.query('SELECT 1 AS test');
    res.send({ message: 'Conexão com o banco de dados bem-sucedida!', resultado: rows });
  } catch (err) {
    res.status(500).send({ erro: 'Falha na conexão com o banco de dados' });
  }
});

server.listen(process.env.PORTA, () => {
  console.log(`API SUBIU na porta`, process.env.PORTA);
});
