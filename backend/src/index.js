// Importing the NPM packages
import express, { urlencoded } from "express"
import app from "./config/app.js"
import envConfig from "./config/dotenv.js"
import { errorMiddleware } from "./middlewares/error.js";
import { pool } from "./database/connect.db.js";
import connection from "./database/connect.db.js";




//Middlewares 
app.use(express.json());
app.use(urlencoded({extended:true}));





// import authRoute from "./routes/index.routes.js";
import classRoute from "./routes/Admin Routes/Classes/class.routes.js";
import classUserRoute from "./routes/User Routes/Classes/classes.users.routes.js";
import classPaymentRoute from "./routes/Payment Routes/Class Payments/payment.class.routes.js";



//Main routes
// app.use("/api/v1/auth",authRoute);
app.use("/api/v1/class", classRoute);
app.use("/api/v1/class_booking",classUserRoute);
app.use("/api/v1/class_booking",classPaymentRoute);



app.use(errorMiddleware)


//Database Connection
connection();



//Testing wheather the app is running or not
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`App is listening at the ${port}`);
});
