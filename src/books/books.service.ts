import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBooks(): any[] {
    return this.books;
  }

  createBook(id: string, title: string, author: string, category: string) {
    this.books.push({ id, title, author, category });
    return {
      message: `Success create book with ID ${id}`,
    };
  }

  findBookById(id: string) {
    const bookIdx = this.books.findIndex((el) => el.id === id);
    console.log(bookIdx);
    if (bookIdx === -1) {
      throw new NotFoundException(`Book with ID ${id} not found !`);
    }
    return bookIdx;
  }

  findOneBook(id: string) {
    const bookIdx = this.findBookById(id);
    const result = this.books[bookIdx];
    return result;
  }

  updateBook(id: string, title: string, author: string, category: string) {
    const bookIdx = this.findOneBook(id);
    this.books[bookIdx].title = title;
    this.books[bookIdx].author = author;
    this.books[bookIdx].category = category;

    return {
      message: `Success update book with ID ${id}`,
    };
  }
}
