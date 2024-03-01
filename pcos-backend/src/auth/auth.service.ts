import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
//import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = 'pjpdv';

  private signToken(userId: string): string {
    return jwt.sign({ userId }, this.JWT_SECRET);
  }

  async signUp(userDto: any): Promise<{ token: string }> {
    try {
      if (userDto.password !== userDto.confirmPassword) {
        throw new ValidationError('Password and Confirm Password does not match');
      }
}
