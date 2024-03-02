import { HttpStatus } from "@nestjs/common";

export class NotFoundError extends Error{
  constructor(message: String) {
    super(message);
    this.name = 'NotFoundError';
  }
}