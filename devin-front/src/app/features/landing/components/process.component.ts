import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  template: `
    <section id="how-it-works" class="process">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Como funciona</h2>
          <p class="section-subtitle">
            Em poucos passos, você estará aproveitando todo o poder da IA em sua prática jurídica
          </p>
        </div>

        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Cadastre-se</h3>
              <p class="step-description">
                Crie sua conta em menos de 2 minutos. É simples, rápido e seguro.
              </p>
            </div>
          </div>

          <div class="step-connector"></div>

          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Organize seus documentos</h3>
              <p class="step-description">
                Faça upload dos seus arquivos e organize-os em pastas inteligentes.
              </p>
            </div>
          </div>

          <div class="step-connector"></div>

          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Configure seus assistentes</h3>
              <p class="step-description">
                Crie assistentes especializados para diferentes áreas e tarefas.
              </p>
            </div>
          </div>

          <div class="step-connector"></div>

          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">Comece a usar</h3>
              <p class="step-description">
                Interaja com seus documentos, crie conteúdo e automatize processos.
              </p>
            </div>
          </div>
        </div>

        <div class="process-cta">
          <h3>Pronto para começar?</h3>
          <p>Junte-se a centenas de advogados que já transformaram sua prática com o Lawrana.</p>
          <a href="#" class="cta-button">Começar Gratuitamente</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .process {
      padding: 6rem 0;
      background: var(--background-light);
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

    .process-steps {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4rem;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 200px;
    }

    .step-number {
      width: 4rem;
      height: 4rem;
      background: var(--cta-primary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .step-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.75rem;
    }

    .step-description {
      color: var(--text-secondary);
      line-height: 1.5;
      margin: 0;
    }

    .step-connector {
      width: 3rem;
      height: 2px;
      background: var(--primary-light);
      margin: 0 1rem;
    }

    .process-cta {
      text-align: center;
      background: white;
      padding: 3rem 2rem;
      border-radius: 1rem;
      box-shadow: var(--card-shadow);
    }

    .process-cta h3 {
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .process-cta p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      font-size: 1.125rem;
    }

    .cta-button {
      background: var(--cta-primary);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: var(--card-shadow-hover);
      filter: brightness(1.1);
    }

    @media (max-width: 768px) {
      .process-steps {
        flex-direction: column;
      }

      .step-connector {
        width: 2px;
        height: 3rem;
        margin: 1rem 0;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class ProcessComponent {}
