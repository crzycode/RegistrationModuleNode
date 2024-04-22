import express from 'express'
import Routers from './RootRoute'
import { MongoConnect } from './Config/MongoConnection'
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from '../src/Docs/swagger.json';
const app = express()
const PORT = 4002
app.use(express.json())
app.use('/api',Routers)
app.use("/docs",swaggerUi.serveFiles(swaggerDocument),swaggerUi.setup(swaggerDocument))
MongoConnect();
app.listen(PORT,() =>{
    console.log("Listing on "+ ' ' +PORT)
})