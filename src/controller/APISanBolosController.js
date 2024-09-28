import * as db from '../repository/APISanBolosRepository.js';

import { Router } from 'express';
const endpoint = Router();

endpoint.post('/inserirProduto/', async (req, resp) => {
  try {
    let produto = req.body;
    let id = await db.inserirProduto(produto);
    resp.send({
      novoId: id
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});

export default endpoint;





// import * as db from '../repository/APISanBolosRepository.js';

// import { Router } from 'express';
// const endpoint = Router();


// endpoint.post('/inserirProduto/', async (req, resp) => {
//   try {
//     let produto = req.body;
//     let id = await db.inserirProduto(produto);
//     resp.send({
//       novoId: id
//     })
//   }
//   catch (err) {
//     resp.status(400).send({
//       erro: err.message
//     })
//   }
// })


// export default endpoint;