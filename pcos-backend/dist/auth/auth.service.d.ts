import { signUpDto, LoginDto } from './auth.dto';
export declare class AuthService {
    private readonly JWT_SECRET;
    private signToken;
    signUp(signUpDto: signUpDto): Promise<{
        token: string;
    }>;
    logIn(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
