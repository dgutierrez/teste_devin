import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="nav-brand">
          <h1 class="logo">Lawrana</h1>
        </div>
        <nav class="nav-menu">
          <a href="#features" class="nav-link">Recursos</a>
          <a href="#how-it-works" class="nav-link">Como Funciona</a>
          <a href="#testimonials" class="nav-link">Depoimentos</a>
          <a href="#faq" class="nav-link">FAQ</a>
          <a routerLink="/login" class="cta-button">Entrar</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: white;
      box-shadow: var(--card-shadow);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-dark);
      margin: 0;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-link {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-link:hover {
      color: var(--primary-medium);
    }

    .cta-button {
      background: var(--cta-primary);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      transform: translateY(-1px);
      box-shadow: var(--card-shadow-hover);
      filter: brightness(1.1);
    }

    @media (max-width: 768px) {
      .nav-menu {
        gap: 1rem;
      }
      
      .nav-link {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {}
