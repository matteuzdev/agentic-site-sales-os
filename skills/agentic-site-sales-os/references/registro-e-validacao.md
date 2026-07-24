# Registro e validação

## Estado persistente

Manter `operacao-sites.json` na pasta do projeto. Criar ou atualizar sem apagar campos desconhecidos:

```json
{
  "versao": 1,
  "etapa_atual": 0,
  "status_validacao": {
    "tecnica": "pendente",
    "operacional": "pendente",
    "comercial": "pendente"
  },
  "config": {
    "nome": "",
    "whatsapp": "",
    "regiao": "",
    "nichos": [],
    "oferta": {},
    "capacidade_semanal": null
  },
  "rodada_atual": {
    "hipotese": "",
    "inicio": "",
    "metricas": {}
  },
  "ultima_acao": "",
  "proxima_acao": ""
}
```

Usar `leads.md` e o CRM para dados por lead; não duplicar toda a base no JSON.

## Estados comerciais mínimos

`novo` → `qualificado` → `amostra` → `publicado` → `abordado` → `respondeu` → `proposta` → `fechado` → `pago` → `entregue`

Permitir `descartado`, `sem-resposta` e `perdido` com motivo. Nunca avançar um lead sem evidência do evento.

## Evidência de validação

- Marcar `tecnica=validada` após o validador oficial passar.
- Marcar `operacional=validada` após um lead real percorrer da qualificação à abordagem com registros completos.
- Marcar `comercial=validada` apenas após `fechado` e confirmação de pagamento. Registrar valor, data, origem, nicho, rota e qual hipótese foi confirmada.

Um fechamento não prova todos os nichos ou preços; prova somente a combinação testada.

## Aprendizado por rodada

Ao final de uma rodada:

1. Calcular conversões entre etapas.
2. Localizar a maior queda.
3. Ler evidências qualitativas das respostas.
4. Escolher uma única variável para alterar.
5. Registrar a nova hipótese antes da rodada seguinte.

Não reescrever todo o processo com base em uma única rejeição.

## Resumo ao usuário

Manter curto:

- `Etapa X — nome`
- `Concluído: resultado`
- `Próximo: pergunta ou ação`

Se houver número relevante, incluir somente o que ajuda a decidir agora.
