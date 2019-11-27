# Ejemplo rápido de GraphQL + NodeJS + MongoDB

## Breve descripción

Se tiene una base de datos de tortugas, y un api restful para hacer un CRUD sobre los datos.
Se usa GraphQL como lenguaje de consultas hacia el API.

## Deploy 

- Correr mongod.
- Dirigirse a ```http://localhost:4500/probandographql```, donde estará corriendo GraphiQL.

## Ejemplos

_Obtener tortugas, con id y especie únicamente_

```
{
  tortugas {
  	_id,
  	especie
	}
}
```

_Crear una nueva tortuga y al mismo tiempo obtenerla de la base de datos_

```
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
```

_Borrar una tortuga, el id es el devuelto de la consulta de la creación_

```
mutation{
  deleteTortoiseAndTurtles(_id: "5d6ff014d185a21ce8d4c49c"){
    _id
    especie
  }
}
```

_Modificar una tortuga_

```
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
```

_Método genérico para probar otras posibilidades_

```
{
  modulefor17(n: 27)
}
```
