// APP VALIDATOR FOR THEMATIC PARK

// 1. Age & Height, at leas 12 years & 140cm height

// 2. $12 USD Payment or VIP pass

// 3. Not have any health condition,

// 4. Accompaniment if visitor is less than 16 years old

let age = Number(prompt("Enter your age please:"));
let height = Number(prompt("Enter your height please:"));

if (age >= 12 && height >= 140) {
  alert("Your have the required age & height, have fun :D");
}

// IF-ELSE EXAMPLE

// let theory = true;
// let practice = true;
// let sight = true;

// if (theory === true && practice === true && sight === true) {
//   alert("Congrats you got your driver license");
// } else if (practice === false) {
//   alert("You failed the practical test, please try again");
// } else if (theory === false) {
//   alert("You failed the theory test, recall the topic you've seen");
// } else if (sight === false) {
//   alert("Due to visual problems we consider you won't get your driver license");
// }
