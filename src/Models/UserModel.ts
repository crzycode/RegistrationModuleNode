import { Schema, model,Document } from "mongoose"
import { Generate } from "../Common/Generate"

export interface UserModel{
    _id?:string
    Name:string
    Email:string
    Number:string
    Password:string
}

export interface UserModelDocument extends Document{
    _id:string
    Name:string
    Email:string
    Number:string
    Password:string
}
const userSchema = new Schema<UserModel>({
    _id:{
        type:String,
        required:true,
    },
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
     Number:{
        type:String,
        required:true
    },
     Password:{
        type:String,
        required:true
    }
},{versionKey:false})

const Users = model<UserModel>("users",userSchema)
export default Users