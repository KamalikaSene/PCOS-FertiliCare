export class signUpDto {
  readonly username: string;
  readonly email: string;
  readonly registrationNumber: number;
  readonly Surname : string;
  password: string;
  readonly confirmPassword: string;
}

export class LoginDto {
  readonly username: string;
  readonly password: string;
}
