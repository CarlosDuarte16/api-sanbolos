import con from './connection.js';

export async function inserirProduto(produto) {
  const comando = `
    INSERT INTO tb_produto (id_produto, nm_produto, ds_descrição, vl_preço, img_produto, bl_disponibilidade)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  let resposta = await con.query(comando, [
    produto.id,
    produto.nome, 
    produto.descrição, 
    produto.preço,     
    produto.image,
    produto.disponibilidade
  ]);

  let info = resposta[0];

  return info.insertId;
}
