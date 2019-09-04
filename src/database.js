import mongoose from 'mongoose'

export async function connect(){

    try{

        await mongoose.connect('mongodb://localhost/tortugasdb', {
            useNewUrlParser: true
        })
        
        console.log("> Las tortugas estan nadando")

    } catch {

        console.log("> Las tortugas treparon la reja")

    }

}

