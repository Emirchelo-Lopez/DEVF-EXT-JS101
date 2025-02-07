// APP VALIDATOR FOR THEMATIC PARK

// 1. Age & Height, at leas 12 years & 140cm height

// 2. $12 USD Payment or VIP pass

// 3. Not have any health condition,

// 4. Accompaniment if visitor is less than 16 years old

let age = Number(prompt("Enter your age please:"));
let height = Number(prompt("Enter your height please:"));

if (age >= 12 && height >= 140) {
  let hasAHealthCondition = prompt(
    "Does the visitor have a health condition?"
  ).toLocaleLowerCase();

  if (hasAHealthCondition === "no") {
    alert("You have the required age & height, have fun :D");
  } else {
    alert("Sorry you must not have a health condition");
  }

  if (age < 16) {
    let hasAccompaniment = prompt(
      "Is the visitor accompanied by an adult?"
    ).toLocaleLowerCase();

    let hasAHealthCondition = prompt(
      "Does the visitor have a health condition?"
    ).toLocaleLowerCase();

    if (hasAccompaniment === "yes" && hasAHealthCondition === "no") {
      let hasPaid = prompt(
        "Have you paid your $12USD ticket?:"
      ).toLocaleLowerCase();

      let hasVIPPass = prompt("Do you have a VIP pass?:").toLocaleLowerCase();

      if (hasPaid === "yes" || hasVIPPass === "yes") {
        alert("You may pass now");
      } else {
        alert("Sorry, you need to pay or have a VIP pass to enter our park");
      }
    } else {
      alert(
        "Sorry you need to be with an adult AND not having a health condition"
      );
    }
  }
} else {
  alert("Sorry you don't have the required age and/or height for this park");
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
