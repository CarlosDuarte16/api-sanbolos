import express from 'express'
import adicionarRotas from './rotas.js'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())
adicionarRotas(app)



const porta = process.env.PORTA || 30000
app.listen(porta, ()=>{
    console.log('aberto na porta ' + process.env.PORTA)
})



// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import adicionarRotas from './rotas.js';
// import con from './repository/connection.js';

// const server = express();
// server.use(cors());
// server.use(express.json());

// adicionarRotas(server);

// server.get('/Produto', async (req, res) => {
//   try {
//     const connection = await con();
//     const [rows] = await connection.query('SELECT 1 AS test');
//     res.send({ message: 'Conexão com o banco de dados bem-sucedida!', resultado: rows });
//   } catch (err) {
//     res.status(500).send({ erro: 'Falha na conexão com o banco de dados', detalhe: err.message });
//   }
// });

// const PORTA = process.env.PORTA;
// console.log(PORTA);

// server.listen(PORTA, () => {
//   console.log(`API SUBIU na porta ${PORTA}`);
// });

