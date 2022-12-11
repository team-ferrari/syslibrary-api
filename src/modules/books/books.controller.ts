import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  private booksService;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }
}
