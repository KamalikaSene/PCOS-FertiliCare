import { Module } from '@nestjs/common';
import { NotFoundError } from './not-found.error';
import { ValidationError } from './validation.error';
import { ForbiddenError } from './forbidden.error';

@Module({
    providers: [NotFoundError, ValidationError,ForbiddenError],
    exports: [NotFoundError, ValidationError,ForbiddenError],
})
export class ErrorsModule {}
