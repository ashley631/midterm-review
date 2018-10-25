"use strict";

Loops
#1: Write for loop from 1-10 then 10-1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

#2: Write while loop from 1-10 then 10-1
let i = 1 
while (i <= 10) {
    console.log(i);
    i++;
}

let i = 10
while (i >= 1) {
    console.log(i);
    i--
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let number of numbers) {
    console.log(number);
}

Conditions:
#1: Define two variables: actualTemp and a desiredTemp. Write conditionals to tell the heating & cooling system what to do. Log one of these three things: Run A/C, Run heat, or Standby

let actualTemp = 60
let desiredTemp = 80

if (actualTemp < desiredTemp) {
    console.log("Run heat");
} else if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else (console.log("Standby"));












