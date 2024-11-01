import mysql from 'mysql2/promise';
import 'dotenv/config';

console.log("Host:", process.env.MYSQL_HOST);
console.log("Usuário:", process.env.MYSQL_USER);
console.log("Banco de Dados:", process.env.MYSQL_BD);


const con = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_BD,
  port:process.env.PORTA,
  typeCast: function (field, next) {

    if (field.type === "TINY" && field.length === 1) {
      return (field.string() === "1")
    } else if (field.type.includes("DECIMAL")) {
      return Number(field.string())
    } else {
      return next()
    }
  }
})

console.log("Db conectado")
export default con;
