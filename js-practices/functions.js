function greet() {
  console.log("Hello Naughty World");
}

function addition(num1, num2) {
  let result = num1 + num2;
  return result;
}

function showMessage(message) {
  alert(message);
}

function showPersonalInfo(name, lastName, age, hobby) {
  alert(
    `Hello my name is ${name} ${lastName} I'm ${age} years old and I like to ${hobby} in my free time`
  );
}

// with local scope parameter

function limit(name) {
  setTimeout(() => {
    alert(`Signed in your exam ${name}`);
  }, 5000);
}

greet();

// showMessage(addition(3, 5));
// showPersonalInfo("Giovanni", "Giorgio", 31, "dance with many women");

limit("Emirchelo");
