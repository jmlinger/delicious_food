<h1 align="center">Delicious Food</h1>
<br>

# Descrição
Aplicativo fullstack, totalmente responsivo, desenvolvido em React e Node.js que apresenta para o usuário as melhores opções de restaurantes.
<br>

# Stacks de Desenvolvimento

<div>
  <a href="https://javascript.info/">
    <img src="https://img.shields.io/badge/javascript-339933?style=for-the-badge&logo=javascript&color=black" />
  </a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
    <img src="https://img.shields.io/badge/html5-339933?style=for-the-badge&logo=html5&color=black" />
  </a>
  <a href="https://www.w3schools.com/cssref/">
    <img src="https://img.shields.io/badge/css-339933?style=for-the-badge&logo=css3&color=black" />
  </a>
  <a href="https://pt-br.reactjs.org/docs/getting-started.html">
    <img src="https://img.shields.io/badge/React-339933?style=for-the-badge&logo=react&color=black" />
  </a>
  <a href="https://styled-components.com/docs">
    <img src="https://img.shields.io/badge/Styled--Components-339933?style=for-the-badge&logo=styledcomponents&color=black" />
  </a>
  <a href="https://docs.npmjs.com/">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=black" />
  </a>
  <a href="https://expressjs.com/pt-br/">
    <img src="https://img.shields.io/badge/Express.js-339933?style=for-the-badge&logo=express&color=black" /> 
  </a>
  <a href="https://dev.mysql.com/doc/">
    <img src="https://img.shields.io/badge/MySQL-339933?style=for-the-badge&logo=mysql&color=black" />
  </a>
  <a href="https://sequelize.org/">
    <img src="https://img.shields.io/badge/Sequelize-339933?style=for-the-badge&logo=sequelize&color=black" />
  </a>
    <a href="https://sequelize.org/">
    <img src="http://jwt.io/img/logo-asset.svg" height="28px"/>
  </a>
</div>
<br>

# A aplicação em nuvem

Acesse a aplicação alocada no Heroku por <a href="https://frontend-delicious-food-app.herokuapp.com/">aqui<a/>.

<br>  

# Rodando a aplicação localmente
## Pré-requisitos

Para começar é necessário você ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MySQL](https://dev.mysql.com/doc/). Além disto, é importante possuir um editor de código como [VSCode](https://code.visualstudio.com/).

### Rodando o servidor Back-End
Acesse o repositório backend por <a href="https://github.com/jmlinger/delicious_food_backend/">aqui<a/>.

```bash
# Clone o repositório backend com a chave SSH ou HTTP a depender de como seu git está configurado.

# Acesse a pasta do projeto no terminal/cmd
$ cd delicius_food

# Vá para a back-end
$ cd delicius_food_challenge_backend

# Instale as dependências
$ npm install

## Crie um arquivo .env

- NODE_ENV=development
- MYSQL_HOST=localhost
- MYSQL_PORT=3306
- MYSQL_USER=(seu usuário mysql)
- MYSQL_PASSWORD=(sua senha mysql)
- MYSQL_DB_NAME=delicius_food_challenge
- JWT_SECRET=delicius_food_challenge
	
# Execute a aplicação
$ npm run start

# O servidor inciará na porta:3001 - acesse <http://localhost:3001>
```

### Rodando o Front-End 

```bash
# Clone este repositório com a chave SSH ou HTTP a depender de como seu git está configurado.

# Acesse a pasta do projeto no terminal/cmd
$ cd delicius_food

# Vá para a front-end
$ cd delicius_food_challenge_frontend

# Instale as dependências
$ npm install

## Crie um arquivo .env

- REACT_APP_NODE_ENV=dev
- REACT_APP_API_URL_DEPOYED=https://backend-delicious-food-app.herokuapp.com
- REACT_APP_API_URL_LOCAL=http://localhost:3001
- REACT_APP_URL_DEPOYED=https://frontend-delicious-food-app.herokuapp.com
- REACT_APP_URL_LOCAL=http://localhost:3000
	
# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação inciará na porta:3000 - acesse <http://localhost:3000>
```

<br>

## Funcionalidades da aplicação

<div align=right>
	<h4>V 1.36</h4>

</div>

Tela de login (/):
- [x] Login.

Tela de registro (/register):
- [x] Cadastro de usuário.

Tela de Restaurantes (/restaurants):
- [x] Exibe a lista dos restaurantes disponíveis.
- [x] Exibe Barra de Navegação.
- [x] Funcionalidade de filtragem por favoritos.
- [x] Acesso à Tela de Detalhes do Restaurante ao selecionar um card.

Tela de Detalhes do Restaurante(/restaurants/:id)
- [x] Exibe detalhes do restaurante.
- [x] Exibe detalhes do menu do restaurante.
- [x] Exibe Barra de Navegação.
- [x] Funcionalidade de favoritar restaurante.

Barra de navegação:
- [x] Acesso à Tela de Restaurantes.
- [x] Barra de busca.
- [x] Acesso ao Gerenciamento de Perfil.

Gerenciamento de Perfil (modal):
- [x] Alteração de dados do usuário.
- [x] Logout.

<br>

## Status

<h3> 
	🚧  Projeto finalizado 🚧
</h3>
