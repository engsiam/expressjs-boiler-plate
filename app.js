//import all packages
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as path from "path";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import helmet from "helmet";
import router from "./routes/api.js";
import {MONGODB_CONNECTION,PORT,MAX_JSON_SIZE,URl_ENCODED,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} from "./app/config/config.js";

//Global Application Middleware
const app = express();
app.use(cors())
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URl_ENCODED }));
app.use(hpp())
app.use(helmet())
app.use(cookieParser())

//rate limit
const limiter=rateLimit({windowMs: REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER});
app.use(limiter)

//web caching
app.set('etag',WEB_CACHE)

//mongodb connection

//set api Routes
app.use("/",router)

//set application storage
app.use(express.static('storage'))

//run your express application
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})