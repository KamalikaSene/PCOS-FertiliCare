import { Module } from '@nestjs/common';
import { GlobalErrorMiddleware } from './global-error.middleware';

@Module({
  providers: [GlobalErrorMiddleware],
  exports: [GlobalErrorMiddleware],
});
export class GlobalErrorModule {}
