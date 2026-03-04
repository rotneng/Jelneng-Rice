const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },
    role: {
      type: String,
      required: [true, "Please provide a designation (e.g., CEO)"],
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
      default: "Dedicated member of the Jelneng Rice team.",
    },
    image: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
    socials: {
      linkedin: String,
      twitter: String,
    },
    order: {
      type: Number,
      default: 10,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Team", teamSchema);
