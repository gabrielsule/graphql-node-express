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
query {
  libros {
    id,
    titulo,
    genero,
    descripcion
  }
```
- como resultado, nos entregará la siguiente información
```json
{
  "data": {
    "libros": [
      {
        "id": 1,
        "titulo": "Titulo 01",
        "genero": "terror",
        "descripcion": "Veniam nostrud ut labore id anim ea ad excepteur."
      },
      {
        "id": 2,
        "titulo": "Titulo 02",
        "genero": "comedia",
        "descripcion": "Lorem tempor est excepteur fugiat."
      },
      {
        "id": 3,
        "titulo": "Titulo 03",
        "genero": "terror",
        "descripcion": "Et nulla excepteur nostrud tempor ut irure ex ipsum eiusmod."
      }
    ]
  }
}
```

- También podemos usar las query variables para obtener los libros de un género específico
```json
{
  "libroGenero": "comedia"
}
```

```json
query getSingleLibro($libroGenero: String) {
  libros(genero: $libroGenero) {
    id,
    titulo,
    genero,
    descripcion
  }
}
```
