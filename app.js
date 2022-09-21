let password = "password";
let email = "braxton.talbert@gmail.com";
var outEmail;
var outName;
var outPassword;


const express = require('express');
const app = express();

var http = require('http');

var request = require('request');

var fs = require('fs');

var requests = require('./requests');
const { handleRequests } = require('./requests');
const { Console, debug } = require('console');

function onServerStart(request,response){

    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./base.html',null, function(error,data){ 
        if(error){

            response.writeHead(404);
            response.write('File not found.');
        }

        else{

            response.write(data);


        }

        response.end();
        
    });




}

function onLoginRequest(request, response){

    

}

var server = http.createServer(requests.handleRequests);




server.listen(8000);


