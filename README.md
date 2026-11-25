# Sistema de Gestão Guiando Vidas

Projeto Integrador Extensionista II (ADS).

Aplicação inicial do Projeto Social Guiando Vidas, localizado na Vila Kennedy, Rio de Janeiro/RJ. Esta etapa apresenta a estrutura com frontend em JavaScript usando Vite+, API em Node.js/Express e rota de verificação `GET /api/health`.

## Funcionalidade desta etapa

- Página inicial institucional do Guiando Vidas.
- API Express com a rota `GET /api/health`.
- Proxy do Vite+ para encaminhar chamadas `/api` ao servidor Express.
- Exibição do status da API e do horário da resposta.
- Arquivo `.env.example` para documentar a configuração local.

## Requisitos

- Git
- Node.js gerenciado pelo Vite+ ou ambiente compatível
- Vite+ (`vp`)
- Navegador atualizado

## Como executar

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/SEU-USUARIO/guiando-vidas-pie2.git
   cd guiando-vidas-pie2
   ```

2. Instale as dependências:

   ```bash
   vp install
   ```

3. Crie seu arquivo `.env` a partir do exemplo (ou mantenha `PORT=3000`):

   ```bash
   cp .env.example .env
   ```

   No Windows PowerShell, use:

   ```powershell
   Copy-Item .env.example .env
   ```

4. Abra um terminal e inicie a API:

   ```bash
   vp run api
   ```

5. Abra outro terminal na mesma pasta e inicie o frontend:

   ```bash
   vp dev
   ```

6. Acesse `http://localhost:5173`.

A página deve exibir **Status da API: ok** e a data/hora retornada pelo servidor.

## Teste direto da API

Com a API em execução, acesse `http://localhost:3000/api/health`. A resposta esperada é um JSON com `status: "ok"`, o nome da aplicação e a data/hora.

## Segurança

O arquivo `.env` contém configurações locais e está listado no `.gitignore`. Não publique senhas, tokens ou outras credenciais. O arquivo `.env.example` pode ser versionado porque contém apenas valores demonstrativos.

## Escopo

Esta é a estrutura inicial solicitada na Atividade 1 do PIE II. Cadastro de alunos, turmas, frequência, banco de dados e autenticação serão desenvolvidos nas próximas etapas da disciplina.
