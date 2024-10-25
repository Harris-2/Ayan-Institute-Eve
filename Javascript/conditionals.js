//if Statements

function form() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if ( email === "" || password === "") {
        alert('Please enter email or password');
        return false;
    }
    if (!email.includes('@') || password.length < 8) {
        alert('Please enter valid email address');
        return false;
    }
}

// ELSE IF STATEMENTS

// let marks;

// marks = prompt('What are your marks?')

// if (marks > 80) {
//     alert('A grade');
// } else if (marks > 70) {
//     alert('B grade');
// } else{
//     alert ('C grade');
// }

// SWITCH CASE STATEMENTS

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

document.getElementById("demo").innerHTML = "Today is " + day;