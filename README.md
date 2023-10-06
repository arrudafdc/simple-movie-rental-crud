# simple-movie-rental-crud

## Sobre o Projeto

Um projeto simples de aluguel de filme criado com o intuito de aprender mais sobre Prisma + PostgreSQL e praticar Typescript + princípios SOLID!

## Observações

Tirei o arquivo .env do Gitignore e troquei o PostgreSQL pelo SQLite para facilitar na execução local.

## Como Usar

```bash
# clonar repositório
git clone https://github.com/arrudafdc/simple-movie-rental-crud.git

# entrar na pasta do projeto simple-movie-rental-crud
cd simple-movie-rental-crud

# baixar as dependências
npm install

# gerar as migrations do prisma
npx prisma migrate dev

# executar o projeto em modo de desenvolvimento
npm run dev

```

## Rotas

A URL base é http://localhost:3333

### create user

> http://localhost:3333/users
- Rota do tipo POST que cria um usuário
- Parâmetros necessários (exemplo):

```json
{
   "name": "João",
   "email": "joao@gmail.com"
}
```

### create movie

> http://localhost:3333/movies
- Rota do tipo POST que cria um filme
- Parâmetros necessários (exemplo):
  
```json
{
   "title": "La La Land",
   "duration": 128,
   "release_date": "2017-01-13T18:15:59.557Z"
}
```

### create rent

> http://localhost:3333/movies/rent
- Rota do tipo POST que cria um aluguel
- Parâmetros necessários (exemplo):
  
```json
{
   "movieId": "fce17837-a564-4270-9235-811243asas0d5351",
   "userId": "f4a8454a-ffac-4710-ae91-0ab46f649509"
}
```

### get movies by release

> http://localhost:3333/movies
- Rota do tipo GET que lista todos os filmes por data e informa quais estão alugados.

### get user

> http://localhost:3333/users
- Rota do tipo GET que lista todos os usuários


## Construído Com

* Typescript
* NodeJS
* PostgreSQL
* Prisma
* Express

## Autor

Lucas Arruda
