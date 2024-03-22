// doctor-auth.dto.ts
import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class DoctorAuthDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{5}$/, { message: 'Registration number must be exactly five digits' })
  registrationNumber: number;



  @IsString()
  @IsNotEmpty()
  Surname: string;
}