import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginDTO } from '../Models/LoginDto';
import { RegisterDTO } from '../Models/RegisterDto';
import { LoginResponse } from '../Models/LoginResponse'; // Adjust the import based on your models' location
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // Adjust the URL based on your API
  private isUserLoggedIn: boolean = false; // Variable to track login status

  constructor(private http: HttpClient, private router: Router) {
    this.isUserLoggedIn = this.isAuthenticated();
  }

  register(registerDto: RegisterDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerDto);
  }

  login(loginDto: LoginDTO): Observable<LoginResponse> { // Specify the return type
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginDto).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token); // Save token in local storage
          this.isUserLoggedIn = true; // Update login status
        }
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // Returns true if token exists
  }

  logout(): void {
    localStorage.removeItem('authToken'); // Clear the token on logout
    this.isUserLoggedIn = false; // Update login status
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
}