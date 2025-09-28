import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Recursos que fazem a diferença</h2>
          <p class="section-subtitle">
            Ferramentas poderosas e intuitivas para revolucionar sua prática jurídica
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📁</div>
            <h3 class="feature-title">Organização de Documentos</h3>
            <p class="feature-description">
              Crie pastas inteligentes, organize seus arquivos e encontre qualquer documento em segundos.
            </p>
            <ul class="feature-benefits">
              <li>Upload seguro de arquivos</li>
              <li>Busca avançada por conteúdo</li>
              <li>Categorização automática</li>
            </ul>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🤖</div>
            <h3 class="feature-title">Assistentes de IA</h3>
            <p class="feature-description">
              Crie assistentes especializados para diferentes áreas do direito e automatize tarefas repetitivas.
            </p>
            <ul class="feature-benefits">
              <li>Análise de contratos</li>
              <li>Pesquisa jurisprudencial</li>
              <li>Redação de petições</li>
            </ul>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3 class="feature-title">Sites Interativos</h3>
            <p class="feature-description">
              Crie sites personalizados onde seus clientes podem interagir com IA para esclarecer dúvidas básicas.
            </p>
            <ul class="feature-benefits">
              <li>Atendimento 24/7</li>
              <li>FAQ automatizado</li>
              <li>Captura de leads</li>
            </ul>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3 class="feature-title">Chat Inteligente</h3>
            <p class="feature-description">
              Converse com seus documentos e bases de conhecimento através de um chat intuitivo e inteligente.
            </p>
            <ul class="feature-benefits">
              <li>Respostas contextuais</li>
              <li>Múltiplas conversas</li>
              <li>Histórico completo</li>
            </ul>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3 class="feature-title">Base de Conhecimento</h3>
            <p class="feature-description">
              Construa e gerencie bases de conhecimento privadas com seus documentos e precedentes.
            </p>
            <ul class="feature-benefits">
              <li>Conhecimento centralizado</li>
              <li>Busca semântica</li>
              <li>Atualizações automáticas</li>
            </ul>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">Segurança Total</h3>
            <p class="feature-description">
              Seus dados estão protegidos com criptografia de ponta e conformidade com a LGPD.
            </p>
            <ul class="feature-benefits">
              <li>Criptografia end-to-end</li>
              <li>Backup automático</li>
              <li>Conformidade LGPD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features {
      padding: 6rem 0;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.125rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: white;
      border: 1px solid var(--card-border);
      border-radius: 1rem;
      padding: 2rem;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--card-shadow-hover);
      border-color: var(--primary-light);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      display: block;
    }

    .feature-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .feature-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .feature-benefits {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .feature-benefits li {
      color: var(--text-secondary);
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    .feature-benefits li::before {
      content: '✓';
      color: var(--success);
      font-weight: bold;
      position: absolute;
      left: 0;
    }

    @media (max-width: 768px) {
      .features-grid {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class FeaturesComponent {}
