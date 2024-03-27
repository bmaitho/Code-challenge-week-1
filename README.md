# Code challenge week 1

#### Date, 2024/03/22

#### By *Brian Maitho*
## Project setup
The technologies used in this project are Github and Javascript.

To run any of the snippets from the code-challenge-week-1 repository, follow the steps below:

Clone the repository: git clone https://github.com/bmaitho/Code-challenge-week-1/tree/main , on your terminal.

Change the directory to that of the cloned repository.

You can open the project with your preferred text editor or IDE.

Edit and run the code as required.

Note that these steps are general and may vary depending on your preference and machine setup.


## Student Grade Generator
## Description
It's a program that prompts the user to input student marks with an input range of zero to a hundred and an output with the correct grade using the scale: Grading Scale: A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40.

## Implementation 
1. Prompt the user to enter the student's marks.
2. Receives user input 
3. A function is used to determine the letter grade based on the grading scale provided above.
4. Once the letter grade has been determined, the result is then displayed.
5. For example
6. Enter student marks (Between 0 and 100):70
The student's grade is: B

## Speed Detector 
## Description
It's a program that takes as input the speed of a car e.g. 80. It checks to see if the car traveled at the recommended speed of 70. If not it calculates demerits where for every 5 kiliometers above the speed limit of 70, one demerit is awarded. As a result, if the demerits exceed 12 then it tells the driver that their license has been suspended.

## Implementation
1. The program runs using a function called speedDetector(speedInput). inside it, the speed limit variable is assigned a value of 70 
2. It then checks if the speedInput is within the range of 0 and 70 
3. If the speedInput is within th 0-70 range the response is okay 
4. If the speedInput is above 70 the function calculates by how much is the input above 70 
5. For every 5 km/hr above the 70km/hr limit the function assigns one demerit to the driver 
6. The program outputs a message indicating the driver's demerit points. If the demerit points exceed 12 points then the program tells the driver that their license has been suspended
7. for example : 
8. Enter speed in km/hr:70
OK
9. Enter speed in km/hr:120
Demerits: 10
10. Enter speed in km/hr:200
License suspended

## netSalaryCalculator.js
## Description
It's a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits .It also calculates the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
Note that the parameters used to calculate PAYE, NHIF, and NSSF were those in effect on March 2024.
## implementation
1. The program runs a function that calculates the net salary of an individual 
2. I first created tax brackets which allows the function to calculate the individuals tax based on the bracket they fall under 
3. Calculated gross salary and ensured the taxable income does not exceed the range defined by taxbrackets
4. calculated the NHIF deductions based on the individuals gross salary 
5. Defined the constant rate to be 0.06
6. calculated NSSF deductions
7. calcuated net salary 
8. console.logged net salary 
9. output asks an individual to input their basic salary and benefits then shows them their net salary  
10. for example 
11. Enter basic salary:200000
12. Enter benefits:500
13. Net Salary 184070.32
## Installation

You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

### Installation instruction
```
Git clone https://github.com/bmaitho/Code-challenge-week-1/commit/b02bd9195ab3ab599569cc1e471084f5c6523848

```

# Live Link
[Git](gh-pages link)

## Technologies used
Github
Javascript

## Support and contact details
github.com/bmaitho

### License
The content of this site is licensed under the MIT license
Copyright (c) 2018.
