# Guia de Migração para Windsurf (ou VS Code)

Este guia explica como transferir este projeto para o Windsurf (ou qualquer outro editor baseado em VS Code) mantendo todas as funcionalidades.

## 1. Transferência dos Arquivos

A maneira mais prática é copiar a pasta inteira do projeto.

1.  Localize a pasta onde o projeto está salvo atualmente:
    `d:\CONTEÚDOS\SERVIÇOS FOOH\SITE FOOH\vivid-void-visions`
2.  Copie esta pasta inteira para o local desejado no seu computador.

## 2. Abrindo no Windsurf

1.  Abra o **Windsurf**.
2.  Vá em **File > Open Folder** (Arquivo > Abrir Pasta).
3.  Selecione a pasta que você acabou de copiar.

## 3. Instalação das Dependências

Se você não copiou a pasta `node_modules` (o que é recomendado para economizar espaço na transferência), você precisará reinstalar as dependências.

1.  Abra o terminal integrado no Windsurf (`Ctrl + '` ou `Terminal > New Terminal`).
2.  Execute o comando:
    ```bash
    npm install
    ```
    *Isso vai baixar todas as bibliotecas necessárias (React, Tailwind, Lucide, etc.) listadas no `package.json`.*

## 4. Rodando o Projeto

Para ver o site funcionando localmente (igual você vê agora):

1.  No terminal, execute:
    ```bash
    npm run dev
    ```
2.  O terminal mostrará um link (geralmente `http://localhost:5173/`).
3.  Clique no link ou abra no seu navegador.

## 5. Dicas para o Windsurf

*   **Extensões Recomendadas**:
    *   **ESLint**: Para encontrar erros no código.
    *   **Tailwind CSS IntelliSense**: Para ajudar com as classes de estilo.
    *   **Prettier**: Para formatar o código automaticamente.

*   **Comandos Úteis**:
    *   `npm run build`: Cria a versão final otimizada para colocar no ar (deploy).
    *   `npm run preview`: Testa a versão final localmente.

## Resumo da Estrutura

*   `src/`: Todo o código fonte (componentes, páginas, estilos).
*   `public/`: Imagens e arquivos estáticos (logos, vídeos).
*   `index.html`: O arquivo principal que carrega o site.
*   `vite.config.ts`: Configuração do servidor de desenvolvimento.

Se seguir estes passos, o projeto funcionará exatamente como está agora, com todas as animações, popups e integrações.
