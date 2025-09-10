const express = require("express")
const dotenv = require("dotenv")
const mongoode = require("mongoose")


const workoutRoutes = require("./routes/workout")
const { default: mongoose } = require("mongoose")
dotenv.config()



const app = express();

app.use(express.json()); 



app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})


app.get('/',(req,res)=>{
    res.json({
        msg: "Welcome To the Application."
    })
})




app.use('/api/workout/',workoutRoutes)





//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is up and Listening on http://localhost:${PORT} & connect to db`)
})
})
.catch((error)=>{console.log(error)})



const PORT =process.env.PORT ;

