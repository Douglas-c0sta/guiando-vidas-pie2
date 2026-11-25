import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="page">
    <section class="panel">
      <div class="brand-mark" aria-hidden="true">GV</div>
      <p class="eyebrow">PROJETO SOCIAL • VILA KENNEDY</p>
      <h1>Guiando Vidas</h1>
      <p class="intro">
        Sistema de apoio à gestão de alunos, turmas e frequência
        do projeto social de jiu-jitsu.
      </p>

      <div class="status-card" aria-live="polite">
        <span class="status-label">Status da API</span>
        <strong id="status" class="status checking">verificando...</strong>
        <small id="api-time">Aguardando resposta do servidor</small>
      </div>

      <p class="footnote">Projeto Integrador Extensionista II • ADS</p>
    </section>
  </main>
`;

async function verificarApi() {
  const status = document.querySelector("#status");
  const apiTime = document.querySelector("#api-time");

  try {
    const resposta = await fetch("/api/health");

    if (!resposta.ok) {
      throw new Error("A API respondeu com erro.");
    }

    const dados = await resposta.json();
    status.textContent = `Status da API: ${dados.status}`;
    status.className = "status online";
    apiTime.textContent = `Aplicação: ${dados.app} • Verificado em: ${new Date(dados.hora).toLocaleString("pt-BR")}`;
  } catch (erro) {
    status.textContent = "Status da API: fora do ar";
    status.className = "status offline";
    apiTime.textContent = "Não foi possível estabelecer conexão com a API.";
    console.error(erro);
  }
}

verificarApi();
