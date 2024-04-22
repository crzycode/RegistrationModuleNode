"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Success = void 0;
class Success {
}
exports.Success = Success;
Success.Message = (Message, data) => {
    var obj = {
        Message: Message,
        Code: 200,
        Data: data,
        Type: "Success",
    };
    return obj;
};
//# sourceMappingURL=Success.js.map