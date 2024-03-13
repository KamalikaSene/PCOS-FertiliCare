import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//import { DoctorsModule } from './doctors/doctors.module';
import { AuthModule } from './auth/auth.module';
import { ErrorsModule } from './errors/errors.module';
import { GlobalErrorModule } from './global-error/global-error.module';
import { UserSchema } from './models/user.schema';
<<<<<<< HEAD
import { DoctorAuthModule } from './doctor-auth/doctor-auth.module';
=======
//import { RiskPredictionServiceModule } from './risk-prediction-service/risk-prediction-service.module';
//import { RiskPredictionService } from './risk-prediction/risk-prediction.service';
//import { RiskPredictionServiceModule } from './risk-prediction-service/risk-prediction-service.module';
>>>>>>> origin/PCOS-Backend

//testing

@Module({
  imports: [
    MongooseModule.forRoot(
<<<<<<< HEAD
      'mongodb+srv://PCOSFertilicareDB:6OjUyaiYp4X8365d@cluster0.zpgsbrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      { connectTimeoutMS: 300000, socketTimeoutMS: 300000 },
=======
      `mongodb+srv://PCOSFertilicareDB:dX9JJLFDPzvnwvLm@cluster0.zpgsbrp.mongodb.net/PCOSFerilicare`,
      {
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
        connectTimeoutMS: 60000,
        socketTimeoutMS: 60000,
      },
>>>>>>> origin/PCOS-Backend
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    //DoctorsModule,
    AuthModule,
    ErrorsModule,
    GlobalErrorModule,
<<<<<<< HEAD
    DoctorAuthModule,
=======
    //RiskPredictionServiceModule,
>>>>>>> origin/PCOS-Backend
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
