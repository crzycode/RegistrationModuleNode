import express,{Request,Response} from 'express'
import { UserModel } from '../../../Models/UserModel'
import { RegisterService } from '../Service/Register.service'
import { LoginModel } from '../../../Models/LoginModel'
import { Loginservice } from '../Service/Login.service'
export class RegistrationController{
    Register = async (req:Request,res:Response) =>{
            var User:UserModel = req.body
            var data = await RegisterService(User)
            res.json(data)
    }
    Login = async(req:Request,res:Response) =>{
        var Login:LoginModel  = req.body
        var data = await Loginservice(Login)
        res.json(data)
    }
}