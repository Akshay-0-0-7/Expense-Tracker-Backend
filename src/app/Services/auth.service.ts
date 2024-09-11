import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from '../Models/LoginDto'; // Adjust the import based on your models' location
import { RegisterDTO } from '../Models/RegisterDto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // Adjust the URL based on your API

  constructor(private http: HttpClient) {}

  register(registerDto: RegisterDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerDto);
  }

  login(loginDto: LoginDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginDto);
  }

  isAuthenticated(): boolean {
    // Check if the token exists and is valid (you may want to add additional validation)
    const token = localStorage.getItem('authToken');
    return !!token; // Returns true if token exists
  }

  logout(): void {
    localStorage.removeItem('authToken'); // Clear the token on logout
  }
}