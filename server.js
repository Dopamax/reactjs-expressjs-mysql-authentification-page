//var http= require("http");
var express= require('express');
var app=express();
var mysql =require('mysql');
var bodyParser= require('body-parser');
var cors=require('cors')
var connection=mysql.createConnection({
    host :'localhost',
    user: 'root',
    password:'',
    database : 'base_users'
});

connection.connect(function(err){
    //if(err) throw err
    console.log('You are now connected with mysql database ...');
});
app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended:true
}))

var server=app.listen(3100, "127.0.0.1", function(){
    var host = server.address().address
    var port =server.address().port
    console.log("example app listening at http://%s:%s", host, port);
})

app.get('/',(req, res)=>{
    res.setHeader('Content-Type', 'text/plain')
    //var data_t=[req.body.user.email,req.body.user.motdepasse]
    let sql ="select * from my_user";
    let query=connection.query(sql,(err,result)=>{
        if(err) throw err;
        
        res.send(result)
        
    })
})

app.post('/login',(req, res)=>{
    //let data={name: req.body.name, phone :req.body.phone, email : req.body.email, job: req.body.job, company: req.body.company};
    var data_t=[req.body.email,req.body.motdepasse]
    let sql ="select * from my_user where email=? and motdepasse=?";
    let query=connection.query(sql,data_t,(err,result)=>{
        if(err) throw err;
        
        res.send(result)
        
    })
})