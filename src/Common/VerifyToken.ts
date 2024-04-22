import {Request,Response,NextFunction} from 'express'
import Jwt,{ JwtPayload } from 'jsonwebtoken';
import { SECRET_KEY } from '../Config/Key';
import { Message } from '../Message/Message';



export interface CustomRequest extends Request {
    token: string | JwtPayload;
   }
export function Auth(req:Request,res:Response,next:NextFunction){
    try{
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            throw new Error();
          }
          const decoded = Jwt.verify(token, SECRET_KEY);
          (req as CustomRequest).token = decoded;
       
          next();
    }catch(err){
        res.json(Message.Error("Authentication Failed",null,401,"Authentication"))
    }

}