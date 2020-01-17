# Possible Automation
[![E2E library: protractor](https://img.shields.io/badge/e2e%20library-protractor-blue)](https://www.npmjs.com/package/protractor)
[![library: protractor-helper](https://img.shields.io/badge/library-protractor--helper-blue.svg)](https://www.npmjs.com/package/protractor-helper)

## Execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

### Instalando as dependências e executando os testes

Todos os comandos abaixos são executados no _prompt de comando_.

**1** - Clone o repositório e acesse o diretório criado:

```sh
git clone git@github.com:PauloGoncalvesBH/test_possible.git && cd test_possible
```

**2** - Instale as dependências necessárias para rodar os testes:

```sh
npm ci --production
```
> O comando `npm ci` instala as dependências de forma limpa.

**3** - E, finalmente, execute os testes:

```sh
npm test
```

## Sobre o projeto

### Integração contínua

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FPauloGoncalvesBH%2Ftest_possible%2Fbadge%3Fref%3Dmaster%26token%3D23bb4674665a2440888157866835ac7bb2341112&style=flat)](https://actions-badge.atrox.dev/PauloGoncalvesBH/test_possible/goto?ref=master&token=23bb4674665a2440888157866835ac7bb2341112)

A cada `git push` na branch Master os testes são executados para garantir a integridade do projeto.

### Padronização

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Toda mensagem de commit é verificada se está de acordo com a convenção de boa prática de commit. _Para saber mais, [clique aqui](https://github.com/conventional-changelog/commitlint#what-is-commitlint) e [aqui](https://commitlint.js.org/#/concepts-commit-conventions)._

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Antes de cada `git commit` o [prettier](https://github.com/prettier/prettier) entra em ação garantindo que todos os arquivos `js` e `json` estão em um estilo consistente.

> Caso ocorra algum problema em alguma dessas etapas, o comando é abortado, impedindo de que mensagem fora do padrão ou código fora do padrão seja enviado ao repositório central.

---

_Licença MIT_