"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorWithXmlStatus = exports.isValidSamlSigningOptions = void 0;
const isValidSamlSigningOptions = (options) => {
    return options.privateKey != null;
};
exports.isValidSamlSigningOptions = isValidSamlSigningOptions;
class ErrorWithXmlStatus extends Error {
    constructor(message, xmlStatus) {
        super(message);
        this.xmlStatus = xmlStatus;
    }
}
exports.ErrorWithXmlStatus = ErrorWithXmlStatus;
//# sourceMappingURL=types.js.map