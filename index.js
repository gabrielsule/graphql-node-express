const express = require('express');
const app = express();

const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');

//crea interface para GraphQL
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message: () => 'hola devs'
}

//interface de GraphQL
app.use('/graphql', expressGraphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => console.log('server en puerto 3000'));