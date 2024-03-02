import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorsModule } from './doctors/doctors.module';
import { AuthModule } from './auth/auth.module';
import { ErrorsModule } from './errors/errors.module';
import { GlobalErrorModule } from './global-error/global-error.module';

//testing

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://PCOSFertilicareDB:6OjUyaiYp4X8365d@cluster0.zpgsbrp.mongodb.net/PCOSFerilicare?retryWrites=true&w=majority&appName=Cluster0',
    ),
    DoctorsModule,
    AuthModule,
    ErrorsModule,
    GlobalErrorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{};
