import express from 'express'
import { RegistrationController } from '../Module/RegistrationModule/Controller/RegistrationController'
const RegistrationRoute = express.Router()
var Controller = new RegistrationController()
RegistrationRoute.post("/Createuser",Controller.Register)
RegistrationRoute.post("/Login",Controller.Login)

export default RegistrationRoute