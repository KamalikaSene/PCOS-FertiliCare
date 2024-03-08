import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//import { DoctorsModule } from './doctors/doctors.module';
import { AuthModule } from './auth/auth.module';
import { ErrorsModule } from './errors/errors.module';
import { GlobalErrorModule } from './global-error/global-error.module';
import { UserSchema } from './models/user.schema';

//testing

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://PCOSFertilicareDB:dX9JJLFDPzvnwvLm@cluster0.zpgsbrp.mongodb.net/PCOSFerilicare?retryWrites=true&w=majority&appName=Cluster0`,
      {
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
        connectTimeoutMS: 60000,
        socketTimeoutMS: 60000,
      },
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    //DoctorsModule,
    AuthModule,
    ErrorsModule,
    GlobalErrorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
