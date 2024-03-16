export class signUpDto {
  readonly username: string;
  readonly email: string;
  readonly SLMCRegNo: string;
  password: string;
  readonly confirmPassword: string;
}

export class LoginDto {
  readonly email: string;
  readonly password: string;
}
