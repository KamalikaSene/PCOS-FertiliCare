import { Inject, Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ValidationError } from 'src/errors/validation.error';
import { NotFoundError } from 'src/errors/not-found.error';
import { ForbiddenError } from 'src/errors/forbidden.error';
import { signUpDto, LoginDto } from './auth.dto';
import { User } from 'src/models/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { DoctorAuthService } from 'src/doctor-auth/doctor-auth/doctor-auth.service';
//import { User } from 'src/models/user.schema';
//import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @Inject(DoctorAuthService)
    private readonly doctorAuth: DoctorAuthService,
    @InjectModel(User.name) private readonly UserModel: Model<User>,
    private jwtService: JwtService
  ) {}

  private readonly logger = new Logger(AuthService.name);
  private readonly JWT_SECRET = 'pjpdv';

  private signToken(userId: string): string {
    return userId;
    //return jwt.sign({ userId }, this.JWT_SECRET);
  }

  async signUp(signUpDto: signUpDto): Promise<{token:string}> {
    try {
      console.log(signUpDto)
      if (signUpDto.password !== signUpDto.confirmPassword) {
        throw new ValidationError(
          'Password and Confirm Password does not match',
        );
      }
      const encryptedPassword = await bcrypt.hash(signUpDto.password, 12);
      //const userId = '1234567890';
      // const savedUser = new UserModel({
      //   email: signUpDto.email,
      //   password: encryptedPassword,
      // });
      signUpDto.password = encryptedPassword;
      const createdUser = await this.UserModel.create(signUpDto);
      //return createdUser;

      // const savedUser = await UserModel.create({
      //   email: signUpDto.email,
      //   password: encryptedPassword,
      // });
      //await savedUser.save();

      if (!createdUser || !createdUser._id) {
        throw new ValidationError('Failed to save user to the database');
      }
      const token = this.signToken(createdUser._id.toString());
      return { token };
    } catch (error) {
      this.logger.error(`Error during signUp: ${error.message}`);
      throw new ValidationError(error.message);
    }
  }

  async logIn(loginDto: LoginDto): Promise<{ access_token: string }> {
    try {
      console.log(loginDto)
      const { email, password } = loginDto;
      if (!email || !password) {
        throw new ValidationError('Please include email and password.');
      }
      const existingUser = await this.UserModel.findOne({email}).exec();
      const payload = { sub : existingUser.id, email: existingUser.email}

      if (!existingUser) {
        console.log(existingUser)
        throw new NotFoundError('You are not registered. Please sign up first');
      }

      const isPasswordMatches = await bcrypt.compare(
        password,
        existingUser.password,
      );

      if (!isPasswordMatches) {
        console.log(password);
        console.log(existingUser.password)
        throw new ForbiddenError('Password is incorrect.');
      }
      // You would typically retrieve the user ID from the user object
      //const userId = '1234567890';
      const token = this.signToken(existingUser._id.toString());
      return { access_token: await this.jwtService.signAsync(payload), };
      
    } catch (error) {
      throw new ValidationError(error.message);
    }
  }

  async getInfo(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;
    if (!email || !password) {
      throw new ValidationError('Please include email and password.');
    }
    const existingUser = await this.UserModel.findOne({ email });

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
  }
  catch(error) {
    throw new ValidationError(error.message);
  }
}
