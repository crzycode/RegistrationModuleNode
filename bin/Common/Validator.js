"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
}
exports.Validator = Validator;
Validator.Email = (email) => {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};
Validator.Number = (number) => {
    var re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(number);
};
//# sourceMappingURL=Validator.js.map