import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { PasswordResetRequest } from '../models/user.model';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1 class="login-title">Recuperar Senha</h1>
          <p class="login-subtitle">Digite seus dados para receber o link de recuperação</p>
        </div>

        @if (!emailSent()) {
          <form [formGroup]="resetForm" (ngSubmit)="onSubmit()" class="login-form">
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
                [class.error]="resetForm.get('id_empresa')?.invalid && resetForm.get('id_empresa')?.touched"
              />
              @if (resetForm.get('id_empresa')?.invalid && resetForm.get('id_empresa')?.touched) {
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
                [class.error]="resetForm.get('email_usuario')?.invalid && resetForm.get('email_usuario')?.touched"
              />
              @if (resetForm.get('email_usuario')?.invalid && resetForm.get('email_usuario')?.touched) {
                <span class="field-error">E-mail válido é obrigatório</span>
              }
            </div>

            <button
              type="submit"
              class="login-button"
              [disabled]="resetForm.invalid || authService.isLoading()"
            >
              @if (authService.isLoading()) {
                <span class="loading-spinner"></span>
                Enviando...
              } @else {
                Enviar Link de Recuperação
              }
            </button>

            <div class="login-footer">
              <a href="#" (click)="goToLogin($event)" class="forgot-password">
                Voltar ao Login
              </a>
            </div>
          </form>
        } @else {
          <div class="success-message">
            <div class="success-icon">✅</div>
            <h3>E-mail enviado com sucesso!</h3>
            <p>Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.</p>
            <button (click)="goToLogin($event)" class="login-button">
              Voltar ao Login
            </button>
          </div>
        }

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
export class PasswordResetComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  public readonly authService = inject(AuthService);

  public readonly errorMessage = signal<string>('');
  public readonly emailSent = signal<boolean>(false);

  public readonly resetForm: FormGroup = this.fb.group({
    id_empresa: ['', [Validators.required]],
    email_usuario: ['', [Validators.required, Validators.email]]
  });

  onSubmit(): void {
    if (this.resetForm.valid) {
      this.errorMessage.set('');
      const request: PasswordResetRequest = this.resetForm.value;

      this.authService.requestPasswordReset(request).subscribe({
        next: (response) => {
          if (response.valido) {
            this.emailSent.set(true);
          } else {
            this.errorMessage.set(
              response.erros?.join(', ') || 'Erro ao solicitar recuperação de senha.'
            );
          }
        },
        error: (error) => {
          console.error('Password reset error:', error);
          this.errorMessage.set('Erro de conexão. Tente novamente.');
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  goToLogin(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/login']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.resetForm.controls).forEach(key => {
      const control = this.resetForm.get(key);
      control?.markAsTouched();
    });
  }
}
