import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="dashboard">
      <header class="dashboard-header">
        <div class="header-content">
          <h1 class="dashboard-title">Lawrana Dashboard</h1>
          <div class="header-actions">
            <span class="user-name">Olá, {{ authService.currentUser()?.nomeUsuario || 'Usuário' }}!</span>
            <button (click)="logout()" class="logout-button">Sair</button>
          </div>
        </div>
      </header>

      <div class="dashboard-content">
        <nav class="sidebar">
          <ul class="nav-menu">
            <li><a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">📊 Visão Geral</a></li>
            <li><a routerLink="/dashboard/documents" routerLinkActive="active">📁 Documentos</a></li>
            <li><a routerLink="/dashboard/assistants" routerLinkActive="active">🤖 Assistentes</a></li>
            <li><a routerLink="/dashboard/chat" routerLinkActive="active">💬 Chat</a></li>
            <li><a routerLink="/dashboard/knowledge-base" routerLinkActive="active">📚 Base de Conhecimento</a></li>
          </ul>
        </nav>

        <main class="main-content">
          <div class="welcome-section">
            <h2>Bem-vindo ao Lawrana!</h2>
            <p>Sua plataforma de IA jurídica está pronta para uso. Escolha uma das opções no menu lateral para começar.</p>
            
            <div class="quick-actions">
              <div class="action-card">
                <div class="action-icon">📁</div>
                <h3>Organizar Documentos</h3>
                <p>Faça upload e organize seus arquivos jurídicos</p>
                <a routerLink="/dashboard/documents" class="action-button">Começar</a>
              </div>

              <div class="action-card">
                <div class="action-icon">🤖</div>
                <h3>Criar Assistente</h3>
                <p>Configure um assistente de IA especializado</p>
                <a routerLink="/dashboard/assistants" class="action-button">Criar</a>
              </div>

              <div class="action-card">
                <div class="action-icon">💬</div>
                <h3>Iniciar Chat</h3>
                <p>Converse com seus documentos e assistentes</p>
                <a routerLink="/dashboard/chat" class="action-button">Conversar</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      min-height: 100vh;
      background: var(--background-light);
    }

    .dashboard-header {
      background: white;
      border-bottom: 1px solid var(--card-border);
      padding: 1rem 0;
    }

    .header-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dashboard-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-dark);
      margin: 0;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .user-name {
      color: var(--text-secondary);
      font-weight: 500;
    }

    .logout-button {
      background: var(--error);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .logout-button:hover {
      filter: brightness(1.1);
    }

    .dashboard-content {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 250px 1fr;
      min-height: calc(100vh - 80px);
    }

    .sidebar {
      background: white;
      border-right: 1px solid var(--card-border);
      padding: 2rem 0;
    }

    .nav-menu {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-menu li {
      margin-bottom: 0.5rem;
    }

    .nav-menu a {
      display: block;
      padding: 0.75rem 2rem;
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .nav-menu a:hover,
    .nav-menu a.active {
      background: var(--primary-light);
      color: var(--primary-dark);
    }

    .main-content {
      padding: 2rem;
    }

    .welcome-section h2 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .welcome-section p {
      color: var(--text-secondary);
      font-size: 1.125rem;
      margin-bottom: 3rem;
    }

    .quick-actions {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .action-card {
      background: white;
      border: 1px solid var(--card-border);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .action-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--card-shadow-hover);
    }

    .action-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .action-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.75rem;
    }

    .action-card p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }

    .action-button {
      background: var(--cta-primary);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .action-button:hover {
      transform: translateY(-1px);
      filter: brightness(1.1);
    }

    @media (max-width: 768px) {
      .dashboard-content {
        grid-template-columns: 1fr;
      }

      .sidebar {
        order: 2;
        border-right: none;
        border-top: 1px solid var(--card-border);
      }

      .nav-menu {
        display: flex;
        overflow-x: auto;
        padding: 0 1rem;
      }

      .nav-menu li {
        margin-bottom: 0;
        margin-right: 0.5rem;
      }

      .nav-menu a {
        white-space: nowrap;
        padding: 0.75rem 1rem;
      }
    }
  `]
})
export class DashboardComponent {
  public readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  logout(): void {
    this.authService.logout();
  }
}
