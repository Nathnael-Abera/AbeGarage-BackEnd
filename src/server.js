import express from "express"
import helmet from "helmet"
import cors from "cors"
import router from "./routes"
    const app =express()
    app.use(cors())
    app.use(helmet())
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use('/',router)
    app.listen(3000,()=>{
        console.log(`app is listening on http://localhost:3000 `)
    })