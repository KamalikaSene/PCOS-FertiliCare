import { Controller, Post, Body, Res, Get, } from '@nestjs/common';
import { PastResultService } from './pastResult.service';
import { CreatePastResultDto } from './create-pastResults.dto';
import { Response } from 'express';

@Controller('api')
export class PastResultController {
  constructor(
    private readonly PastResultService: PastResultService,
  ) {}

  @Get('prediction')
  async create(
    @Body() createPastResultDto: CreatePastResultDto,
    @Res() res: Response,

  ): Promise<any> {
    try {
      await this.PastResultService.create(createPastResultDto);
      return res
        .status(200)
        .json({ msg: ['Message sent successfully'], success: true });
    } catch (error) {
      // Handle any errors other than the duplicate email error
      console.error('Error creating contact:', error);
      if (error.code !== 11000) {
        return res.status(500).json({
          msg: ['Unable to send message.', error.message],
          success: false,
        });
      } else {
        // No need to handle the duplicate email error, as we're allowing duplicates
        // Proceed with successful response
        return res
          .status(200)
          .json({ msg: ['Message sent successfully'], success: true });
      }
    }
  }
}


// //param is used to extract id parameter from the route path
// import { Controller, Get, Param, Res } from '@nestjs/common';
// import { PastResultService } from './pastResult.service';
// import { Response } from 'express';

// @Controller('api/past-results') // Update the route to '/api/past-results'

// export class PastResultController {
//   constructor(
//     private readonly pastResultService: PastResultService,
//   ) {}

//   @Get(':id') // Define a route parameter for the ObjectID

//   async findById(@Param('id') id: string, @Res() res: Response): Promise<any> {
//     try {
//       const pastResult = await this.pastResultService.findById(id);
//       if (!pastResult) {
//         return res.status(404).json({ msg: 'Past result not found' });
//       }
//       return res.status(200).json(pastResult);
//     } catch (error) {
//       console.error('Error finding past result:', error);
//       return res.status(500).json({ msg: 'Internal server error' });
//     }
//   }
// }