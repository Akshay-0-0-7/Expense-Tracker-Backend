import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../Services/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the authorization header
    const token = localStorage.getItem('authToken');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle 401 Unauthorized response
        if (error.status === 401) {
          // Optionally, you can redirect to the login page or show a message
          console.error('Unauthorized request - redirecting to login');
          // Redirect to login or show a message
          alert("You are not authorized to view this page")
        }
        return throwError(() => error); // Rethrow the error
      })
    );
  }
}