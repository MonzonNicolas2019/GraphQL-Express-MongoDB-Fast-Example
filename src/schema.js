import {resolvers} from './resolvers'
import {makeExecutableSchema} from 'graphql-tools' //Para unir los resolvers con los typedefs

const typeDefinitions = `

    type Query {
        hello: String
        modulefor17(n: Int!): Int
        tortugas: [Tortuga]
    }

    type Tortuga {
        _id: ID,
        especie: String!,
        kilogramos: Int!,
        terrestre: Boolean
    }

    type Mutation {
        createTortoiseAndTurtles(input: TortugaInput): Tortuga
        deleteTortoiseAndTurtles(_id: ID): Tortuga
        updateTortoiseAndTurtles(_id: ID, input: TortugaInput): Tortuga
    }

    input TortugaInput {
        especie: String!,
        kilogramos: Int!,
        terrestre: Boolean
    }
    
`;

export default makeExecutableSchema({
    typeDefs: typeDefinitions,
    resolvers: resolvers
})