

//creating a function that takes the input of a cars speed
function speedDetector(speedInput){
//creating an unassigned variable named demerits
    let demerits;
//defining the speed limit
let speedLimit = 70
    //creating an unassigned variable named response
    let response = "";

//checks for invalid input i.e figures below zero
    if(speedInput < 0 ){

//if input is invalid it returns Invalid input
        response = "Invalid input";

//If input is valid and is below 70 then response is 'OK'
        else if(speedInput >= 0 && speedInput <= 70){

       response = "OK";

        }else{
//
            let aboveLimit=5;
//calculating the difference between speedInput and speedLimit

            let diff = speedInput - speedLimit;

            demerits = math.floor(diff/aboveLimit);

            response = `"points" + ${demerits}`
                }

                if(response > 12){

                    response ="Liscense suspended"
}
}

return response;

console.log(response)
}
