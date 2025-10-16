import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService, Book } from '../../../core/services/book.service';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './book-detail.html',
  standalone: true,
})
export class BookDetail {
  book?: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }
  ngOnInit() {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.book = this.bookService.getBookById(id);
  }
}
