var inquirer = require('inquirer');
var mysql = require("mysql");
var newsql= require("datainfo.js")


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
