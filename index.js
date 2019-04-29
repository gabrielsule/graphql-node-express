const express = require('express');
const app = express();

const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');

//data
const { libros } = require('./data.json');

//crea interface para GraphQL
const schema = buildSchema(`
    type Query {
        libro(id: Int!): Libro
        libros(genero: String): [Libro]
    }

    type Libro {
        id: Int
        titulo: String
        descripcion: String
        genero: String
    }
`);

let getLibro = (args) => {
    let id = args.id;

    return libros.filter(libro => {
        return libro.id === id;
    })
}

let getLibros = (args) => {
    if (args.genero) {
        let genero = args.genero;

        return libros.filter(libro => libro.genero === genero)
    } else {
        return libros
    }
}

const root = {
    libro: getLibro,
    libros: getLibros
}

//interface de GraphQL
app.use('/graphql', expressGraphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => console.log('server en puerto 3000'));