// Importing the NPM packages
import express, { urlencoded } from "express"
import app from "./config/app.js"
import envConfig from "./config/dotenv.js"
import { errorMiddleware } from "./middlewares/error.js";
import { pool } from "./database/connect.db.js";
import connection from "./database/connect.db.js";
import {xssFilter} from "helmet"
import helmet from "helmet";
import {rateLimit} from "express-rate-limit";
import session from "express-session";


//Middlewares 
app.use(express.json());
app.use(urlencoded({extended:true}));

app.use(helmet());

app.use(xssFilter());

app.use(rateLimit({
    windowMs:15*60*1000,
    max:100,
    message:"There are too many requests from the IP"
}))

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"ThisIsMySecret",
    cookie:{
        httpOnly:true,
        sameSite:'strict',
        maxAge:60*60*1000,
    }
}))




import authRoute from "./routes/auth.routes.js";
import classRoute from "./routes/classes.routes.js";
import classUserRoute from "./routes/classes.routes.js";
import youtubeLinkRoute from "./routes/youtube.routes.js";
import appointmentRoute from "./routes/appointment.routes.js";



//Main routes
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/class", classRoute);
app.use("/api/v1/class_booking",classUserRoute);
app.use("/api/v1/youtube",youtubeLinkRoute);
app.use("/api/v1/appointment",appointmentRoute);




app.use(errorMiddleware)


//Database Connection
connection();



//Testing wheather the app is running or not
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`App is listening at the ${port}`);
});
