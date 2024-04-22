"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RegistrationRoute_1 = __importDefault(require("./Routes/RegistrationRoute"));
const Routers = express_1.default.Router();
Routers.use('/Register', RegistrationRoute_1.default);
exports.default = Routers;
//# sourceMappingURL=RootRoute.js.map