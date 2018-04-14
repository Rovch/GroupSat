var inquirer = require('inquirer');
var mysql = require("mysql");
var sql= require("datainfo.js")


inquirer.prompt([ 
    {
        type: 'list',
        name: 'pick',
        message: 'Flip',
        choices:[
            "first",
            "second"
        ]
    }
])
.then(answers => {

})
