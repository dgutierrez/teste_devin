import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="faq" class="faq">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Perguntas Frequentes</h2>
          <p class="section-subtitle">
            Tire suas dúvidas sobre o Lawrana e descubra como ele pode transformar sua prática
          </p>
        </div>

        <div class="faq-list">
          @for (item of faqItems; track item.id) {
            <div class="faq-item" [class.active]="activeItem() === item.id">
              <button 
                class="faq-question" 
                (click)="toggleItem(item.id)"
                [attr.aria-expanded]="activeItem() === item.id"
              >
                <span>{{ item.question }}</span>
                <span class="faq-icon">{{ activeItem() === item.id ? '−' : '+' }}</span>
              </button>
              @if (activeItem() === item.id) {
                <div class="faq-answer">
                  <p>{{ item.answer }}</p>
                </div>
              }
            </div>
          }
        </div>

        <div class="faq-cta">
          <h3>Ainda tem dúvidas?</h3>
          <p>Nossa equipe está pronta para ajudar você a começar</p>
          <a href="mailto:contato@lawrana.com" class="cta-button">Falar com Especialista</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq {
      padding: 6rem 0;
      background: var(--background-light);
    }

    .container {
      max-width: 800px;
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
      line-height: 1.6;
    }

    .faq-list {
      margin-bottom: 4rem;
    }

    .faq-item {
      background: white;
      border: 1px solid var(--card-border);
      border-radius: 0.75rem;
      margin-bottom: 1rem;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .faq-item:hover {
      box-shadow: var(--card-shadow);
    }

    .faq-item.active {
      border-color: var(--primary-light);
    }

    .faq-question {
      width: 100%;
      padding: 1.5rem;
      background: none;
      border: none;
      text-align: left;
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
    }

    .faq-question:hover {
      background: var(--background-light);
    }

    .faq-icon {
      font-size: 1.5rem;
      color: var(--primary-medium);
      font-weight: 300;
      transition: transform 0.3s ease;
    }

    .faq-answer {
      padding: 0 1.5rem 1.5rem;
      animation: slideDown 0.3s ease;
    }

    .faq-answer p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .faq-cta {
      text-align: center;
      background: white;
      padding: 3rem 2rem;
      border-radius: 1rem;
      box-shadow: var(--card-shadow);
    }

    .faq-cta h3 {
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .faq-cta p {
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
      .section-title {
        font-size: 2rem;
      }

      .faq-question {
        font-size: 1rem;
        padding: 1.25rem;
      }
    }
  `]
})
export class FaqComponent {
  activeItem = signal<number | null>(null);

  faqItems = [
    {
      id: 1,
      question: 'Como funciona a segurança dos meus dados?',
      answer: 'Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD. Seus dados são armazenados em servidores seguros no Brasil e nunca são compartilhados com terceiros.'
    },
    {
      id: 2,
      question: 'Preciso ter conhecimento técnico para usar o Lawrana?',
      answer: 'Não! O Lawrana foi desenvolvido especialmente para advogados que não são experts em tecnologia. A interface é intuitiva e oferecemos suporte completo para você começar.'
    },
    {
      id: 3,
      question: 'Posso integrar com outros sistemas que já uso?',
      answer: 'Sim, o Lawrana oferece APIs e integrações com os principais sistemas jurídicos do mercado. Nossa equipe técnica pode ajudar na configuração.'
    },
    {
      id: 4,
      question: 'Qual o limite de documentos que posso armazenar?',
      answer: 'Oferecemos planos flexíveis com diferentes limites de armazenamento. Você pode começar com o plano básico e expandir conforme sua necessidade.'
    },
    {
      id: 5,
      question: 'Como funciona o suporte técnico?',
      answer: 'Oferecemos suporte via chat, email e telefone durante horário comercial. Para clientes premium, temos suporte prioritário 24/7.'
    },
    {
      id: 6,
      question: 'Posso cancelar minha assinatura a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem multas ou taxas adicionais. Seus dados ficam disponíveis por 30 dias após o cancelamento.'
    }
  ];

  toggleItem(id: number): void {
    this.activeItem.set(this.activeItem() === id ? null : id);
  }
}
