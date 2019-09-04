##GraphQL + NodeJS + MongoDB

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

`