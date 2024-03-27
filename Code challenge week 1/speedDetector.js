
const { Console } = require("console");
const readline= require ("readline");
   const rl = readline.createInterface ({
     input: process.stdin,
     output: process.stdout
   });
//creating a function that takes the input of a cars speed
function speedDetector(speedInput){
    //creating an unassigned variable named demerits
    let demerits;
    //defining the speed limit
    let speedLimit = 70;
    //creating an unassigned variable named response
    let response

    
    //If input is valid and is below 70 then response is 'OK'
    
    if(speedInput >= 0 && speedInput <= 70){

       response = "OK";

    }
    else{

            const aboveLimit=5;
    //calculating the difference between speedInput and speedLimit

            const diff = speedInput - speedLimit;
    //Calculating demerits
            demerits = Math.floor(diff / aboveLimit);
            if( demerits > 12){

             response ="Liscense suspended"
                } 
             else{response = `Demerits: ${demerits}`}
            
        }

                
    return response;
}
// This prompts the user to input speed in km/hr and shows the number of demerits if speed is above 70km/hr .If demerits are above 12 points license is suspended.
rl.question("Enter speed in km/hr:",(speedInput)=>{
    const demerits= speedDetector(parseInt(speedInput));
  console.log(demerits);
  rl.close();
});