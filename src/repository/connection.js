import mysql2 from 'mysql2/promise';
import 'dotenv/config';

async function createConnection() {
  if (!con) {
    con = await mysql2.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PWD || '',
      database: process.env.MYSQL_BD,
      typeCast: function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
          return field.string() === '1';
        } else if (field.type.includes('DECIMAL')) {
          return Number(field.string());
        } else {
          return next();
        }
      },
    });
    console.log('DB conectado');
  }
  return con;
}

export default createConnection;
