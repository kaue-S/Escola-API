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

//ler um aluno
function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {
        if(resultados === 0){
            res.status(204).end();
        }

        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]);
        }

    });
    
}

//atualizar dados de um aluno
function atualizar(id, aluno, res){
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if(erro) {
            res.status(400).json(erro.code);
        } else {
            // res.status(200).json({ "Status " : "Atualizado com sucesso"});
            res.status(200).json ( {...aluno, id} );
        }
    });
}

//excluir um aluno
function excluir(id, res){
    const sql = "DELETE FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {
        if (erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(200).json ( {"Status" : "Aluno excluido", id} );
        }
    });
}

export { ler, inserir, lerUm, atualizar, excluir };