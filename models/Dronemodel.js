//Create MODEL so use Mongoose 
const mongoose = require ('mongoose');
const { Schema, model } = mongoose;
const droneSchema = new Schema (
  {
    name: String, 
    propellers: Number, 
    maxSpeed: Number
  }, {
    timestamps: true // to record created at & updated at 
  }
)
module.exports = model('Dronemodel', droneSchema);