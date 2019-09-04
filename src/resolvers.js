import { tortugas } from './tortugas';
import Tortuga from './models/Tortuga';

export const resolvers = {

    Query: {
        hello: () => {
            return "Chau valor nulo"
        },
        modulefor17: (root, { n }, ctx) => {
            console.log(ctx);
            return n % 17;
        },
        async tortugas(){
            return await Tortuga.find();
        }
    },
    Mutation: {
        async createTortoiseAndTurtles(_, {input}){
            const newTortuga = new Tortuga(input);
            await newTortuga.save();
            return newTortuga;
        }
    }

}