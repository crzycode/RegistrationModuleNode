import express from 'express'
import { RegistrationController } from '../Module/RegistrationModule/Controller/RegistrationController'
import { HomeController } from '../Module/RegistrationModule/Controller/HomeController'
import { Auth } from '../Common/VerifyToken'
const HomeRoute = express.Router()
var Controller = new HomeController()
HomeRoute.get("/",Auth,Controller.Home)

export default HomeRoute