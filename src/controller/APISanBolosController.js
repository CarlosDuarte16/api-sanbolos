import * as db from '../repository/APISanBolosRepository.js';

import { gerarToken } from '../utils/jwt.js';

import { Router } from 'express';
const endpoint = Router();

endpoint.post('/entrar/', async (req, resp) => {
  try {
      let pessoa = req.body;

      let usuario = await db.validarUsuario(pessoa);

      if (usuario == null) {
          resp.send({ erro: "Usuário ou senha incorreto(s)" })
      } else {
          let token = gerarToken(usuario);
          resp.send({
              "token": token
          })
      }
  }
  catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


endpoint.post('/usuario/', async (req, resp) => {
  try {
      let pessoa = req.body;

      let id = await db.inserirUsuario(pessoa);

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

endpoint.post('/inserirCliente/',  async (req, resp) => {
  try {
    let cliente = req.body;
    let id = await db.inserirCliente(cliente);
    resp.send({
      novoId: id
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});


endpoint.get('/consultarProduto/',  async (req, resp) => {
  try {
    let registros = await db.consultarProduto();
    resp.send(registros);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoint.get('/consultarCliente/',  async (req, resp) => {
  try {
    let registros = await db.consultarCliente();
    resp.send(registros);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoint.put('/alterarProduto/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let produto = req.body;
    let lineaffect = await db.alterarProduto(id, produto);
    if (lineaffect >= 1) {
      resp.send();
    }
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoint.delete('/removerProduto/:id',  async (req, resp) => {
  try {
    let id = req.params.id;

    let lineaffect = await db.removerProduto(id);
    if (lineaffect >= 1) {
      resp.send();
    }
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})
export default endpoint;
