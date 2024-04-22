import { Generate } from "../../../Common/Generate";
import { Validator } from "../../../Common/Validator";
import { SECRET_KEY } from "../../../Config/Key";
import { Error } from "../../../Message/Error";
import { Success } from "../../../Message/Success";
import { LoginModel } from "../../../Models/LoginModel";
import Users from "../../../Models/UserModel";

export function Loginservice(Login: LoginModel): any {
    var data:any;
  if (Validator.Email(Login.Username)) {
    data = Users.find({$and:[{Email:Login.Username},{Password:Login.Password}]}).then(res =>{
        if(res.length > 0){
            var obj = {
                token:Generate.Token({Username: Login.Username,Password: Login.Password},SECRET_KEY,"2 days"),
                res:Login.Username
            }
            return Success.Message("Login Successfully",obj)
        }else{
            return Error.NotFound("User Not Found", Login.Username);
        }
    }).catch(err => {  return Error.Message(err.errorResponse.errmsg,null,err.errorResponse.code)})
    return data
  } 
  else if(Validator.Number(Login.Username)) {
    data = Users.find({$and:[{Number:Login.Username},{Password:Login.Password}]}).then(res =>{
        if(res.length > 0){
            var obj = {
                token:Generate.Token({Username: Login.Username,Password: Login.Password},SECRET_KEY,"2 days"),
                res:Login.Username
            }
            return Success.Message("Login Successfully",obj)
        }else{
            return Error.NotFound("User Not Found", Login.Username);
        }
    }).catch(err => {  return Error.Message(err.errorResponse.errmsg,null,err.errorResponse.code)})
    return data
  }else{
    return Error.Message("Invalid Username", Login);
  }
}
