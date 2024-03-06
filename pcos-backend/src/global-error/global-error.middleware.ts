import {
  Injectable,
  NestMiddleware,
  HttpStatus,
  ArgumentsHost,
} from '@nestjs/common';
//import { Catch } from '@nestjs/common';
import { Request, Response } from 'express';
import { NotFoundError } from 'src/errors/not-found.error';
import { ValidationError } from 'src/errors/validation.error';
import { ForbiddenError } from 'src/errors/forbidden.error';

@Injectable()
export class GlobalErrorMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: () => void): Promise<void> {
    try {
      await next(); // Call the next middleware/handler
    } catch (error) {
      console.error(error);
      let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      let errorMessage = 'Internal Server Error';

      // Your error handling logic here
      if (error instanceof NotFoundError) {
        statusCode = HttpStatus.NOT_FOUND;
        errorMessage = error.message;
      } else if (error instanceof ValidationError) {
        statusCode = HttpStatus.BAD_REQUEST;
        errorMessage = error.message;
      } else if (error instanceof ForbiddenError) {
        statusCode = HttpStatus.FORBIDDEN;
        errorMessage = error.message;
      }

      res.status(statusCode).json({ message: errorMessage });
    }
  }
}
