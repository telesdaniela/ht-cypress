# 🧪 Testes automatizados da tela de cadastro com Cypress

Projeto de estudo com testes E2E (ponta a ponta) na tela de cadastro da loja do [Hopper Trace](https://hoppertrace.vercel.app/loja/register), um site feito para prática de QA.

## 📋 Planejamento
Os cenários foram planejados e acompanhados no **Jira** antes da automação, com um ticket para cada caso de teste. Os commits deste repositório estão ligados aos tickets pelo código (por exemplo, `HC-4`).

## ✅ Cenários automatizados
- Cadastro com sucesso
- Cadastro com campo de e-mail vazio
- Cadastro com campo de senha vazio
- Cadastro com todos os campos vazios
- Cadastro com e-mail sem @
- Cadastro com senha inválida
- Cadastro com campo de nome vazio

## 💡 Decisões e aprendizados
- **E-mail único a cada execução:** o e-mail é gerado com `Date.now()`, para o teste de sucesso poder rodar várias vezes sem dar cadastro duplicado.
- **Botão desabilitado:** nos cenários em que o botão fica desabilitado, o teste valida o estado do botão (`be.disabled`) em vez de tentar clicar.
- **Mensagens do navegador:** mensagens como "Preencha este campo" são nativas do navegador e mudam conforme navegador e idioma. Os testes foram confirmados no Chrome.
- **Erro do React (#418):** o site solta esse erro durante o carregamento, e o Cypress derrubaria o teste. Ele é ignorado de forma específica com `Cypress.on('uncaught:exception')`, sem esconder outros erros.

## 🛠️ Tecnologias
- JavaScript
- Cypress
- Git e GitHub
- Jira

## ▶️ Como rodar
1. Instale as dependências: `npm install`
2. Abra o Cypress: `npx cypress open`
3. Escolha o navegador e clique no arquivo `teste-cadastro.cy.js`

## ⚠️ Aviso
Todos os dados usados nos testes (nomes, e-mails e senhas) são **fictícios** e foram criados apenas para fins de estudo. O site testado é um ambiente de prática.

## 📬 Contato
- 👤 Daniela Rodrigues Teles
- 💼 LinkedIn: [linkedin.com/in/telesdaniela](https://www.linkedin.com/in/telesdaniela/)
- 🐙 GitHub: [github.com/telesdaniela](https://github.com/telesdaniela)
- 📧 E-mail: danielateles18@gmail.com