"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const Validator_1 = require("../../../Common/Validator");
const Error_1 = require("../../../Message/Error");
const Success_1 = require("../../../Message/Success");
const UserModel_1 = __importDefault(require("../../../Models/UserModel"));
const Generate_1 = require("../../../Common/Generate");
function RegisterService(User) {
    if (Validator_1.Validator.Email(User.Email) && Validator_1.Validator.Number(User.Number)) {
        var userdata = UserModel_1.default.find({
            $or: [{ Email: User.Email }, { Number: User.Number }],
        })
            .then((result) => {
            if (result.length > 0) {
                return Error_1.Error.Message("User Already Exist");
            }
            else {
                User._id = Generate_1.Generate.Id(20);
                var data = UserModel_1.default.create(User)
                    .then((res) => {
                    return Success_1.Success.Message("User Register Successfully", res);
                })
                    .catch((err) => {
                    return Error_1.Error.Message(err.errorResponse.errmsg, null, err.errorResponse.code);
                });
                return data;
            }
        })
            .catch((err) => {
            return Error_1.Error.Message(err.errorResponse.errmsg, null, err.errorResponse.code);
        });
        return userdata;
    }
    else {
        if (Validator_1.Validator.Email(User.Email) == false &&
            Validator_1.Validator.Number(User.Number) == false) {
            return Error_1.Error.Message("Email and Phone Number is Invalid", null);
        }
        else {
            if (Validator_1.Validator.Email(User.Email) == false) {
                return Error_1.Error.Message("Invalid Email", User);
            }
            if (Validator_1.Validator.Number(User.Number) == false) {
                return Error_1.Error.Message("Invalid Phone Number", User);
            }
        }
    }
}
exports.RegisterService = RegisterService;
//# sourceMappingURL=Register.service.js.map