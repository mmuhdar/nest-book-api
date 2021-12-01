import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { v4 as uuid } from 'uuid';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBooks(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    const id = uuid();
    return this.booksService.createBook(id, title, author, category);
  }

  @Get('/:id')
  findOneBook(@Param('id') id: string) {
    return this.booksService.findOneBook(id);
  }

  @Put('/:id')
  updateBook(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.booksService.updateBook(id, title, author, category);
  }
}
