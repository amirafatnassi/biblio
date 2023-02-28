import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http: HttpClient) { }

  createUser(data:any){
    return this.http.post('http://localhost:4000/users/register',data);
  }

  getUsers() {
    return this.http.get('http://localhost:4000/users');
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:4000/users/${id}`);
  }

  getUser(id: number) {
    return this.http.get('http://localhost:4000/users/' + id);  
  }

  updateUser(id: number, data: any) {
    return this.http.put('http://localhost:4000/users/' + id, data);
  }

  login(data:any){
    return this.http.post('http://localhost:4000/users/login', data);
  }

  download(id: number) {
    return this.http.get('http://localhost:4000/users/download/'+ id);
  }
}

