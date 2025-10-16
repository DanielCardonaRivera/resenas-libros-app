import { Injectable } from "@angular/core";

export interface Book {
    id: number;
    titulo: string;
    autor: string;
    fecha: string;
    calificacion: number;
    portada: string;
}
@Injectable({
    providedIn: 'root'
})
export class BookService {
    private books: Book[] = [
        {id: 1, titulo: 'El Quijote', autor: 'Miguel de Cervantes', fecha: '1605-01-16', calificacion: 4.8, portada: 'https://picsum.photos/200?1' },
        {id: 2, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', fecha: '1967-05-30', calificacion: 4.9, portada: 'https://picsum.photos/200?2' },
        {id: 3, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', fecha: '2001-04-12', calificacion: 4.6, portada: 'https://picsum.photos/200?3' },
    ];
    getBooks(): Book[] {
        return this.books;
    }
    getBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }
}