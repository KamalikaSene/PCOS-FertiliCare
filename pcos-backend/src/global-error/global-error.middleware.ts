import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from '@nestjs/common';
import { NotFoundError } from 'src/errors/not-found.error';
import { ValidationError } from 'src/errors/validation.error';
import { ForbiddenError } from 'src/errors/forbidden.error';

@Injectable()
export class GlobalErrorMiddleware implements NestMiddleware {
  use(error: any, req: Request, res: Response, next: NextFunction) {
    console.error(error);
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let errorMessage = 'Internal Server Error';

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
