import express from "express";
import { ler, inserir, lerUm, atualizar, excluir } from './src/aluno.js';
import conexao from "./src/banco.js";


const app = express();
const porta = process.env.PORT || 3306;

//adicionando suporte ao formato json
app.use(express.json());

//adicionando suporte a dados vindo de formulários
app.use(express.urlencoded({ extended : true}));



//Criando as rotas 

//Raiz da aplicação

app.get('/', (req, res) => {
    res.send(`Raiz da API NodeJS + Express + My SQL`);
});

//exibindo todos os alunos
app.get('/alunos', (req, res) => {
    ler(res);
});

//exibindo dados de um aluno
app.get('/alunos/:id', (req, res) => {
    // res.send(`Um aluno`);
    const id = parseInt(req.params.id);
    lerUm(id, res);
});


//inserindo novos alunos
app.post('/alunos', (req, res) => {
    // res.send(`Inserindo um aluno`);
    const novoAluno = req.body;
    inserir(novoAluno, res);
});

//Atualizando dados de um aluno
app.patch('/alunos/:id', (req, res) => {
    // res.send(`Atualizando dados de um aluno`);
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
});

//exibindo dados de um aluno
app.get('/alunos/:id', (req, res) => {
    res.send(`Exibindo dados de um aluno`)
});


//excluindo alunos
app.delete('/alunos/:id', (req, res) => {
    // res.send(`Excluindo um aluno`)
    const id = parseInt(req.params.id);
    excluir(id, res);
});


//executando o servidor
app.listen(porta, () =>{
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});
