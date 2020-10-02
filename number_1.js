var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var num;
var arrays = [];
var output =0;

rl.question("Input:", function(answer) {
    num = answer;
    if(num.search(",")!=-1)
    {
        arrays = num.split(",")
    }else{
        arrays = num.split("")
    }

    for(var y=arrays.length-1;y>=0;y--)
    {
        if(arrays[y] == "1")
        {
            output++;
        }else{
            break;
        }

    }
    console.log("output : " + output);

    rl.close()
})
