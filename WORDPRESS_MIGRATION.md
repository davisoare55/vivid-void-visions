# Guia de Migração para WordPress (Método Embed)

Como o seu site usa tecnologias avançadas (React, Animações, Interatividade) que o Elementor não faz nativamente, a melhor forma de "transferir" mantendo 100% das funções é **incorporar** o código gerado dentro do WordPress.

Aqui está o passo a passo para fazer isso usando o Elementor que você já tem.

## Passo 1: Gerar os Arquivos do Site (Build)

No seu terminal do VS Code/Windsurf, execute:

```bash
npm run build
```

Isso vai criar uma pasta chamada `dist` no seu projeto. Dentro dela haverá:
*   `index.html`
*   Uma pasta `assets` (com arquivos .js e .css)
*   Outras pastas como `depoimentos`, `portfolio`, etc.

## Passo 2: Preparar os Arquivos para Upload

1.  Acesse o **Gerenciador de Arquivos** da sua hospedagem (Hostinger, cPanel, etc.) ou use um plugin de FTP.
2.  Vá para a pasta pública do seu WordPress (geralmente `public_html`).
3.  Crie uma nova pasta chamada `landing-page` (ou o nome que preferir).
4.  **Upload**: Envie **todo o conteúdo** da pasta `dist` (que você gerou no Passo 1) para dentro dessa nova pasta `landing-page`.

Agora, seus arquivos estarão acessíveis em: `seusite.com.br/landing-page/assets/...`

## Passo 3: Criar a Página no WordPress

1.  No Painel do WordPress, vá em **Páginas > Adicionar Nova**.
2.  Dê um título (ex: "Home Nova").
3.  Clique em **Editar com Elementor**.
4.  Nas configurações da página (ícone de engrenagem no canto inferior esquerdo), mude o **Layout da Página** para **Elementor Canvas** (isso remove o cabeçalho e rodapé padrão do tema, deixando a tela limpa para o nosso design).

## Passo 4: Incorporar o Código

Agora vamos "chamar" o seu site React dentro dessa página.

1.  Arraste um widget **HTML** para a página.
2.  Cole o seguinte código (ajustando o caminho se necessário):

```html
<!-- Container onde o React vai renderizar -->
<div id="root"></div>

<!-- Estilos e Scripts do React -->
<!-- IMPORTANTE: Substitua 'NOME_DO_ARQUIVO' pelos nomes reais que estão na pasta dist/assets -->
<link rel="stylesheet" href="/landing-page/assets/index-SEU_CODIGO_CSS.css">
<script type="module" src="/landing-page/assets/index-SEU_CODIGO_JS.js"></script>

<!-- Scripts Externos (VTurb, Calendly) -->
<link rel="preconnect" href="https://calendly.com">
<link rel="preconnect" href="https://assets.calendly.com">
<link rel="dns-prefetch" href="https://api.vturb.com.br">
```

**Atenção**:
*   Vá na sua pasta `dist/assets` e veja os nomes exatos dos arquivos. Eles terão códigos aleatórios, tipo `index-D8s9a7d.js`.
*   Atualize o código HTML acima com esses nomes exatos.

## Passo 5: Publicar

1.  Clique em **Publicar**.
2.  Acesse a página. O seu site React deve carregar perfeitamente dentro do WordPress!

---

## Alternativa (Mais Simples - Iframe)

Se o método acima for muito técnico, você pode hospedar o site gratuitamente na **Vercel** ou **Netlify** (que é feito para isso) e apenas colocar um iframe no WordPress.

1.  Hospede o site na Vercel (arraste a pasta do projeto pra lá).
2.  No Elementor, use o widget HTML:
    ```html
    <iframe src="https://seu-site-na-vercel.app" style="width:100%; height:100vh; border:none;"></iframe>
    ```
    *(Essa opção é mais fácil, mas o método 1 é mais profissional para SEO).*
