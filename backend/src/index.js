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
import cookieParser from "cookie-parser"
import cors from "cors"


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

// app.use(session({
//     name:"session_Id",
//     resave:false,
//     saveUninitialized:false,
//     secret:process.env.SESSION_SECERET_KEY,
//     cookie:{
//         httpOnly:true,
//         sameSite:'strict',
//         maxAge:60*60*1000,
//     }
// }));

app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));




import authRoute from "./routes/auth.routes.js";
import classRoute from "./routes/classes.routes.js";
import classUserRoute from "./routes/classes.user.routes.js";
import youtubeLinkRoute from "./routes/youtube.routes.js";
import appointmentRoute from "./routes/appointment.routes.js";
import userAppointmentRoute from "./routes/appointmnet.user.routes.js"
import authAdminRoute from "./routes/adminAuth.routes.js";
import doctorRoute from "./routes/doctorAuth.routes.js";
import paymentRoute from "./routes/payment.routes.js";
import authUserRoute from "./routes/profile.user.routes.js"
import messageRoute from "./routes/messages.routes.js";


//Main routes
app.use("/api/v1/login",authUserRoute)
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/class", classRoute);
app.use("/api/v1/class_booking",classUserRoute);
app.use("/api/v1/orders",paymentRoute)
app.use("/api/v1/youtube",youtubeLinkRoute);
app.use("/api/v1/admin",authAdminRoute);
app.use("/api/v1/doctor",doctorRoute)
app.use("/api/v1/appointment",appointmentRoute);
app.use("/api/v1/admin/message",messageRoute);
app.use("/api/v1/appointment/user",userAppointmentRoute);




app.use(errorMiddleware)


//Database Connection
connection();



//Testing wheather the app is running or not
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`App is listening at the ${port}`);
});
