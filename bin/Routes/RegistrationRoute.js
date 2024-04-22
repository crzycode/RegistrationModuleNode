"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RegistrationController_1 = require("../Module/RegistrationModule/Controller/RegistrationController");
const RegistrationRoute = express_1.default.Router();
var Controller = new RegistrationController_1.RegistrationController();
RegistrationRoute.post("/Createuser", Controller.Register);
RegistrationRoute.post("/Login", Controller.Login);
exports.default = RegistrationRoute;
//# sourceMappingURL=RegistrationRoute.js.map