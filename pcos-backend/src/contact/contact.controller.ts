import { Controller, Post, Body, Res } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './create-contact.dto';
import { Response } from 'express';

@Controller('api')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('contact')
  async create(
    @Body() createContactDto: CreateContactDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      await this.contactService.create(createContactDto);
      return res
        .status(200)
        .json({ msg: ['Message sent successfully'], success: true });
    } catch (error) {
      console.error('Error creating contact:', error);
      if (error.code !== 11000) {
        return res.status(500).json({
          msg: ['Unable to send message.', error.message],
          success: false,
        });
      } else {
        return res
          .status(200)
          .json({ msg: ['Message sent successfully'], success: true });
      }
    }
  }
}