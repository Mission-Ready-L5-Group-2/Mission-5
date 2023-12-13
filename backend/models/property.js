import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  address: {
    street: {
      type: String,
      required: true,
    },
    suburb: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  image: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  details: {
    availableDate: {
      type: String,
      required: true,
    },
    parking: {
      type: Number,
      required: true,
    },
    petsAllowed: {
      type: Boolean,
      required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    broadband: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  proximity: {
    type: [String],
    required: true,
  },
});


export const Property = mongoose.model("Property", PropertySchema);