const PetController = require("../controllers/pet.controller");

module.exports = app => {
    //Get ALL
    app.get("/api/pets", PetController.findAllPets);
    //get ONE
     app.get("/api/pets/:_id", PetController.findOnePet);
    // //Create ONE
     app.post("/api/pets/new", PetController.createNewPet);
    // //Delete ONE
     app.delete("/api/pets/delete/:_id", PetController.deletePet);
    // //Update ONE
     app.put("/api/pets/update/:_id", PetController.updatePet);
}
