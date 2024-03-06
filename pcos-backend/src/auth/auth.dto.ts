import { IsString, IsEmail, Length } from 'class-validator';
export class signUpDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 16)
  password: string;

  @IsString()
  @Length(8, 16)
  confirmPassword: string;
}

export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 16)
  password: string;
}
