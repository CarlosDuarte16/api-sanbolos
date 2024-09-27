import * as db from '../repository/APISanBolosRepository.js';

import { Router } from 'express';
const endpoint = Router();


endpoint.post('/inserirProduto/', async (req, resp) => {
  try {
    let musicas = req.body;
    let id = await db.inserirProduto(musicas);
    resp.send({
      novoId: id
    })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoint;