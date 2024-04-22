import { FilterQuery, QueryOptions } from "mongoose";
import { Validator } from "../../../Common/Validator";
import { Error } from "../../../Message/Error";
import { Success } from "../../../Message/Success";
import Users, { UserModel, UserModelDocument } from "../../../Models/UserModel";
import { Generate } from "../../../Common/Generate";
import { SECRET_KEY} from "../../../Config/Key";

export function RegisterService(User: UserModel): any {
  if (Validator.Email(User.Email) && Validator.Number(User.Number)) {
    var userdata = Users.find({
      $or: [{ Email: User.Email }, { Number: User.Number }],
    })
      .then((result) => {
        if (result.length > 0) {
          return Error.Message("User Already Exist");
        } else {
          User._id = Generate.Id(20);
          var data = Users.create(User)
            .then((res) => {
                var obj = {
                    token:Generate.Token({Email: User.Email,Number: User.Number,Password: User.Password},SECRET_KEY,"2 days"),
                    res:res
                }
              return Success.Message("User Register Successfully", obj);
            })
            .catch((err) => {
              return Error.Message(
                err.errorResponse.errmsg,
                null,
                err.errorResponse.code
              );
            });
          return data;
        }
      })
      .catch((err) => {
        return Error.Message(
          err.errorResponse.errmsg,
          null,
          err.errorResponse.code
        );
      });
    return userdata;
  } else {
    if (
      Validator.Email(User.Email) == false &&
      Validator.Number(User.Number) == false
    ) {
      return Error.Message("Email and Phone Number is Invalid", null);
    } else {
      if (Validator.Email(User.Email) == false) {
        return Error.Message("Invalid Email", User);
      }
      if (Validator.Number(User.Number) == false) {
        return Error.Message("Invalid Phone Number", User);
      }
    }
  }
}
