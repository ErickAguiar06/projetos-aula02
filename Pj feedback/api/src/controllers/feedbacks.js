const {error} = require('console');
const con = require("../connect");

function create(req, res) {
    const { data, nome, email, feedback} = req.body;
    const sql = `INSERT INTO feedbacks (data, nome, email, feedback) VALUES ('${data}', '${nome}', '${email}', '${feedback}')`

    con.query(sql, (error, result) => {
        if(error){
            res.status(500).json('Erro ao Enviar feedback');
        } else {
            res.status(201).json('Feedback enviado com Sucesso!')
        }
    });
}

function read(req, res){
    const sql = 'SELECT feedback_id, data, nome, email, feedback FROM Feedbacks';

    con.query(sql, (error, result) => {
        if(error){
            res.status(500).json('Erro ao enviar feedback');
        } else {
            res.status(201).json(result)
        }
    });
}

 module.exports = {
    create, 
    read
 }