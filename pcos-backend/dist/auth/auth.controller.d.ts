import { AuthService } from './auth.service';
import { signUpDto, LoginDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDto: signUpDto): Promise<{
        token: {
            token: string;
        };
    }>;
    logIn(loginDto: LoginDto): Promise<{
        token: {
            token: string;
        };
    }>;
}
