var prompt = require('prompt-sync')();

 var value = prompt('Please enter a Number : ');

 var answer = Math.sqrt(value);

 if(value != null && value != '' && value != isNaN)
 {
     
     if(value > 0 && value  % 2 == 0 ) {
        console.log("The square root of\n" + value + "\nequals\n " + answer);
        console.log(value + " is a odd number.");
    }
    else if(value < 0) {
        console.log(value + " is a negative number ! ,Cannot process the negative number format");
    }
    else if(value % 2 ==  1) {
        console.log(value + " is even number ! ,Cannot process the even number format");
    }else {
        console.log(value + " is not a number.please input the correct number!");
    }
 }

