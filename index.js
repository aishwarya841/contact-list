const express  = require('express');
const port = 8000;
const path = require('path');
const fs = require('fs');
const db = require('./config/mongoose');
const Contact = require('./model/contact');

const app = express();
// var contactList = [
//     {
//         name : "Aishwarya",
//         number : "227924930"
//     },
//     {
//         name : "Manu",
//         number : "86189406846"
//     }
// ];



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    Contact.find({},function(err,contact){
        if(err){
            console.log("Error in finding the records");
            return;
        }
        return res.render('home',{
            title : "Contact List",
            contact_list : contact,
            
        });

    })
    

});

app.post('/create-contact',function(req,res){
    Contact.create({
        name : req.body.name,
        phone : req.body.phone
    },function(err, newContact){
        if(err){
            console.log("Error while creating the Contact");
            return;
        }
        console.log("***New Contact",newContact);
        return res.redirect('back');
    })

});

app.get('/delete-contact',function(req,res){
    var id = req.query.id;
    // var index = contactList.findIndex(contact => (contact.number == number));
    // if(index != -1){
    //     contactList.splice(index,1);
    // }
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error while deleting the record");
            return;
        }
        return res.redirect('/');
    });
    
    

});

app.listen(port, function(err){
    if(err){
        console.log("hey you have an error");
    }

    console.log("Welcome to this server");

});

