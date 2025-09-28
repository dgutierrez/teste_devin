import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">O que nossos clientes dizem</h2>
          <p class="section-subtitle">
            Advogados de todo o Brasil já transformaram sua prática com o Lawrana
          </p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="stars">⭐⭐⭐⭐⭐</div>
              <p>"O Lawrana revolucionou minha prática. Economizo 4 horas por dia e meus clientes ficam impressionados com a rapidez das respostas."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">👨‍💼</div>
              <div class="author-info">
                <div class="author-name">Dr. Carlos Silva</div>
                <div class="author-title">Advogado Trabalhista</div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="stars">⭐⭐⭐⭐⭐</div>
              <p>"Finalmente uma ferramenta que entende as necessidades de quem não é expert em tecnologia. Simples e poderosa!"</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">👩‍💼</div>
              <div class="author-info">
                <div class="author-name">Dra. Ana Santos</div>
                <div class="author-title">Advogada Civilista</div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="stars">⭐⭐⭐⭐⭐</div>
              <p>"A base de conhecimento me ajuda a encontrar precedentes em segundos. Minha pesquisa jurídica nunca foi tão eficiente."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">👨‍💼</div>
              <div class="author-info">
                <div class="author-name">Dr. Roberto Lima</div>
                <div class="author-title">Advogado Criminalista</div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="stars">⭐⭐⭐⭐⭐</div>
              <p>"O site interativo permite que meus clientes tirem dúvidas básicas 24h. Isso me dá mais tempo para casos complexos."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">👩‍💼</div>
              <div class="author-info">
                <div class="author-name">Dra. Mariana Costa</div>
                <div class="author-title">Advogada Empresarial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
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

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: white;
      border: 1px solid var(--card-border);
      border-radius: 1rem;
      padding: 2rem;
      transition: all 0.3s ease;
    }

    .testimonial-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--card-shadow-hover);
    }

    .testimonial-content {
      margin-bottom: 1.5rem;
    }

    .stars {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .testimonial-content p {
      color: var(--text-secondary);
      line-height: 1.6;
      font-style: italic;
      margin: 0;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .author-avatar {
      font-size: 2.5rem;
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--primary-light);
      border-radius: 50%;
    }

    .author-name {
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    .author-title {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .testimonials-grid {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class TestimonialsComponent {}
