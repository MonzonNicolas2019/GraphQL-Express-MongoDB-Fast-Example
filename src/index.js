import express from "express";
import graphqlHTTP from "express-graphql";
import schema from './schema';
import {connect} from './database';

const app = express();
connect();

const port = 4500;

app.get('/', (req, res) => {
    res.json({
        message: "G R A P H Q L"
    })
})

app.use('/probandographql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        lasTortugasSonLoMas: true
    }
}))

app.listen(port, () => {console.log(`Corriendo en el puerto ${port}`)})