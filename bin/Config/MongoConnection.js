"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnect = void 0;
const mongoose_1 = require("mongoose");
function MongoConnect() {
    return (0, mongoose_1.connect)("mongodb://localhost:27017/Testdb").then(() => { console.log("Connected"); }).catch((err) => console.log(err));
}
exports.MongoConnect = MongoConnect;
//# sourceMappingURL=MongoConnection.js.map