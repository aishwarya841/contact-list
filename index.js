const express  = require('express');
const port = 8000;
const path = require('path');
const fs = require('fs');


const app = express();
var contactList = [
    {
        name : "Aishwarya",
        number : "227924930"
    },
    {
        name : "Manu",
        number : "86189406846"
    }
];



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    return res.render('home',{
        title : "Contact List",
        contact_list : contactList,
        
    });

});

app.post('/create-contact',function(req,res){
    contactList.push(req.body);
    return res.redirect('/');

});

app.listen(port, function(err){
    if(err){
        console.log("hey you have an error");
    }

    console.log("Welcome to this server");

});