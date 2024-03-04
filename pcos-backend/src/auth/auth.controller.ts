import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp() {
    try {
      const token = await this.authService.signUp();
      return { token };
    } catch (error) {
      throw new HttpException(
        'Error while signing up',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  async logIn(@Body() userDto: any) {
    try {
      const token = await this.authService.logIn(userDto);
      return { token };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; // If the error is already an HttpException, rethrow it
      }
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}