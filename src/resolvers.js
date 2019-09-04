import { tortugas } from './tortugas'

export const resolvers = {

    Query: {
        hello: () => {
            return "Chau valor nulo"
        },
        modulefor17: (root, { n }) => {
            return n % 17;
        },
        tortugas: () => {
            return tortugas;
        }
    },
    Mutation: {
        createTortoiseAndTurtles: (_, {input}) => {
            input._id = tortugas.length;
            tortugas.push(input);
            return input;
        }
    }

}