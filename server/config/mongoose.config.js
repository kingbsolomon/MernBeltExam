const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/belt_exam_db', { // creates database if it doesnt exist
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(()=>console.log("I found the mongoose"))
    .catch(err=> console.log("I lost the mongoose",err));