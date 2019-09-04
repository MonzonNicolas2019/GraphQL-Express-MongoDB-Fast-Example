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
    }

}