import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  standalone: true,
  template: `
    <div class="documents-page">
      <div class="page-header">
        <h1>Gerenciamento de Documentos</h1>
        <p>Organize, faça upload e gerencie seus documentos jurídicos</p>
      </div>

      <div class="documents-content">
        <div class="upload-section">
          <div class="upload-card">
            <div class="upload-icon">📁</div>
            <h3>Fazer Upload de Documentos</h3>
            <p>Arraste e solte seus arquivos aqui ou clique para selecionar</p>
            <button class="upload-button">Selecionar Arquivos</button>
          </div>
        </div>

        <div class="documents-list">
          <h2>Seus Documentos</h2>
          <div class="empty-state">
            <div class="empty-icon">📄</div>
            <h3>Nenhum documento encontrado</h3>
            <p>Comece fazendo upload dos seus primeiros documentos</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .documents-page {
      padding: 2rem;
    }

    .page-header {
      margin-bottom: 3rem;
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

    .documents-content {
      display: grid;
      gap: 3rem;
    }

    .upload-card {
      background: white;
      border: 2px dashed var(--card-border);
      border-radius: 1rem;
      padding: 3rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .upload-card:hover {
      border-color: var(--primary-medium);
      background: var(--primary-light);
    }

    .upload-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .upload-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .upload-card p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }

    .upload-button {
      background: var(--cta-primary);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .upload-button:hover {
      filter: brightness(1.1);
    }

    .documents-list h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2rem;
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
    }
  `]
})
export class DocumentsComponent {}
