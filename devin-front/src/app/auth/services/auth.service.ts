import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Observable, BehaviorSubject, tap, catchError, of } from 'rxjs';
import { 
  LoginRequest, 
  LoginResponse, 
  User, 
  UserProfile,
  UserConfigurations,
  PasswordResetRequest,
  PasswordUpdateRequest,
  PasswordChangeRequest
} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  
  private readonly API_BASE_URL = 'https://api.lawrana.com';
  private readonly TOKEN_KEY = 'lawrana_token';
  
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  public readonly isAuthenticated = signal<boolean>(false);
  public readonly currentUser = signal<User | null>(null);
  public readonly isLoading = signal<boolean>(false);

  constructor() {
    this.initializeAuth();
  }

  private initializeAuth(): void {
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getToken();
      if (token) {
        this.isAuthenticated.set(true);
        this.loadUserProfile();
      }
    }
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    this.isLoading.set(true);
    
    return this.http.post<LoginResponse>(`${this.API_BASE_URL}/usuario/login`, credentials)
      .pipe(
        tap(response => {
          if (response.valido && response.dataObject) {
            this.setToken(response.dataObject.token);
            this.setCurrentUser(response.dataObject.usuario);
            this.isAuthenticated.set(true);
          }
          this.isLoading.set(false);
        }),
        catchError(error => {
          this.isLoading.set(false);
          console.error('Login error:', error);
          return of({
            valido: false,
            dataObject: null,
            erros: ['Erro ao fazer login. Tente novamente.'],
            statusCode: error.status || 500
          } as LoginResponse);
        })
      );
  }

  logout(): void {
    this.removeToken();
    this.setCurrentUser(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  requestPasswordReset(request: PasswordResetRequest): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/usuario/recuperasenha`, request);
  }

  updatePassword(request: PasswordUpdateRequest, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-auth-token': token
    });
    
    return this.http.post(`${this.API_BASE_URL}/usuario/atualizasenha`, request, { headers });
  }

  changePassword(request: PasswordChangeRequest): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put(`${this.API_BASE_URL}/usuario/senha`, request, { headers });
  }

  loadUserProfile(): Observable<UserProfile> {
    const headers = this.getAuthHeaders();
    
    return this.http.get<UserProfile>(`${this.API_BASE_URL}/usuario/perfil`, { headers })
      .pipe(
        tap(response => {
          if (response.valido && response.dataObject) {
            const user: User = {
              idUsuario: response.dataObject.idUsuario,
              nomeUsuario: response.dataObject.nomeUsuario,
              emailUsuario: '',
              idEmpresa: '',
              configuracoes: response.dataObject.configuracoes
            };
            this.setCurrentUser(user);
          }
        }),
        catchError(error => {
          console.error('Error loading user profile:', error);
          if (error.status === 401) {
            this.logout();
          }
          return of({
            valido: false,
            dataObject: null,
            erros: ['Erro ao carregar perfil do usuário'],
            statusCode: error.status || 500
          } as UserProfile);
        })
      );
  }

  updateUserProfile(userData: Partial<User>): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put(`${this.API_BASE_URL}/usuario/perfil`, userData, { headers });
  }

  updateUserConfigurations(configurations: Partial<UserConfigurations>): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put(`${this.API_BASE_URL}/usuario/configuracao`, configurations, { headers });
  }

  private setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  private getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  private removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }

  private setCurrentUser(user: User | null): void {
    this.currentUser.set(user);
    this.currentUserSubject.next(user);
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAuthToken(): string | null {
    return this.getToken();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }
}
