# Sistema de Pagamentos Simplificado

![NestJS](https://img.shields.io/badge/NestJS-v11.0.14-red)
![Docker](https://img.shields.io/badge/Docker-Compose-blue)
![Redis](https://img.shields.io/badge/Redis-v7.0-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v15.0-blue)

## 📖 Visão Geral

Este é um sistema de pagamentos simplificado desenvolvido com **NestJS**. **O projeto está atualmente em fase inicial de desenvolvimento e as funcionalidades serão implementadas gradualmente.**

## 🚀 Funcionalidades Planejadas

- **Cadastro de Usuários e Lojistas**
- **Autenticação JWT com Refresh Token**
- **Transferências Financeiras**
- **Notificações Assíncronas**
- **Painel Administrativo**
- **Relatórios e Métricas**
- **Integração com Serviços Externos**
- **Segurança Avançada**

## 🛠️ Tecnologias Utilizadas

- **Backend**: [NestJS](https://nestjs.com/)
- **Banco de Dados**: PostgreSQL
- **Cache e Filas**: Redis + Bull
- **Containerização**: Docker + Docker Compose
- **Testes**: Jest (unitários e e2e)
- **Monitoramento**: Prometheus + Grafana (simulado)
- **Documentação**: Swagger

## 📋 Requisitos

- **Node.js**: v18 ou superior
- **Docker**: v20 ou superior
- **Docker Compose**: v2.0 ou superior

## ⚙️ Configuração do Ambiente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/sistema-pagamentos.git
   cd sistema-pagamentos
   ```
2. Configure as variáveis de ambiente:

   - Copie o arquivo `.env.example` para `.env`:
     ```bash
     cp .env.example .env
     ```
   - Atualize os valores conforme necessário.
3. Suba os containers com Docker Compose:

   ```bash
   docker-compose up --build
   ```
4. Acesse o sistema:

   - **API**: [http://localhost:3000](http://localhost:3000)
   - **Bull Dashboard**: [http://localhost:3020/admin/queues](http://localhost:3020/admin/queues)
   - **Mailhog (SMTP)**: [http://localhost:8025](http://localhost:8025)
   - **pgAdmin**: [http://localhost:5050](http://localhost:5050)

## 🧪 Testes

Execute os testes unitários e de integração:

- Testes unitários:

  ```bash
  yarn test
  ```
- Testes de cobertura:

  ```bash
  yarn test:cov
  ```
- Testes e2e:

  ```bash
  yarn test:e2e
  ```

## 📂 Estrutura do Projeto

```plaintext
src/
├── auth/          # Módulo de autenticação
├── users/         # Módulo de usuários
├── wallet/        # Módulo de carteira digital
├── transactions/  # Módulo de transferências
├── notifications/ # Módulo de notificações
├── common/        # Utilitários e helpers
└── main.ts        # Arquivo principal
```

## 📈 Monitoramento e Métricas

- **Healthcheck**: [http://localhost:3000/health](http://localhost:3000/health)
- **Métricas Prometheus**: [http://localhost:3000/metrics](http://localhost:3000/metrics)

## 📜 Documentação

Acesse a documentação Swagger em [http://localhost:3000/docs](http://localhost:3000/docs).

## 🛡️ Segurança

- Proteção contra brute-force
- Criptografia de dados sensíveis
- Rate limiting
- Content Security Policy (CSP)

## 🖥️ CI/CD

- **Pipeline**: GitHub Actions (Lint, Testes, Build)
- **Deploy**: Docker Compose (local) ou serviços na nuvem (opcional)

## 📝 Changelog

O progresso do projeto e as alterações realizadas podem ser acompanhados no arquivo `CHANGELOG.md`. Este arquivo será atualizado regularmente para refletir as mudanças implementadas durante o desenvolvimento.

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com ❤️ por [Seu Nome](https://github.com/seu-usuario).

## 🌟 Melhorias Futuras

- Implementação de autenticação OAuth2.
- Suporte a múltiplos idiomas (i18n).
- Integração com gateways de pagamento.
- Painel administrativo com gráficos interativos.
- Logs centralizados com ELK Stack.
