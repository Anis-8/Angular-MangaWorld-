import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commentaire.component.html',
  styleUrl: './commentaire.component.css'
})
export class CommentaireComponent implements OnInit {
  commentaires: any[] = [];
  errorMessage: string | null = null;
  private apiUrl = 'http://localhost:8000/api/commentaire'; // URL de l'API
  router: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  trackById(index: number, commentaire: any): number {
    return commentaire.id;
  }

  HomeRedirect():void{
    this.router.navigate(['home'])
  }

  loadArticles(): void {
    this.http.get<any[]>(`${this.apiUrl}/index`).subscribe({
      next: (data) => {
        this.commentaires = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des commentaires :', error);
        this.errorMessage = 'Impossible de charger les commentaires.';
      },
    });
  }

  deleteCommentaire(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce commentaire ?')) {
      this.http.delete(`${this.apiUrl}/delete/${id}`).subscribe({
        next: () => {
          this.commentaires = this.commentaires.filter(commentaire => commentaire.id !== id);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression du commentaire :', error);
          this.errorMessage = 'Impossible de supprimer le commentaire.';
        },
      });
    }
  }
}
