import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Transforme sua prática jurídica com 
            <span class="highlight">Inteligência Artificial</span>
          </h1>
          <p class="hero-subtitle">
            Organize documentos, crie assistentes inteligentes e acelere seu trabalho 
            com a plataforma pensada especialmente para advogados.
          </p>
          <div class="hero-actions">
            <a routerLink="/login" class="cta-primary">Começar Agora</a>
            <a href="#features" class="cta-secondary">Conhecer Recursos</a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">4h</span>
              <span class="stat-label">economizadas por dia</span>
            </div>
            <div class="stat">
              <span class="stat-number">95%</span>
              <span class="stat-label">de satisfação</span>
            </div>
            <div class="stat">
              <span class="stat-number">24/7</span>
              <span class="stat-label">disponibilidade</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card">
            <div class="card-header">
              <div class="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="card-title">Lawrana Dashboard</span>
            </div>
            <div class="card-content">
              <div class="feature-preview">
                <div class="feature-icon">📁</div>
                <div class="feature-text">
                  <h4>Documentos Organizados</h4>
                  <p>Gerencie todos os seus arquivos</p>
                </div>
              </div>
              <div class="feature-preview">
                <div class="feature-icon">🤖</div>
                <div class="feature-text">
                  <h4>Assistente IA</h4>
                  <p>Análise inteligente de documentos</p>
                </div>
              </div>
              <div class="feature-preview">
                <div class="feature-icon">💬</div>
                <div class="feature-text">
                  <h4>Chat Interativo</h4>
                  <p>Converse com seus documentos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, var(--primary-light) 0%, white 100%);
      padding: 8rem 0 4rem;
      margin-top: 80px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
    }

    .highlight {
      color: var(--primary-medium);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2.5rem;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .cta-primary, .cta-secondary {
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .cta-primary {
      background: var(--cta-primary);
      color: white;
    }

    .cta-primary:hover {
      transform: translateY(-2px);
      box-shadow: var(--card-shadow-hover);
      filter: brightness(1.1);
    }

    .cta-secondary {
      background: white;
      color: var(--primary-medium);
      border: 2px solid var(--primary-medium);
    }

    .cta-secondary:hover {
      background: var(--primary-medium);
      color: white;
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-dark);
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .hero-card {
      background: white;
      border-radius: 1rem;
      box-shadow: var(--card-shadow-hover);
      overflow: hidden;
      border: 1px solid var(--card-border);
    }

    .card-header {
      background: var(--background-light);
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid var(--card-border);
    }

    .card-dots {
      display: flex;
      gap: 0.5rem;
    }

    .card-dots span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--primary-light);
    }

    .card-title {
      font-weight: 600;
      color: var(--text-primary);
    }

    .card-content {
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .feature-preview {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .feature-icon {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--primary-light);
      border-radius: 0.75rem;
    }

    .feature-text h4 {
      margin: 0 0 0.25rem 0;
      color: var(--text-primary);
      font-weight: 600;
    }

    .feature-text p {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-actions {
        flex-direction: column;
      }

      .hero-stats {
        justify-content: center;
      }
    }
  `]
})
export class HeroComponent {}
