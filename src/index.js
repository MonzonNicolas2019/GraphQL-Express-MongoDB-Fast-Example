import express from "express";
import graphqlHTTP from "express-graphql"

const app = express();

const port = 4500;

app.use('/probandographql', graphqlHTTP({
    
}))

app.listen(port, () => {console.log(`Corriendo en el puerto ${port}`)})