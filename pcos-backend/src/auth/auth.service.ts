import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
//import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = 'pjpdv';

  private signToken(userId: string): string {
    return ''
    //return jwt.sign({ userId }, this.JWT_SECRET);
  }

  async signUp(userDto: any): Promise<{ token: string }> {
    try {
      if (userDto.password !== userDto.confirmPassword) {
        //throw new ValidationError('Password and Confirm Password does not match');
      }
      const encryptedPassword = await bcrypt.hash(userDto.password, 12);
      const userId = '1234567890';
      const token = this.signToken(userId);
      return { token };
    }catch (error) {
        //throw new ValidationError(error.message);
      }
    }

    async logIn(userDto: any): Promise<{ token: string }> {
        try {
          const { email, password } = userDto;
          if (!email || !password) {
            //throw new ValidationError('Please include email and password.');
          }
          const existingUser = { email: 'test@example.com', password: '$2b$12$avRyjUN1JwZLNEz/BiZQQeD79JHmzr5C4OvQpd8wnl0cM50ZmqUJe' };
          if (!existingUser) {
            //throw new NotFoundException('You are not registered. Please sign up first');
          }
    
          const isPasswordMatches = await bcrypt.compare(password, existingUser.password);
          if (!isPasswordMatches) {
            //throw new ForbiddenException('Password is incorrect.');
          }
          // You would typically retrieve the user ID from the user object
          const userId = '1234567890';
          const token = this.signToken(userId);
            return { token };
        } catch (error) {
            //throw new ValidationError(error.message);
        }
    }

