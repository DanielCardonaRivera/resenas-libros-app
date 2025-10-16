import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { FormsModule } from '@angular/forms';
import { BookList } from './pages/books/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, FormsModule, BookList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'resenaslibrosapp';
}
