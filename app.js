const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Cadrest = require("./models/Cadrest");

app.use(express.static('views'));

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/perfilrestaurante', function(req,res){
    Cadrest.findAll().then(function(perfilrestaurante){
        res.render('perfilrestaurante', {perfilrestaurante: perfilrestaurante});
    })
});

app.get('/findfood', function(req,res){
    res.render('findfood');
})

app.get('/cadastro', function(req,res){
    res.render('cadastro');
});

app.post('/cadastro', function(req, res){
    Cadrest.create({
        nome: req.body.nome,
        nomerest: req.body.nomerest,
        cnpj: req.body.cnpj,
        cep: req.body.cep,
        ruavenida: req.body.ruavenida,
        cidade: req.body.cidade,
        numerotel: req.body.numerotel,
        email: req.body.email,
        senha: req.body.senha,
        confirmsenha: req.body.confirmsenha
    }).then(function(){
        res.redirect("/perfilrestaurante")
    }).catch(function(erro){
        res.send("Pagamento nao foi cadastrado com sucesso! " + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br> Valor:" + req.body.valor + "<br>") 
})

app.listen(8080);