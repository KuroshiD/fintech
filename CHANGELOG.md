# Changelog

Todas as mudanças importantes neste projeto serão documentadas aqui.

## [0.0.1] - 2023-10-05

### Adicionado

- Estrutura inicial do projeto utilizando **NestJS**.
- Configuração do **Docker Compose** com os seguintes serviços:
  - `app` (NestJS)
  - `postgres` (PostgreSQL)
  - `redis` (Redis)
  - `mailhog` (SMTP fake)
  - `pgadmin` (Interface para PostgreSQL)
  - `bull-board` (Painel de filas)
  - `nginx` (Proxy reverso)
- Configuração do **Dockerfile** para build e execução do app.
- Configuração do **nginx.conf** para proxy reverso e suporte ao painel Bull.
- Dependências principais adicionadas:
  - **NestJS** (Core, Config, TypeORM, Bull, JWT, etc.)
  - **Redis**, **PostgreSQL**, **Bull**, **Nodemailer**, **Helmet**, **Swagger**, etc.
- Dependências de desenvolvimento adicionadas:
  - **Jest**, **ts-jest**, **@nestjs/testing**, **typescript**, etc.
- Scripts no `package.json` para build, testes e execução.
- **README.md** estilizado com visão geral, requisitos, instruções de configuração e execução.
- **Requisitos.md** detalhando as funcionalidades e arquitetura do sistema.
- Configuração inicial de **healthcheck** e métricas Prometheus.
- Estrutura inicial para módulos principais:
  - `auth`, `users`, `wallet`, `transactions`, `notifications`, `common`.
- Configuração de variáveis de ambiente para desenvolvimento e produção.
- Configuração do TypeScript e suporte a decorators.

### Alterado

- Nada foi alterado nesta versão.

### Removido

- Nada foi removido nesta versão.
