import {resolvers} from './resolvers'
import {makeExecutableSchema} from 'graphql-tools' //Para unir los resolvers con los typedefs

const typeDefinitions = `

    type Query {
        hello: String
        modulefor17(n: Int!): Int
    },
    
`;

export default makeExecutableSchema({
    typeDefs: typeDefinitions,
    resolvers: resolvers
})