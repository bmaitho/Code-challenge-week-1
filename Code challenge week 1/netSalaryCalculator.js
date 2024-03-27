//Creating a function that calculates net salary having taken in the basic salary and benefits 

const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})

function calculateNetSalary(basicSalary,benefits){

 const taxBrackets =[
    
     {minIncome: 0,  maxIncome:24000,taxRate: 0.1},
     {minIncome:24001, maxIncome:32333, taxRate:0.24},
     {minIncome:32334, maxIncome:500000, taxRate :0.3 },
     {minIncome:500001, maxIncome:800000, taxRate:0.325},
     {minIncome:800001, maxIncome:1000000, taxRate:0.35},
    
 ];
 // calculating gross salary 
 const grossSalary= basicSalary + benefits;
 //calculating tax
 let tax =0;
 for (const bracket of taxBrackets){
    if (grossSalary > bracket.maxIncome){
    const taxableIncome = 

    //  Ensures the taxable income does not exceed the range defined by taxbrackets
    Math.min(
        grossSalary - bracket.minIncome,bracket.maxIncome -bracket.minIncome)
        
         tax += taxableIncome * bracket.taxRate;
    }
    else {
        break
    }
 }

 //calculating nhifDeductions

const nhifDeduction = 0
function calculateNhifDeduction(grossSalary){
    if(grossSalary <= 5999){
        return 150;
    }
    else if(grossSalary >= 6000 && grossSalary <= 7999){
        return 300;
    }
    else if(grossSalary >= 8000 && grossSalary <= 11999){
        return 400;
    }
    else if(grossSalary >= 12000 && grossSalary <= 14999){
        return 500;
    }
    else if(grossSalary >= 15000 && grossSalary <= 19999){
        return 600;
    }
    else if(grossSalary >= 20000 && grossSalary <= 24999){
        return 750;
    }
    else if(grossSalary >= 25000 && grossSalary <= 29999){
        return 850;
    }
    else if(grossSalary >= 30000 && grossSalary <= 34999){
        return 900;
    }
    else if(grossSalary >= 35000 && grossSalary <= 39999){
        return 950;
    }
    else if(grossSalary >= 40000 && grossSalary <= 44999){
        return 1000;
    }
    else if(grossSalary >= 45000 && grossSalary <= 49999){
        return 1100;
    }
    else if(grossSalary >= 50000 && grossSalary <= 59999){
        return 1200;
    }
    else if(grossSalary >= 60000 && grossSalary <= 69999){
        return 1300;
    }
    else if(grossSalary >= 70000 && grossSalary <= 79999){
        return 1400;
    }
    else if(grossSalary >= 80000 && grossSalary <= 89999){
        return 1500;
    }
    else if(grossSalary >= 90000 && grossSalary <= 99999){
        return 1600;
    }
    else{
        return 1700;
    };
}
//calculating nssfDeduction
 const nssfRate= 0.06;
 
 const nssfDeduction = grossSalary * nssfRate;

 ///calculating net salary 
 const netSalary = (grossSalary - tax - nhifDeduction - nssfDeduction).toFixed(2) ;
 return netSalary;
};
 rl.question("Enter basic salary:",(basicSalary)=>{
    rl.question("Enter benefits:",(benefits)=>{
        const netSalary = calculateNetSalary(parseInt(basicSalary),parseInt(benefits));
        console.log("Net Salary", netSalary);
        rl.close();
    })
 })