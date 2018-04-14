var inquirer = require('inquirer');
var mysql = require("mysql");




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