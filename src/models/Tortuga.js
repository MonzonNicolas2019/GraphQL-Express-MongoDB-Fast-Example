import {Schema, model} from 'mongoose'

const tortugaSchema = new Schema({

    especie: {
        type: String,
        required: true
    },
    kilogramos: {
        type: Number,
        required: true
    },
    terrestre: Boolean

})

export default model('Tortuga', tortugaSchema);