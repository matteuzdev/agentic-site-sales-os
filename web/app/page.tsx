const pipeline = [
  ["Novo", 12],
  ["Qualificado", 7],
  ["Contato", 5],
  ["Respondeu", 3],
  ["Prova", 2],
  ["Proposta", 1],
  ["Ganho", 0],
];

const actions = [
  { title: "Responder Marmoraria Alfa", detail: "Lead respondeu há 18 min", tag: "AGORA" },
  { title: "Criar prova para Clínica Aurora", detail: "ICP forte · sem site", tag: "PROVA" },
  { title: "Follow-up Studio Norte", detail: "2 dias sem resposta", tag: "FOLLOW-UP" },
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">SITE SALES <span>OS</span></div>
        <nav>
          {["Hoje","Oportunidades","Prospects","Pipeline","Mensagens","Provas","Propostas","Clientes","Entrega","CRM / Histórico","Inteligência"].map((item, i) => (
            <button className={i === 0 ? "active" : ""} key={item}>{item}</button>
          ))}
        </nav>
      </aside>

      <section className="content">
        <header>
          <div>
            <p className="eyebrow">QUINTA-FEIRA · OPERAÇÃO COMERCIAL</p>
            <h1>O que gera receita agora?</h1>
          </div>
          <div className="goal">Meta do dia <strong>17 / 40 contatos</strong></div>
        </header>

        <section className="heroGrid">
          <article className="card focus">
            <span className="label">PRÓXIMA MELHOR AÇÃO</span>
            <h2>Responder Marmoraria Alfa</h2>
            <p>O lead demonstrou interesse. A IA recomenda validar prazo antes de enviar proposta.</p>
            <div className="buttons">
              <button className="primary">Abrir conversa</button>
              <button>Ver contexto</button>
            </div>
          </article>

          <article className="card">
            <span className="label">HOJE</span>
            <div className="metric"><strong>23</strong><span>contatos restantes</span></div>
            <div className="metric"><strong>5</strong><span>respostas pendentes</span></div>
            <div className="metric"><strong>2</strong><span>follow-ups vencidos</span></div>
          </article>
        </section>

        <section className="section">
          <div className="sectionHead"><h3>Fila de ação</h3><button>Ver tudo</button></div>
          <div className="actions">
            {actions.map(a => (
              <article className="action" key={a.title}>
                <div><strong>{a.title}</strong><p>{a.detail}</p></div>
                <span>{a.tag}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="sectionHead"><h3>Pipeline ativo</h3><button>Abrir funil</button></div>
          <div className="pipeline">
            {pipeline.map(([name, qty]) => (
              <article key={name} className="stage">
                <span>{name}</span><strong>{qty}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="sectionHead"><h3>Loop do sistema</h3></div>
          <div className="loop">
            <span>HunterX</span><b>→</b><span>ICP</span><b>→</b><span>Estratégia</span><b>→</b><span>Mensagem</span><b>→</b><span>Resposta</span><b>→</b><span>Prova</span><b>→</b><span>Venda</span><b>→</b><span>Aprendizado</span>
          </div>
        </section>
      </section>
    </main>
  );
}
