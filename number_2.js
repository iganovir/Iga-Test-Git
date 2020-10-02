var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function recursion(str)
{
    return (str == undefined || str.length<1 || str.length == 1) ? str : recursion(str.substring(1)) + str.charAt(0);
}

rl.question("Input Text : ", function(answer){
    var result = recursion(answer);

    console.log(result);
    rl.close();
})

