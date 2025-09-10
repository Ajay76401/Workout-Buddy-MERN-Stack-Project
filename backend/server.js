const express = require("express")
const dotenv = require("dotenv")
const mongoosee = require("mongoose")


const cors = require("cors");

const PORT = process.env.PORT;



const workoutRoutes = require("./routes/workout")
const { default: mongoose } = require("mongoose")
dotenv.config()



const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://workout-buddy-mern-stack-project.vercel.app', // your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // only if using cookies or auth
}));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.get('/', (req, res) => {
    res.json({
        msg: "Welcome To the Application."
    })
})




app.use('/api/workout/', workoutRoutes)





//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is up and Listening on http://localhost:${PORT} & connect to db`)
        })
    })
    .catch((error) => { console.log(error) })


