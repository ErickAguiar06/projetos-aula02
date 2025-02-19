const {error} = require('console');
const con = require("../connect");

function create(req, res) {
    const { telefone, nome, obs} = req.body;
    const sql = `INSERT INTO telefones (telefone, nome, obs) VALUES ('${telefone}', '${nome}', '${obs}')`

    con.query(sql, (error, result) => {
        if(error){
            res.status(500).json('Erro ao Cadastrar Telefone');
        } else {
            res.status(201).json('Telefone Cadastrado com Sucesso!')
        }
    });
}

function read(req, res){
    const sql = 'SELECT telefone_id, telefone, nome, obs FROM Telefones';

    con.query(sql, (error, result) => {
        if(error){
            res.status(500).json('Erro ao cadastrar Telefone');
        } else {
            res.status(201).json(result)
        }
    });
}

 module.exports = {
    create, 
    read
 }