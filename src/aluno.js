import conexao from "./banco.js";

//crud 


//Ler/exibir todos os alunos
function ler(res) {
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql , (erro, resultados) => {
        //verificação para ver se há conteúdo
        if(resultados.length === 0) {
            res.status(204).end(); //204 = sem conteúdo. end() encerra a conexão
            return;
        }

        if(erro) {
            res.status(400).json(erro.code); //BAD request
        } else {
            res.status(200).json(resultados);
        }

    });
}

//Inserindo alunos no banco de dados
function inserir(aluno, res){
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {    
            res.status(201).json({ "Status" : "Aluno inserido" });
        }
    });
}

export { ler, inserir };