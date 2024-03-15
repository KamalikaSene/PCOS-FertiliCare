import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as cors from 'cors';
config();
async function bootstrap() {
  //testing
  const app = await NestFactory.create(AppModule);

    //app.use(cors({ origin: 'http://localhost:3001' })); 
  app.use(cors());

  await app.listen(3000);
}
bootstrap();