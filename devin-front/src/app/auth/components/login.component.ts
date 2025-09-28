import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1 class="login-title">Lawrana</h1>
          <p class="login-subtitle">Entre na sua conta</p>
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
          @if (errorMessage()) {
            <div class="error-message">
              {{ errorMessage() }}
            </div>
          }

          <div class="form-group">
            <label for="id_empresa" class="form-label">ID da Empresa</label>
            <input
              id="id_empresa"
              type="text"
              formControlName="id_empresa"
              class="form-input"
              placeholder="Digite o ID da sua empresa"
              [class.error]="loginForm.get('id_empresa')?.invalid && loginForm.get('id_empresa')?.touched"
            />
            @if (loginForm.get('id_empresa')?.invalid && loginForm.get('id_empresa')?.touched) {
              <span class="field-error">ID da empresa é obrigatório</span>
            }
          </div>

          <div class="form-group">
            <label for="email_usuario" class="form-label">E-mail</label>
            <input
              id="email_usuario"
              type="email"
              formControlName="email_usuario"
              class="form-input"
              placeholder="seu@email.com"
              [class.error]="loginForm.get('email_usuario')?.invalid && loginForm.get('email_usuario')?.touched"
            />
            @if (loginForm.get('email_usuario')?.invalid && loginForm.get('email_usuario')?.touched) {
              <span class="field-error">E-mail válido é obrigatório</span>
            }
          </div>

          <div class="form-group">
            <label for="senha_usuario" class="form-label">Senha</label>
            <input
              id="senha_usuario"
              type="password"
              formControlName="senha_usuario"
              class="form-input"
              placeholder="Digite sua senha"
              [class.error]="loginForm.get('senha_usuario')?.invalid && loginForm.get('senha_usuario')?.touched"
            />
            @if (loginForm.get('senha_usuario')?.invalid && loginForm.get('senha_usuario')?.touched) {
              <span class="field-error">Senha é obrigatória</span>
            }
          </div>

          <button
            type="submit"
            class="login-button"
            [disabled]="loginForm.invalid || authService.isLoading()"
          >
            @if (authService.isLoading()) {
              <span class="loading-spinner"></span>
              Entrando...
            } @else {
              Entrar
            }
          </button>

          <div class="login-footer">
            <a href="#" (click)="goToPasswordReset($event)" class="forgot-password">
              Esqueceu sua senha?
            </a>
          </div>
        </form>

        <div class="login-help">
          <p class="help-text">
            Precisa de ajuda? Entre em contato conosco em 
            <a href="mailto:contato@lawrana.com">contato@lawrana.com</a>
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  public readonly authService = inject(AuthService);

  public readonly errorMessage = signal<string>('');

  public readonly loginForm: FormGroup = this.fb.group({
    id_empresa: ['', [Validators.required]],
    email_usuario: ['', [Validators.required, Validators.email]],
    senha_usuario: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.errorMessage.set('');
      const credentials: LoginRequest = this.loginForm.value;

      this.authService.login(credentials).subscribe({
        next: (response) => {
          if (response.valido) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage.set(
              response.erros?.join(', ') || 'Erro ao fazer login. Verifique suas credenciais.'
            );
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          this.errorMessage.set('Erro de conexão. Tente novamente.');
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  goToPasswordReset(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/auth/reset-password']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }
}
