var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isBracketBalanced(inputData){

    let brackets = "[]{}()"
    let tempData = []
  
    for(let bracket of inputData) {
      let index = brackets.indexOf(bracket)
  
      if(index % 2 === 0) {
        tempData.push(index+1)
      } else {
        if(tempData.pop() !== index) {
            return 'NO';
        }
      }
    }    
    return 'YES';
  }

rl.question("Input brackets : ", function(answer){
    console.log(isBracketBalanced(answer));
    rl.close();
});


