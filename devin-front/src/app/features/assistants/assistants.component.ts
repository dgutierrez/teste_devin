import { Component } from '@angular/core';

@Component({
  selector: 'app-assistants',
  standalone: true,
  template: `
    <div class="assistants-page">
      <div class="page-header">
        <h1>Assistentes de IA</h1>
        <p>Crie e gerencie assistentes especializados para diferentes áreas do direito</p>
        <button class="create-button">+ Criar Novo Assistente</button>
      </div>

      <div class="assistants-content">
        <div class="empty-state">
          <div class="empty-icon">🤖</div>
          <h3>Nenhum assistente criado</h3>
          <p>Crie seu primeiro assistente para começar a automatizar tarefas jurídicas</p>
          <button class="cta-button">Criar Primeiro Assistente</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .assistants-page {
      padding: 2rem;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 3rem;
    }

    .page-header div {
      flex: 1;
    }

    .page-header h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .page-header p {
      color: var(--text-secondary);
      font-size: 1.125rem;
    }

    .create-button {
      background: var(--cta-primary);
      color: white;
      border: none;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .create-button:hover {
      filter: brightness(1.1);
    }

    .empty-state {
      background: white;
      border: 1px solid var(--card-border);
      border-radius: 1rem;
      padding: 4rem 2rem;
      text-align: center;
    }

    .empty-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    .empty-state h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .empty-state p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }

    .cta-button {
      background: var(--cta-primary);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      filter: brightness(1.1);
    }

    @media (max-width: 768px) {
      .page-header {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class AssistantsComponent {}
