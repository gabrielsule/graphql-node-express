## GraphQL, Node y Express

#### Inicializar el proyecto

- crear package.json `npm init -y`
- instalar librerías `npm i express graphql express-graphql`

#### Clonar el proyecto 

- clonarlo desde [https://github.com/gabrielsule/graphql-node-express.git](https://github.com/gabrielsule/graphql-node-express.git "https://github.com/gabrielsule/graphql-node-express.git") o bien descargar el archivo [https://github.com/graphql-node-express/archive/master.zip](https://github.com/graphql-node-express/archive/master.zip "https://github.com/graphql-node-express/archive/master.zip") y  descompromirlo en la carpeta de trabajo.
- desde la línea de comandos ejecutar `npm install`

#### Test

- desde CMD ejecutar `node index.js` y luego abrir el browser con la siguiente dirección [http://localhost:3000/graphql](http://localhost:3000/graphql "http://localhost:3000/graphql")
- en la solapa izquiera escribimos 

 ```json
{
    message
}
```
- como resultado, nos entregará la siguiente información
```json
{
    "data": {
       "message": "hola devs"
    }
}
```