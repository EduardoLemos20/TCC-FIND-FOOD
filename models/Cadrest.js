const db = require('./db');

const Cadrest = db.sequelize.define('cadrest', 
    {
    nome: {
        type: db.Sequelize.STRING
    },
    nomerest: {
        type: db.Sequelize.STRING
    },
    cnpj: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.STRING
    },
    ruavenida: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    numerotel: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    },
    confirmsenha: {
        type: db.Sequelize.STRING
    }
})
//Cadrest.sync({force:true})

module.exports = Cadrest