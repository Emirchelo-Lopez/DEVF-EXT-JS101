const numbers = [];

for (let index = 1; index <= 100; index++) {
  numbers.push(index);
}

for (let index = 0; index < numbers.length; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
  } else if (index % 5 === 0) {
    console.log("Buzz");
  } else if (index % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(index);
  }
}
