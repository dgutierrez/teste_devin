import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  template: `
    <div class="chat-page">
      <div class="page-header">
        <h1>Chat Inteligente</h1>
        <p>Converse com seus documentos e assistentes de IA</p>
        <button class="new-chat-button">+ Nova Conversa</button>
      </div>

      <div class="chat-content">
        <div class="empty-state">
          <div class="empty-icon">💬</div>
          <h3>Nenhuma conversa iniciada</h3>
          <p>Comece uma nova conversa para interagir com seus documentos e assistentes</p>
          <button class="cta-button">Iniciar Primeira Conversa</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .chat-page {
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

    .new-chat-button {
      background: var(--cta-primary);
      color: white;
      border: none;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .new-chat-button:hover {
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
export class ChatComponent {}
