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

export async function inserirPerfil(perfil) {
  const comando = `
    INSERT INTO tb_administrador (id_administrador, nm_administrador, ds_senha, ds_email, nr_telefone)
    VALUES (?, ?, ?, ?, ?)
  `;

  let resposta = await con.query(comando, [
    perfil.id,
    perfil.nome,
    perfil.senha,
    perfil.email,
    perfil.telefone
  ]);

  let info = resposta[0];

  return info.insertId;
}



export async function consultarProduto() {
  const comando = `
    select id_produto         as id,
          nm_produto          as nome,
          ds_descrição        as descrição,
          vl_preço            as valor,
          img_produto         as image,
          bl_disponibilidade  as disponivel
    from tb_produto;
  `;
  let resposta = await con.query(comando);
  let registro = resposta[0];

  return registro;
}

export async function consultarPerfil() {
  const comando = `
    select id_administrador   as id,
          nm_administrador    as nome,
          ds_senha            as senha,
          ds_email            as email,
          nr_telefone         as telelfone
    from tb_administrador;
  `;
  let resposta = await con.query(comando);
  let registro = resposta[0];

  return registro;
}


export async function alterarProduto(id, produto) {
  const comando = `
    update tb_produto
    set nm_produto = ?,
        ds_descrição = ?,
        vl_preço = ?,
        img_produto = ?,
        bl_disponibilidade = ?
    where id_produto = ?;
  `;
  let resposta = await con.query(comando, [
    produto.nome,
    produto.descrição,
    produto.preço,
    produto.image,
    produto.disponibilidade,
    id,
  ]);
  let info = resposta[0];

  return info.affectedRows;

};


export async function alterarPerfil(id, perfil) {
  const comando = `
    update tb_administrador
    set nm_administrador = ?,
        ds_senha = ?,
        ds_email = ?,
        nr_telefone = ?
    where id_administrador = ?;
  `;
  let resposta = await con.query(comando, [
    perfil.nome,
    perfil.senha,
    perfil.email,
    perfil.telefone,
    id,
  ]);
  let info = resposta[0];

  return info.affectedRows;
};

export async function removerProduto(id) {
  const comando = `
    delete from tb_produto
    where id_produto = ?;
  `;
  let resposta = await con.query(comando, [id]);
  let info = resposta[0];

  return info.affectedRows;
}