import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('signup')
    async signUp(){
        try{
            const token = await this.authService.signUp();
            return {token};
        }catch(error)
    }
}
