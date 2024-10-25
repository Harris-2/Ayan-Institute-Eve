//While loop

let i = 0;

while (i < 10) {
    i++;
 console.log( i);
}

//do while loop


let text = ""
let a = 0;

do {
  text += "<br>The number is " +a;
  a++;
}
while (a < 10);  

document.getElementById("demo").innerHTML = text;




// For Loop

for (let num = 0; num < 11; num++) {
    console.log('The number is: ' + num);
}

let cart = [100, 220, 370, 450, 590];

let add = 0;

for(let i = 0; i < cart.length; i++){
    add += cart[i];
}





