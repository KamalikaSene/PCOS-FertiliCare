import { Controller, Post, Body, Res } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './create-contact.dto';
import { Response } from 'express';

@Controller('api')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}


}