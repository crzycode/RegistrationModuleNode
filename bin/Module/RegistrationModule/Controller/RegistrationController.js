"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationController = void 0;
const Register_service_1 = require("../Service/Register.service");
const Login_service_1 = require("../Service/Login.service");
class RegistrationController {
    constructor() {
        this.Register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var User = req.body;
            var data = yield (0, Register_service_1.RegisterService)(User);
            res.json(data);
        });
        this.Login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var Login = req.body;
            var data = yield (0, Login_service_1.Loginservice)(Login);
            res.json(data);
        });
    }
}
exports.RegistrationController = RegistrationController;
//# sourceMappingURL=RegistrationController.js.map