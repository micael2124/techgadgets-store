# Guia de Deploy - TechGadgets Store

## 📋 Pré-requisitos
- Conta no GitHub
- Node.js 18+ instalado localmente (opcional)
- Conhecimento básico de Git

## 🚀 Deploy no GitHub Pages

### Método 1: Upload Direto (Mais Simples)

1. **Criar Repositório no GitHub**
   - Acesse github.com e crie um novo repositório
   - Nome sugerido: `techgadgets-store`
   - Marque como público

2. **Upload dos Arquivos**
   - Faça upload de todos os arquivos da pasta `frontend/dist/`
   - Ou use o GitHub Desktop/CLI para fazer commit

3. **Ativar GitHub Pages**
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Clique em Save

4. **Acessar Site**
   - URL será: `https://seuusuario.github.io/techgadgets-store`
   - Pode demorar alguns minutos para ficar disponível

### Método 2: GitHub Actions (Automático)

1. **Estrutura do Repositório**
```
seu-repositorio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

2. **Criar Workflow File**
   - Crie `.github/workflows/deploy.yml` com o conteúdo:

```yaml
name: Build and Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install pnpm
      run: npm install -g pnpm
      
    - name: Install dependencies
      run: cd frontend && pnpm install --frozen-lockfile
      
    - name: Build
      run: cd frontend && pnpm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./frontend/dist
        cname: seudominio.com  # Opcional: se tiver domínio customizado
```

3. **Configurar Permissões**
   - Settings > Actions > General
   - Workflow permissions: Read and write permissions
   - Allow GitHub Actions to create and approve pull requests: ✓

4. **Fazer Push**
   - Commit e push do código
   - GitHub Actions executará automaticamente
   - Site será atualizado a cada push na branch main

## 🌐 Domínio Customizado (Opcional)

1. **Comprar Domínio**
   - Registrar domínio (ex: techgadgets.com)

2. **Configurar DNS**
   - Adicionar CNAME record apontando para `seuusuario.github.io`

3. **Configurar no GitHub**
   - Settings > Pages > Custom domain
   - Inserir seu domínio
   - Marcar "Enforce HTTPS"

## 🛠️ Outras Opções de Deploy

### Netlify
1. Conectar repositório GitHub
2. Build command: `cd frontend && pnpm run build`
3. Publish directory: `frontend/dist`

### Vercel
1. Importar projeto do GitHub
2. Framework preset: Vite
3. Root directory: `frontend`

### Hostinger/cPanel
1. Fazer build local: `pnpm run build`
2. Upload arquivos da pasta `dist/` via FTP
3. Apontar domínio para pasta

## 🔧 Troubleshooting

### Problema: Página em branco
**Solução**: Verificar se o `base` está correto no `vite.config.js`
```js
export default defineConfig({
  base: '/nome-do-repositorio/',
  // ...
})
```

### Problema: Imagens não carregam
**Solução**: Usar caminhos relativos ou mover imagens para `public/`

### Problema: 404 em rotas
**Solução**: GitHub Pages não suporta SPA routing. Usar hash routing ou criar `404.html`

## 📊 Monitoramento

### Google Analytics (Opcional)
1. Criar conta no Google Analytics
2. Adicionar código de tracking no `index.html`

### Performance
- Use Lighthouse para auditar performance
- Monitore Core Web Vitals
- Otimize imagens se necessário

## 🔒 Segurança

### HTTPS
- GitHub Pages fornece HTTPS automaticamente
- Sempre usar "Enforce HTTPS"

### Headers de Segurança
- Adicionar `_headers` file para Netlify
- Configurar CSP se necessário

## 📱 PWA (Futuro)

Para transformar em PWA:
1. Adicionar `manifest.json`
2. Implementar Service Worker
3. Configurar ícones e splash screens

---

## ✅ Checklist de Deploy

- [ ] Build local funciona sem erros
- [ ] Todas as imagens carregam corretamente
- [ ] Site é responsivo em mobile
- [ ] Formulário de contato funciona
- [ ] Links de navegação funcionam
- [ ] SEO básico configurado
- [ ] HTTPS ativado
- [ ] Domínio customizado (se aplicável)
- [ ] Analytics configurado (se aplicável)

## 📞 Suporte

Se encontrar problemas:
1. Verificar logs do GitHub Actions
2. Testar build local primeiro
3. Consultar documentação do GitHub Pages
4. Verificar Issues no repositório do projeto

**Boa sorte com seu deploy! 🚀**

