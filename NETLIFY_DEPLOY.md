# Configuração de Deploy Automático no Netlify

Este documento explica como configurar o deploy automático do Netlify para que o site seja atualizado automaticamente sempre que houver push no GitHub.

## ⚡ Deploy Automático Configurado

O projeto já está configurado para deploy automático! O arquivo `netlify.toml` contém todas as configurações necessárias.

## Configuração Inicial no Netlify

### 1. Conectar o Repositório GitHub

1. Acesse [Netlify](https://app.netlify.com/)
2. Faça login com sua conta GitHub
3. Clique em **"Add new site"** → **"Import an existing project"**
4. Selecione **"GitHub"** como provedor
5. Autorize o Netlify a acessar seus repositórios (se necessário)
6. Selecione o repositório: `Robson777555/clinica`

### 2. Configurar as Opções de Build

O arquivo `netlify.toml` já está configurado automaticamente! O Netlify detectará automaticamente:

- ✅ **Build command**: `npm run build:netlify` (definido no netlify.toml)
- ✅ **Publish directory**: `dist/public` (definido no netlify.toml)
- ✅ **Branch to deploy**: `main` (padrão, pode ser alterado)
- ✅ **Node.js version**: `20` (definido no netlify.toml e .nvmrc)

**Importante**: Após conectar o repositório, o Netlify detectará automaticamente o arquivo `netlify.toml` e usará essas configurações. Não é necessário configurar manualmente!

### 3. Variáveis de Ambiente (Opcional)

Se você usar variáveis de ambiente, configure-as no painel do Netlify:

1. Vá em **Site settings** → **Environment variables**
2. Adicione as variáveis necessárias (ex: `VITE_ANALYTICS_ENDPOINT`, `VITE_ANALYTICS_WEBSITE_ID`)

## 🚀 Deploy Automático

Após a configuração inicial, o Netlify irá:

- ✅ **Detectar automaticamente** novos commits na branch `main` (via webhook do GitHub)
- ✅ **Fazer build automaticamente** usando o comando `npm run build:netlify`
- ✅ **Publicar automaticamente** o site atualizado em `dist/public`
- ✅ **Notificar por email** quando o deploy for concluído (opcional, configurável)

### Como Funciona

1. Você faz `git push` para o GitHub na branch `main`
2. O GitHub envia um webhook para o Netlify
3. O Netlify detecta o novo commit automaticamente
4. O Netlify executa o build usando as configurações do `netlify.toml`
5. O site é publicado automaticamente

**Não é necessário fazer nada manualmente após o push!** O deploy acontece automaticamente.

## Verificar Status do Deploy

1. Acesse o painel do Netlify
2. Vá em **Deploys** para ver o histórico de deploys
3. Cada push no GitHub gerará um novo deploy automaticamente

## Troubleshooting

### Deploy não está sendo acionado automaticamente

1. Verifique se o repositório está conectado corretamente
2. Verifique se está fazendo push na branch `main`
3. Verifique os logs de build no painel do Netlify

### Erro no build

1. Verifique os logs de build no Netlify
2. Certifique-se de que todas as dependências estão no `package.json`
3. Verifique se o Node.js version está configurado corretamente (recomendado: 20.x ou 22.x)

### Site não está atualizando

1. Aguarde alguns minutos (o build pode levar tempo)
2. Limpe o cache do navegador (Ctrl+F5 ou Cmd+Shift+R)
3. Verifique se o deploy foi concluído com sucesso no painel do Netlify

## Configurações Avançadas

O arquivo `netlify.toml` já inclui:

- ✅ Redirecionamentos para SPA (Single Page Application)
- ✅ Headers de segurança
- ✅ Cache otimizado para assets estáticos
- ✅ Configuração de build e publish directory

Todas as configurações estão prontas para uso!

