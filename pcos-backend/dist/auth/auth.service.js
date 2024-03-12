"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const validation_error_1 = require("../errors/validation.error");
const not_found_error_1 = require("../errors/not-found.error");
const forbidden_error_1 = require("../errors/forbidden.error");
let AuthService = class AuthService {
    constructor() {
        this.JWT_SECRET = 'pjpdv';
    }
    signToken(userId) {
        return '';
    }
    async signUp(signUpDto) {
        try {
            if (signUpDto.password !== signUpDto.confirmPassword) {
                throw new validation_error_1.ValidationError('Password and Confirm Password does not match');
            }
            const encryptedPassword = await bcrypt.hash(signUpDto.password, 12);
            const userId = '1234567890';
            const token = this.signToken(userId);
            return { token };
        }
        catch (error) {
            throw new validation_error_1.ValidationError(error.message);
        }
    }
    async logIn(loginDto) {
        try {
            const { email, password } = loginDto;
            if (!email || !password) {
                throw new validation_error_1.ValidationError('Please include email and password.');
            }
            const existingUser = {
                email: 'test@example.com',
                password: '$2b$12$avRyjUN1JwZLNEz/BiZQQeD79JHmzr5C4OvQpd8wnl0cM50ZmqUJe',
            };
            if (!existingUser) {
                throw new not_found_error_1.NotFoundError('You are not registered. Please sign up first');
            }
            const isPasswordMatches = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordMatches) {
                throw new forbidden_error_1.ForbiddenError('Password is incorrect.');
            }
            const userId = '1234567890';
            const token = this.signToken(userId);
            return { token };
        }
        catch (error) {
            throw new validation_error_1.ValidationError(error.message);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map