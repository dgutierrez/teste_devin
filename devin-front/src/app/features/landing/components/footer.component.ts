import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">Lawrana</h3>
            <p class="footer-description">
              Transformando a prática jurídica com inteligência artificial. 
              Simples, seguro e eficiente.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">📧</a>
              <a href="#" class="social-link">📱</a>
              <a href="#" class="social-link">💼</a>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Produto</h4>
            <ul class="footer-links">
              <li><a href="#features">Recursos</a></li>
              <li><a href="#how-it-works">Como Funciona</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Empresa</h4>
            <ul class="footer-links">
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Imprensa</a></li>
              <li><a href="#">Parceiros</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Suporte</h4>
            <ul class="footer-links">
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="mailto:contato@lawrana.com">Contato</a></li>
              <li><a href="#">Documentação</a></li>
              <li><a routerLink="/login">Área do Cliente</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Legal</h4>
            <ul class="footer-links">
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">LGPD</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>&copy; 2024 Lawrana. Todos os direitos reservados.</p>
          </div>
          <div class="footer-badges">
            <span class="badge">🔒 LGPD Compliant</span>
            <span class="badge">🇧🇷 Dados no Brasil</span>
            <span class="badge">⚡ 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--text-primary);
      color: white;
      padding: 4rem 0 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
    }

    .footer-description {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 2.5rem;
      height: 2.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 1.25rem;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--primary-medium);
      transform: translateY(-2px);
    }

    .footer-subtitle {
      font-size: 1.125rem;
      font-weight: 600;
      color: white;
      margin-bottom: 1.5rem;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.75rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: white;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-copyright p {
      color: rgba(255, 255, 255, 0.6);
      margin: 0;
    }

    .footer-badges {
      display: flex;
      gap: 1rem;
    }

    .badge {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.9);
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .footer-badges {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {}
