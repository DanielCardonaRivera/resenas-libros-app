import { Injectable } from "@angular/core";

export interface Review {
    id: number;
    bookId: number;
    usuario: string;
    comentario: string;
    calificacion: number;
    fecha: string;
}
@Injectable({
    providedIn: 'root'
})
export class ReviewService {
    private reviews: Review[] = [
        {id: 1, bookId: 1, usuario: 'juan123', comentario: 'Una obra maestra de la literatura.', calificacion: 5, fecha: '2023-10-01' },
        {id: 2, bookId: 1, usuario: 'maria456', comentario: 'Me encantó la profundidad de los personajes.', calificacion: 4, fecha: '2023-10-05' },
        {id: 3, bookId: 2, usuario: 'carlos789', comentario: 'Una historia fascinante y bien escrita.', calificacion: 5, fecha: '2023-11-12' },
    ];
    getReviewsByBookId(bookId: number): Review[] {
        return this.reviews.filter(review => review.bookId === bookId);
    }
    addReview(review: Review) {
        review.id = this.reviews.length + 1;
        this.reviews.push(review);
    }
    updateReview(editingId: number, updatedReview: Review) {
        const index = this.reviews.findIndex(review => review.id === updatedReview.id);
        if (index !== -1) {
            this.reviews[index] = updatedReview;
        }
    }
    deleteReview(id: number) {
        this.reviews = this.reviews.filter(review => review.id !== id);
    }
}   