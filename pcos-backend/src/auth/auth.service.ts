import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ValidationError } from 'src/errors/validation.error';
import { NotFoundError } from 'src/errors/not-found.error';
import { ForbiddenError } from 'src/errors/forbidden.error';
import { signUpDto, LoginDto } from './auth.dto';
import { UserModel } from 'src/models/user.schema';
//import { User } from 'src/models/user.schema';
//import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = 'pjpdv';

  private signToken(userId: string): string {
    return '';
    //return jwt.sign({ userId }, this.JWT_SECRET);
  }

  async signUp(signUpDto: signUpDto): Promise<{ token: string }> {
    try {
      if (signUpDto.password != signUpDto.confirmPassword) {
        throw new ValidationError(
          'Password and Confirm Password does not match',
        );
      }
      const encryptedPassword = await bcrypt.hash(signUpDto.password, 12);
      //const userId = '1234567890';
      const newUser = new UserModel({
        email: signUpDto.email,
        password: encryptedPassword,
      });

      const savedUser = await newUser.save();
      if (!savedUser || !savedUser._id) {
        throw new ValidationError('Failed to save user to the database');
      }
      const token = this.signToken(savedUser._id.toString());
      return { token };
    } catch (error) {
      throw new ValidationError(error.message);
    }
  }

  async logIn(loginDto: LoginDto): Promise<{ token: string }> {
    try {
      const { email, password } = loginDto;
      if (!email || !password) {
        throw new ValidationError('Please include email and password.');
      }
      const existingUser = await UserModel.findOne({ email });

      if (!existingUser) {
        throw new NotFoundError('You are not registered. Please sign up first');
      }

      const isPasswordMatches = await bcrypt.compare(
        password,
        existingUser.password,
      );
      if (!isPasswordMatches) {
        throw new ForbiddenError('Password is incorrect.');
      }
      // You would typically retrieve the user ID from the user object
      //const userId = '1234567890';
      const token = this.signToken(existingUser._id.toString());
      return { token };
    } catch (error) {
      throw new ValidationError(error.message);
    }
  }
}
