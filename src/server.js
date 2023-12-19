import express from "express"
import helmet from "helmet"
import cors from "cors"
import connectDB from "../config/database"
import dotenv from 'dotenv/config';
import router from "./routes"
    connectDB();
    const app =express();
    app.use(cors())
    app.use(helmet())
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use('/',router)
    app.listen(3000,()=>{
        console.log(`app is listening on http://localhost:3000 `)
    })