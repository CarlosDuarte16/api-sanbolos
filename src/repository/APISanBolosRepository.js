import con from './connection.js';

export async function inserirProduto (produto) {
  `insert into ( id_produto, nm_produto, ds_descrissão, vl_preço, img_produto, bl_disponibilidade )
        values ( ?, ?, ?, ?, ?, ? )
  `
  let resposta = await con.query (comando, [
    produto.id,
    produto.nome, 
    produto.descrissão,
    produto.preço,
    produto.image,
    produto.disponibilidade
  ]) 

  let info = resposta[0];

  return info.insertId;
}

