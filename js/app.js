

let firstQ = prompt("Is Your Age Is Grater Than 20 ?");
if (firstQ === "") {
    firstQ = "Invalid";
}
let secoundQ = prompt("Is You From Jaban ?");
if (secoundQ === "") {
    secoundQ = "Invalid";
}
let thirdQ = prompt("Is Your Favourit Frouit Is Apple ?");
if (thirdQ === "") {
    thirdQ = "Invalid";
}
let arr = [];
arr.push(firstQ);
arr.push(secoundQ);
arr.push(thirdQ);
console.log(arr.toString());




// var user_name = prompt("Please Enter Your Name !");
// var gender = prompt("please Enter Your Gender").toLowerCase();

// // **** This Condition to Check If The User Enter just Mael Or Female
// if (gender !== "mael" && gender !== "female") {
//     var count = 0;
//     do {
//         gender = prompt("!!!!!!!! Please Enter Either Mael Or Female !!!!!!").toLowerCase();
//         if (gender === "mael") {
//             count++;
//         }
//         else if (gender === "female") {
//             count++;
//         }

//     } while (count <= 0);
// }

// // **** Age Condition
// var age = prompt("please Enter Your Age !");
// if (age <= 0) {
//     alert("Your Age Is Less Than Or Equal 0");
// }

// // **** Confirm Box Condition
// var confirm_wel = confirm("Are You Want To Skip Welcoming Message ?");
// if (confirm_wel == false) {
//     if (gender == "mael") {
//         alert("***** HELLO MR " + user_name.toUpperCase() + " *****");
//     } else {
//         alert("***** HELLO MS " + user_name.toUpperCase() + " *****");
//     }
// }

