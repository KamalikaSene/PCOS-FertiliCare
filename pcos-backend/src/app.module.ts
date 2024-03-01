import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorsModule } from './doctors/doctors.module';

//testing

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://PCOSFertilicareDB:6OjUyaiYp4X8365d@cluster0.zpgsbrp.mongodb.net/PCOSFerilicare?retryWrites=true&w=majority&appName=Cluster0',
    ),
    DoctorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
});
export class AppModule {};
