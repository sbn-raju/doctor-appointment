// Importing the NPM packages
import express, { urlencoded } from "express"
import app from "./config/app.js"
import envConfig from "./config/dotenv.js"



//Middlewares 
app.use(express.json());
app.use(urlencoded({extended:true}));



import authRoute from "./routes/index.routes.js";


//
app.use("/api/v1/auth",authRoute);




//Testing wheather the app is running or not
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`App is listening at the ${port}`);
})
