import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User,UserSchema } from 'src/models/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { DoctorAuthModule } from 'src/doctor-auth/doctor-auth.module';

@Module({
  imports: [
    DoctorAuthModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
