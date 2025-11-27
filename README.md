# Clínica Médica - Website

## Descrição

Este é o repositório do site da Clínica Médica, uma plataforma web para pacientes encontrarem e agendarem consultas com médicos especialistas. O site apresenta uma interface moderna e responsiva, com listagem de profissionais, páginas de sobre e contato, e integração com componentes UI personalizados.

O projeto foi desenvolvido com foco em usabilidade, acessibilidade e performance, utilizando tecnologias modernas de frontend.

## Funcionalidades

- **Página Inicial**: Busca e listagem de médicos com filtros por nome e especialidade.
- **Header**: Navegação com logo clicável e menu responsivo (desktop/mobile).
- **Páginas**: Home, Sobre, Contato e 404 (Not Found).
- **Footer**: Informações de contato, horário, localização e copyright.
- **Componentes UI**: Utiliza shadcn/ui para elementos como cards, botões, formulários e mais.
- **Responsividade**: Layout adaptável para desktop, tablet e mobile.
- **Favicon e Logo**: Ícones personalizados para branding.
- **Outros**: Suporte a temas (via ThemeContext), error boundary e hooks personalizados.

## Tecnologias Utilizadas

- **Frontend**: React 18+ com TypeScript
- **Build Tool**: Vite (para desenvolvimento e build rápido)
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui (baseado em Radix UI e Tailwind)
- **Roteamento**: Wouter (roteador leve para React)
- **Outros**:
  - React DevTools
  - Prettier e ESLint para formatação e linting
  - Google Fonts (Inter)
  - Analytics placeholder (Umami, configurável via env vars)

## Estrutura do Projeto

```
clinica rei/
├── client/                 # Aplicação React principal
│   ├── public/             # Assets estáticos (imagens, favicon)
│   │   ├── favicon.png     # Ícone do site
│   │   ├── logo.png        # Logo da clínica
│   │   └── doctor-*.jpg    # Imagens dos médicos
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis (Header, Footer, UI)
│   │   ├── contexts/       # Contextos (ex: ThemeContext)
│   │   ├── hooks/          # Hooks personalizados (useMobile, usePersistFn)
│   │   ├── lib/            # Utilitários (utils.ts)
│   │   ├── pages/          # Páginas principais (Home, About, Contact)
│   │   ├── App.tsx         # Componente raiz
│   │   ├── main.tsx        # Entrada da app
│   │   └── index.css       # Estilos globais
│   └── index.html          # Template HTML
├── server/                 # Backend (se aplicável, atualmente index.ts básico)
├── shared/                 # Código compartilhado (const.ts)
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configurações TypeScript
├── vite.config.ts          # Configurações Vite
└── README.md               # Este arquivo
```

## Instalação e Configuração

1. **Pré-requisitos**:
   - Node.js (versão 20.19+ ou 22.12+ recomendada)
   - npm ou pnpm (preferencial, pois lockfile é pnpm)

2. **Clone o Repositório**:
   ```
   git clone <url-do-repositorio>
   cd clinica rei
   ```

3. **Instale as Dependências**:
   ```
   pnpm install
   ```
   Ou com npm:
   ```
   npm install
   ```

4. **Configurações Opcionais**:
   - Crie um arquivo `.env` na raiz para variáveis de ambiente:
     ```
     VITE_ANALYTICS_ENDPOINT=https://seu-analytics.com
     VITE_ANALYTICS_WEBSITE_ID=seu-website-id
     ```
   - Ajuste o logo e favicon em `client/public/` se necessário.

## Executando o Projeto

- **Modo Desenvolvimento**:
  ```
  pnpm dev
  ```
  Ou:
  ```
  npm run dev
  ```
  Acesse http://localhost:3000 no navegador.

- **Build para Produção**:
  ```
  pnpm build
  ```
  Os arquivos serão gerados em `dist/public/`.

- **Preview do Build**:
  ```
  pnpm preview
  ```

## Desenvolvimento

- **Adicionando Componentes UI**: Use `npx shadcn-ui@latest add <component>` para novos componentes (ex: button, card).
- **Estilos**: Edite `src/index.css` ou use classes Tailwind diretamente.
- **Roteamento**: Adicione novas rotas em `App.tsx` usando `<Route>` do Wouter.
- **Hot Reload**: Alterações são refletidas automaticamente no navegador.

## Contribuição

1. Fork o repositório.
2. Crie uma branch: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adiciona feature X'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

Siga as convenções de código: TypeScript estrito, componentes funcionais, acessibilidade (alt texts, ARIA).

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Para dúvidas ou suporte, abra uma issue no repositório.
