export class signUpDto {
  readonly username: string;
  readonly email: string;
  readonly SLMCRegNo: number;
  password: string;
  readonly confirmPassword: string;
}

export class LoginDto {
  readonly username: string;
  readonly password: string;
}
