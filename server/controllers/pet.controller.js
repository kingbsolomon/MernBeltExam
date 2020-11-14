const Pet = require("../models/pet.model");

module.exports.findAllPets = (req,res)=> {
    Pet.find().sort({type:1})
        .then(allPets => res.json({pets: allPets}))
        .catch(err=> res.json({message: "something went wrong", error: err}));
}

module.exports.findOnePet = (req,res) => {
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json({pet: onePet}))
        .catch(err=> res.json({message: "something went wrong", error: err}));
}

module.exports.createNewPet = (req,res) => {
    Pet.create(req.body)
        .then(newPet => res.json({pet: newPet}))
        .catch(err=> res.json({message: "something went wrong", error: err}));
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id: req.params._id})
        .then(res.json({message: "Pet has been successfully removed"}))
        .catch(err=> res.json({message: "something went wrong", error: err}));
}

module.exports.updatePet = (req,res) => {
    Pet.updateOne({_id: req.params._id}, {
        $set: {
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skill_one: req.body.skill_one,
            skill_two: req.body.skill_two,
            skill_three: req.body.skill_three,
        }
    },{runValidators: true})
        .then(allPets => res.json({pets: allPets}))
        .catch(err=> res.json({message: "something went wrong", error: err}))
}