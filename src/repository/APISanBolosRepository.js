import con from './connection.js';


export async function consultarUsuario() {
  const comando = `
    select id_administrador   as id,
          nm_administrador    as nome,
          ds_senha            as senha,
          ds_email            as email
    from tb_administrador;
  `;
  let resposta = await con.query(comando);
  let registro = resposta[0];

  return registro;
}


export async function inserirUsuario(pessoa) {
  const comando = `
      insert into tb_administrador (nm_administrador, ds_senha, ds_email) 
                values (?, ?, ?)
  `;

  let resposta = await con.query(comando, [pessoa.nome, pessoa.senha, pessoa.email])
  let info = resposta[0];

  return info.insertId;
}

export async function validarUsuario(pessoa) {
  const comando = `
      select 
          id_administrador    id,
          nm_administrador    nome
      from tb_administrador 
      where 
          nm_administrador = ?
          and ds_senha = ?
  `;

  let registros = await con.query(comando, [pessoa.nome, pessoa.senha]);
  return registros[0][0];
}



export async function inserirProduto(produto) {
  const comando = `
    INSERT INTO tb_produto (id_produto, nm_produto, ds_descrição, vl_preço, img_produto)
    VALUES (?, ?, ?, ?, ?)
  `;

  let resposta = await con.query(comando, [
    produto.id || null,
    produto.nome,
    produto.descrição,
    produto.preço,
    produto.image
  ]);

  let info = resposta[0];

  return info.insertId;
}

export async function inserirCliente(cliente) {
  const comando = `
    INSERT INTO tb_cliente (id_cliente, nm_cliente, ds_email, ds_endereço)
    VALUES (?, ?, ?, ?)
  `;

  let resposta = await con.query(comando, [
    cliente.id,
    cliente.nome,
    cliente.email,
    cliente.endereço
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
          img_produto         as image
    from tb_produto;
  `;
  let resposta = await con.query(comando);
  let produto = resposta[0];  

  for(let i in produto){
    produto[i].image = produto[i].image?.toString()
  }


  return produto;
}

export async function consultarProdutoPorId(id) {
  const comando = `
    SELECT id_produto         AS id,
           nm_produto          AS nome,
           ds_descrição        AS descrição,
           vl_preço            AS valor,
           img_produto         AS image
    FROM tb_produto
    WHERE id_produto = ?;  -- Filtra pelo ID do produto
  `;

  let resposta = await con.query(comando, [id]);
  let produto = resposta[0][0];

  return produto;
}

export async function consultarCliente() {
  const comando = `
    select id_cliente         as id,
          nm_cliente          as nome,
          ds_email            as email,
    from tb_cliente;
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
        img_produto = ?
    where id_produto = ?;
  `;
  let resposta = await con.query(comando, [
    produto.nome,
    produto.descrição,
    produto.preço,
    produto.image,
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