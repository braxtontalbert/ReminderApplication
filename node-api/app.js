const express = require('express');


const app = express();

const bp = require('body-parser');

const cors = require('cors');

app.use(cors());

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))



app.get('/login', (req, res) => {


    console.log(req);
    res.send("received");

});

app.post('/home', (req, res) => {


    console.log(req.body);

    let title = req.body.title;
    let body = req.body.body

    if(req.body.title != "" && req.body.body != ""){

        let returnData = {

            "Status": true,
            "Message": "Reminder validated"
        }
        res.send(returnData);

    }

    else{
        let returnData = {

            "Status": false,
            "Message": "Reminder is not validated"
        }
        res.send(returnData);
    }




});

app.post('/login', (req, res) => {


    let email = "braxton.talbert@gmail.com";
    let password = "123456";

    console.log(req.body);

    if(req.body.email == email){

        if(req.body.password == password){
            
            let returnData = {

                "Status": true,
                "Message": "User validated"
            }
            res.send(returnData);

        }

        else{

            let returnData = {

                "Status": false,
                "Message": "User validation failed"
            }
            res.send(returnData);
        }




    }

    else{

        let returnData = {

            "Status": false,
            "Message": "User validation failed"
        }
        res.send(returnData);

    }

});




app.listen(8000, (req,res) => {

    console.log("Express API running on port 8000");
});