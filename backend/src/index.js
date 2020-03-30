const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
/**app.use(cors({
  origin: 'http:meuapp.com'
}));
**/
app.use(express.json()); 
app.use(routes);
/**
 * Metodos HTTP
 * 
 * GET: Buscar informacao no back-end
 * POST: Criar uma informacao no back-end
 * Put: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query: Parametros nomeados enviados na rota apos "? (filtros, paginacao)
  * Route parms: Parametros utilizados para identificar recursos
  * Request body: Corpo da requisicao, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * from users
  * Query Builder: table('users').select(*).where()
  */

 

app.listen(3333); 