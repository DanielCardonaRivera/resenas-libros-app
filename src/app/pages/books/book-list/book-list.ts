import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BookService, Book } from '../../../core/services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './book-list.html',
})
export class BookList {
  searchTerm = '';
  selectedFilter = 'reciente';
  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  get filteredBooks(): Book[] {
    let filtered = this.books.filter(book =>
      book.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.autor.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    switch (this.selectedFilter) {
      case 'reciente':
        filtered = filtered.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
        break;
      case 'autor':
        filtered = filtered.sort((a, b) => a.autor.localeCompare(b.autor));
        break;
      case 'calificacion':
        filtered = filtered.sort((a, b) => b.calificacion - a.calificacion);
        break;
      case 'alfabetico':
        filtered = filtered.sort((a, b) => a.titulo.localeCompare(b.titulo));
        break;
    }

    return filtered;
  }
}
