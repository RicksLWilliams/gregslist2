import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    bedrooms: {type: Number},
    bathrooms:{type: Number},
    year:{year: Number},
    //price: { type: Number, required: true },
    levels: {type: Number},
    imgUrl:{type: String},
    description: { type: String, default: "nice house" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;