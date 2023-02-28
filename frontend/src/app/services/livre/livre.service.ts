import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LivreService {
  constructor(private http: HttpClient) {}

  createLivre(data: any) {
    return this.http.post('http://localhost:4000/livres/add', data);
  }

  getLivres() {
    return this.http.get('http://localhost:4000/livres');
  }

  deleteLivre(id: number) {
    return this.http.delete(`http://localhost:4000/livres/delete/${id}`);
  }

  getLivre(id: number) {
    return this.http.get('http://localhost:4000/livres/show/' + id);
  }

  updateLivre(id: number, data: any) {
    return this.http.put('http://localhost:4000/livres/update/' + id, data);
  }
}
