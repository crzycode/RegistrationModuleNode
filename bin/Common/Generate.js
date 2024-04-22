"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generate = void 0;
class Generate {
}
exports.Generate = Generate;
Generate.Id = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
};
//# sourceMappingURL=Generate.js.map