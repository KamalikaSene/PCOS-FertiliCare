import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class GlobalErrorMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: (error: any) => void): any;
}
