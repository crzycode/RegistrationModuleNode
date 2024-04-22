"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Number: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
}, { versionKey: false });
const Users = (0, mongoose_1.model)("users", userSchema);
exports.default = Users;
//# sourceMappingURL=UserModel.js.map