"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsModule = void 0;
const common_1 = require("@nestjs/common");
const not_found_error_1 = require("./not-found.error");
const validation_error_1 = require("./validation.error");
const forbidden_error_1 = require("./forbidden.error");
let ErrorsModule = class ErrorsModule {
};
exports.ErrorsModule = ErrorsModule;
exports.ErrorsModule = ErrorsModule = __decorate([
    (0, common_1.Module)({
        providers: [not_found_error_1.NotFoundError, validation_error_1.ValidationError, forbidden_error_1.ForbiddenError],
        exports: [not_found_error_1.NotFoundError, validation_error_1.ValidationError, forbidden_error_1.ForbiddenError],
    })
], ErrorsModule);
//# sourceMappingURL=errors.module.js.map