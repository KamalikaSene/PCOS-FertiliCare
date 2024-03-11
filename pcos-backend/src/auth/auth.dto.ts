export class signUpDto {
  readonly email: string;
  password: string;
  readonly confirmPassword: string;
}

export class LoginDto {
  readonly email: string;
  readonly password: string;
}
