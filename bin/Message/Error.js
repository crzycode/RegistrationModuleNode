"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
class Error {
}
exports.Error = Error;
Error.Message = (Message, data, Code = 300, type = "Failed") => {
    var obj = {
        Message: Message,
        Code: Code,
        Data: data,
        Type: type,
    };
    return obj;
};
Error.NotFound = (Message, Code, type, data) => {
    var obj = {
        Message: Message,
        Code: 301,
        Data: null,
        Type: "Failed",
    };
    return obj;
};
Error.Failed = (Message, Code, type, data) => {
    var obj = {
        Message: Message,
        Code: 301,
        Data: null,
        Type: "Failed",
    };
    return obj;
};
Error.Unknown = (Message, Code, type, data) => {
    var obj = {
        Message: Message,
        Code: 301,
        Data: null,
        Type: "Failed",
    };
    return obj;
};
//# sourceMappingURL=Error.js.map