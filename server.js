const express = require("express")
const app = express()
const port = 8000
const cors = require("cors")

app.use(cors());

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

app.get("/", (req,res) =>{
    console.log("Hello from the front page!");
    res.json({message:"All Set "})
})

// const AllUserRoutes = require("./server/routes/user.routes")(app);
// AllUserRoutes(app); alternative way to do it
require("./server/routes/pet.routes")(app);


app.listen(port,() =>console.log(`listening on port ${port}`));