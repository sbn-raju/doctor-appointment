// Importing the NPM packages
import express, { urlencoded } from "express"
import app from "./config/app.js"
import envConfig from "./config/dotenv.js"
import { errorMiddleware } from "./middlewares/error.js";
import { pool } from "./database/connect.db.js";
import connection from "./database/connect.db.js";
import {helmet, xssFilter} from "helmet"
import {rateLimit} from "express-rate-limit"



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





// import authRoute from "./routes/index.routes.js";
import classRoute from "./routes/admin/classes.routes.js";
import classUserRoute from "./routes/user/classes.routes.js";
import classPaymentRoute from "./routes/payment.routes.js";



//Main routes
// app.use("/api/v1/auth",authRoute);
app.use("/api/v1/class", classRoute);
app.use("/api/v1/class_booking",classUserRoute);
app.use("/api/v1/class_booking",classPaymentRoute);



app.use(errorMiddleware)


//Database Connection
connection();



//Testing wheather the app is running or not
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`App is listening at the ${port}`);
});
