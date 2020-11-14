const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Insert Pet Name"],
        minlength: [3, "Pet Name Must be at least 3 characters"],

    },
    type: {
        type: String,
        required: [true, "Please insert a Pet Type"],
        minlength: [3, "Pet Type Must be at least 3 characters"],

    },
    description: {
        type: String,
        required: [true, "Please insert a Description"],
        minlength: [3, "Description Must be at least 3 characters"],

    },
    skill_one: {
        type: String,
        required: [false],
    },
    skill_two: {
        type: String,
        required: [false],
    },
    skill_three: {
        type: String,
        required: [false],

    },
});

const Pets = mongoose.model("pet", PetSchema);



module.exports = Pets;