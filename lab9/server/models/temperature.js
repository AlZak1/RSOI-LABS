const { Int32 } = require("mongodb");
const {Schema, model} = require("mongoose");

const schema = new Schema({
    region: {
        type: String
    },
    midtemp: {
        type: Number
    },
    downfall:{
        type: Boolean
    },
    date: {
        type: Date
    }
})

module.exports = model("temperature", schema);