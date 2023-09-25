import mysql2 from 'mysql2';

// const conexao = mysql2.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'escola'
// });

const conexao = mysql2.createConnection({
        host : 'db4free.net',
        user : 'kaue561',
        password : 'Kaue2023',
        database : 'apiescola901'
});

//efetivando a conexão
conexao.connect( erro => {
    if(erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}`);
    }

});

export default conexao;