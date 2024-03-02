import { HttpStatus } from "@nestjs/common";

export class ValidationError extends Error{
  constructor(message: String) {
    super(message);
    this.name = 'ValidationError';
  }
}