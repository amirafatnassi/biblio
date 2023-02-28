import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) {}

  createCategorie(data: any) {
    return this.http.post('http://localhost:4000/categories/add', data);
  }

  getCategories() {
    return this.http.get('http://localhost:4000/categories');
  }

  deleteCategorie(id: number) {
    return this.http.delete(`http://localhost:4000/categories/delete/${id}`);
  }

  getCategorie(id:number){
    return this.http.get('http://localhost:4000/categories/show/'+id);
  }

  updateCategorie(id:number,data:any){
    return this.http.put('http://localhost:4000/categories/update/'+id,data);
  }
}
