"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loginservice = void 0;
const Validator_1 = require("../../../Common/Validator");
const Error_1 = require("../../../Message/Error");
const Success_1 = require("../../../Message/Success");
const UserModel_1 = __importDefault(require("../../../Models/UserModel"));
function Loginservice(Login) {
    var data;
    if (Validator_1.Validator.Email(Login.Username)) {
        data = UserModel_1.default.find({ $and: [{ Email: Login.Username }, { Password: Login.Password }] }).then(res => {
            if (res.length > 0) {
                return Success_1.Success.Message("Login Successfully", Login.Username);
            }
            else {
                return Error_1.Error.NotFound("User Not Found", Login.Username);
            }
        });
    }
    else {
        return Error_1.Error.Message("Invalid Username", Login);
    }
    if (Validator_1.Validator.Number(Login.Username)) {
        data = UserModel_1.default.find({ $and: [{ Number: Login.Username }, { Password: Login.Password }] }).then(res => {
            if (res.length > 0) {
                return Success_1.Success.Message("Login Successfully", Login.Username);
            }
            else {
                return Error_1.Error.NotFound("User Not Found", Login.Username);
            }
        });
    }
    else {
        return Error_1.Error.Message("Invalid Username", Login);
    }
    return data;
}
exports.Loginservice = Loginservice;
//# sourceMappingURL=Login.service.js.map