let age = 45;

// if (age <= 19) {

//     if (age <= 12) {
//         console.log("CHild");
//     } else {
//         console.log("Teen");
//     }

// }
// else if (age >= 20) {

//     if (age <= 64) {
//         console.log("Adult");
//     } else {
//         console.log("Senior");
//     }

// } else {
//     console.log("Something going wrong");
// }


// Another way

if (age <= 12) {
    console.log("CHild");
}

else if (age >= 13 && age <= 19) {
    console.log("Teen");
}
else if (age >= 20 && age <= 64) {
    console.log("Adult");
}
else {
    console.log("Senior");

}