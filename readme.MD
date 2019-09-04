##GraphQL + NodeJS + MongoDB

Correr mongod antes de probar el proyecto.

http://localhost:4500/probandographql
Algunos ejemplos para probar desde Graphiql:

`
{
  tortugas {
  	_id,
  	especie
	}
}

{
  modulefor17(n: 27)
}

mutation {
    createTortoiseAndTurtles(input: {
        especie: "Trachemys scripta elegans"
        kilogramos: 2,
        terrestre: false
    }){
            _id
        especie
        kilogramos
        terrestre
    }
}

mutation{
  deleteTortoiseAndTurtles(_id: "5d6ff014d185a21ce8d4c49c"){
    _id
    especie
  }
}

mutation {
    updateTortoiseAndTurtles(
      _id: "5d6ff3711edd6d28141df549",
      input: {
        especie: "Tortuga de rio comun"
        kilogramos: 2,
        terrestre: false
    }){
      	_id
        especie
        kilogramos
        terrestre
    }
}

`