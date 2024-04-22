import express,{Request,Response} from 'express'
export class HomeController{
    Home = async (req:Request,res:Response) =>{
            res.send("home page")
    }
}