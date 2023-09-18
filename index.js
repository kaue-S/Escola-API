import express from "express";
const app = express();

//Criando as rotas 

//Raiz da aplicação

app.get('/', (req, res) => {
    res.send(`Raiz da API NodeJS + Express + My SQL`);
});


//executando o servidor
const porta = 8080;
app.listen(porta, () =>{
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});

//inserindo novos alunos
app.post('/alunos', (req, res) => {
    res.send(`Inserindo um aluno`);
});

//Atualizando dados de um aluno
app.patch('/alunos', (req, res) => {
    res.send(`Atualizando dados de um aluno`);
});

//excluindo alunos
app.delete('/alunos', (req, res) => {
    res.send(`Excluindo alunos`)
});