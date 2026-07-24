---
name: agentic-site-sales-os
description: Conduzir uma operação completa e progressiva de venda de sites feitos com IA, desde a escolha da oferta e prospecção até demonstração, publicação, abordagem, negociação, contrato, entrega e aprendizado pelos fechamentos. Usar quando o usuário disser que quer vender sites, conseguir clientes de sites, continuar a prospecção, criar uma amostra para um negócio, fazer redesign ou site do zero, abordar um lead, responder um interessado, fechar um cliente ou acompanhar o funil. Orquestrar as skills prospector-prospeccao, prospector-redesign, prospector-publicacao, prospector-proposta, prospector-contrato e prospector-crm sem exigir que o usuário escreva prompts técnicos.
---

# Agentic Site Sales OS

Conduzir o usuário por uma etapa de cada vez. Transformar respostas de negócio em pesquisa, decisões, páginas, mensagens e registros prontos. O usuário não precisa saber programar, desenhar nem formular prompts.

## Princípio de condução

1. Localizar primeiro `operacao-sites.json`, `prospector-config.json`, `leads.md` e o CRM na pasta de trabalho. Retomar do estado encontrado sem repetir perguntas.
2. Se não houver estado, iniciar pela etapa 0 de [etapas.md](references/etapas.md).
3. Dizer em uma linha: etapa atual, resultado esperado e o que já existe.
4. Fazer no máximo 3 perguntas curtas, somente sobre a etapa atual. Preferir uma pergunta por interação quando ela desbloquear o trabalho.
5. Não pedir prompts, decisões técnicas, arquitetura, linguagem, framework, hospedagem ou instruções de design. Inferir isso do negócio e explicar apenas decisões que afetem venda, prazo, custo ou risco.
6. Executar tudo que puder com segurança após a resposta. Não transformar cada ação interna em nova pergunta.
7. Registrar fatos e avanço conforme [registro-e-validacao.md](references/registro-e-validacao.md).
8. Encerrar cada interação com apenas: resultado produzido, etapa atual e próxima pergunta ou ação concreta.

Não despejar o funil inteiro, checklists extensos ou várias decisões futuras sem solicitação. Se o usuário estiver sobrecarregado, reduzir a unidade de trabalho para um lead, uma página ou uma mensagem.

## Neutralidade de fornecedor

Preservar métodos e capacidades, não dependências de marca. Quando uma fonte, vídeo, prompt ou tutorial citar Claude, Claude Code, Gemini, ChatGPT, Codex ou outra IA:

1. Identificar o resultado que a ferramenta produziu.
2. Mapear esse resultado para as ferramentas disponíveis no ambiente atual.
3. Executar o equivalente sem exigir que o usuário troque de plataforma.
4. Manter a ferramenta original somente quando houver capacidade exclusiva comprovada ou pedido explícito.
5. Informar qualquer diferença material de qualidade, custo, privacidade ou automação.

Exemplo: interpretar “pedir ao Claude para construir, corrigir e publicar” como “usar o agente de código e o sistema de publicação disponíveis para construir, validar e publicar”. Nunca transformar menção casual a uma IA em pré-requisito.

## Roteamento da oferta

Classificar cada lead em uma destas rotas:

- **Redesign**: possuir site próprio ativo, mas fraco. Usar `prospector-redesign`.
- **Criação do zero**: não possuir site próprio útil, mas demonstrar negócio real, boa reputação ou demanda, atividade recente, contato público e um problema que o site possa resolver.
- **Não qualificado**: não haver evidência de operação, contato, capacidade mínima de compra ou ganho funcional claro.

Na criação do zero, não tratar a ausência de site como descarte automático. Usar Instagram, Google Maps, cardápio, catálogo, avaliações e materiais públicos como fontes. Escolher uma função comercial principal: gerar conversas, pedidos no WhatsApp, reservas, orçamento, catálogo, agendamento ou prova de autoridade. Ler [conhecimento-transcricao.md](references/conhecimento-transcricao.md) ao prospectar, definir a amostra ou abordar.

## Orquestração das skills existentes

Antes de executar uma etapa especializada, ler integralmente o `SKILL.md` correspondente e as referências que ele mandar usar:

| Necessidade | Skill especialista |
|---|---|
| Buscar e qualificar leads | `prospector-prospeccao` |
| Criar uma nova versão de site existente | `prospector-redesign` |
| Publicar e validar acesso público | `prospector-publicacao` |
| Preparar abordagem por e-mail e follow-up | `prospector-proposta` |
| Formalizar cliente fechado | `prospector-contrato` |
| Registrar qualquer mudança do funil | `prospector-crm` |

Aplicar estas regras de compatibilidade:

- Esta skill maestra controla a sequência, as perguntas e a carga cognitiva.
- Reutilizar os recursos das especialistas em vez de copiá-los.
- Nas rotas de criação do zero, adaptar `prospector-prospeccao` e `prospector-redesign`: remover o requisito de site existente e preservar apenas fatos e ativos reais do negócio.
- Usar Sites para construir e publicar entregas navegáveis. Tratar `.openai/hosting.json` como fonte do projeto quando existir.
- Não obrigar lote de 5 páginas quando a etapa progressiva atual definir uma amostra piloto. Escalar para lotes depois que o padrão estiver aprovado.
- Atualizar `leads.md` e CRM a cada mudança de status.
- Para contato externo, preparar o rascunho e pedir confirmação antes de enviar, salvo autorização explícita do usuário para aquele envio ou lote.

## Ciclo operacional

Seguir as etapas e os critérios de passagem de [etapas.md](references/etapas.md). Nunca pular descoberta do problema comercial, verificação mobile, contato real ou registro de resultado.

Ao construir uma demonstração:

1. Coletar somente fatos e materiais reais.
2. Definir um único resultado comercial primário.
3. Fazer a funcionalidade servir ao negócio; beleza deve reforçar essa função.
4. Criar direção de arte própria ao segmento e à marca.
5. Implementar o caminho de conversão completo, incluindo WhatsApp real quando aplicável.
6. Validar primeiro no celular e depois no desktop.
7. Publicar em URL pública antes da abordagem.

Ao abordar:

1. Personalizar com observação verificável.
2. Elogiar sem bajulação excessiva.
3. Apontar oportunidade em linguagem respeitosa.
4. Mostrar trabalho já feito e sem compromisso.
5. Usar CTA leve para olhar e responder.
6. Evitar preço na primeira abordagem, urgência falsa e texto genérico.
7. Ler [abordagem-e-negociacao.md](references/abordagem-e-negociacao.md).

## Limites de honestidade

Não prometer que um número arbitrário de contatos garante vendas. Tratar volume como experimento e calcular taxas reais. Não inventar informações do lead, provas, depoimentos ou resultados. Não representar a demonstração como encomendada pelo negócio. Não transferir domínio, propriedade, conta ou arquivos antes das condições comerciais combinadas.

## Validação

Distinguir:

- **Validação técnica**: pasta da skill aprovada pelo validador, fluxo e registros funcionando.
- **Validação operacional**: um ciclo completo executado com leads reais.
- **Validação comercial**: pelo menos um cliente fechou e o pagamento foi confirmado.

Nunca declarar a skill comercialmente validada apenas porque gerou sites ou mensagens. Depois de cada resposta, objeção, perda ou fechamento, registrar a evidência e ajustar somente a hipótese relacionada. Usar [registro-e-validacao.md](references/registro-e-validacao.md).
