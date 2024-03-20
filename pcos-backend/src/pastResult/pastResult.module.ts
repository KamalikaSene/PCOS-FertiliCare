import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PastResultController } from './pastResult.controller';
import { PastResultService } from './pastResult.service';

import {
  PastResult,
  PastResultSchema,
} from './pastResult.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PastResult.name, schema: PastResultSchema },
    ]),
  ],
  controllers: [PastResultController],
  providers: [PastResultService],
})
export class PastResultModule {}