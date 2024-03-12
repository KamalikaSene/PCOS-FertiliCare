"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorMiddleware = void 0;
const common_1 = require("@nestjs/common");
const not_found_error_1 = require("../errors/not-found.error");
const validation_error_1 = require("../errors/validation.error");
const forbidden_error_1 = require("../errors/forbidden.error");
let GlobalErrorMiddleware = class GlobalErrorMiddleware {
};
exports.GlobalErrorMiddleware = GlobalErrorMiddleware;
exports.GlobalErrorMiddleware = GlobalErrorMiddleware = __decorate([
    (0, common_1.Injectable)()
], GlobalErrorMiddleware);
{
    console.error(error);
    let statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
    let errorMessage = 'Internal Server Error';
    if (error instanceof not_found_error_1.NotFoundError) {
        statusCode = common_1.HttpStatus.NOT_FOUND;
        errorMessage = error.message;
    }
    else if (error instanceof validation_error_1.ValidationError) {
        statusCode = common_1.HttpStatus.BAD_REQUEST;
        errorMessage = error.message;
    }
    else if (error instanceof forbidden_error_1.ForbiddenError) {
        statusCode = common_1.HttpStatus.FORBIDDEN;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ message: errorMessage });
}
//# sourceMappingURL=global-error.middleware.js.map