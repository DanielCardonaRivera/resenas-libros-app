import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReviewService, Review } from '../../core/services/review.service';

@Component({
  selector: 'app-my-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-reviews.html',
  styleUrls: ['./my-reviews.css']
})
export class MyReviews {
  bookId!: number;
  reviews: Review[] = [];

  // Campos del formulario
  reviewText: string = '';
  rating: number = 5;

  editMode: boolean = false;
  editingId?: number;

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) {}

  ngOnInit() {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadReviews();
  }

  // Carga reseñas del libro actual
  loadReviews() {
    if (this.bookId) {
      this.reviews = this.reviewService.getReviewsByBookId(this.bookId);
    }
  }

  // Agrega o actualiza reseña
  addOrUpdateReview() {
    if (!this.reviewText.trim()) return;

    if (this.editMode && this.editingId) {
      this.reviewService.updateReview(this.editingId, {
        id: this.editingId,
        bookId: this.bookId,
        usuario: 'Juan',
        comentario: this.reviewText,
        calificacion: this.rating,
        fecha: new Date().toISOString().split('T')[0]
      });
    } else {
      this.reviewService.addReview({
        id: 0,
        bookId: this.bookId,
        usuario: 'Juan',
        comentario: this.reviewText,
        calificacion: this.rating,
        fecha: new Date().toISOString().split('T')[0]
      });
    }

    this.resetForm();
    this.loadReviews();
  }

  // Editar reseña existente
  editReview(review: Review) {
    this.editMode = true;
    this.editingId = review.id;
    this.reviewText = review.comentario;
    this.rating = review.calificacion;
  }

  // Eliminar reseña
  deleteReview(id: number) {
    this.reviewService.deleteReview(id);
    this.loadReviews();
  }

  // Limpiar formulario
  resetForm() {
    this.reviewText = '';
    this.rating = 5;
    this.editMode = false;
    this.editingId = undefined;
  }
}
