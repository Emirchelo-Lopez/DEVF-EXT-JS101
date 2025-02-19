// Crea un a funcion que reciba un array de números y que retorne cuántos números son pares

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bigNumbers = [20, 30, 100, 80, 70];

function countEven(numbers) {
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
      counter++;
    }
  }
  return counter;
}

console.log("There are:", countEven(numbers), "even numbers");

// Crear una funcion que reciba un array de numero y retorne el número más grande

function findGreatestNumber(numbers) {
  let greatest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > greatest) {
      greatest = numbers[i];
    }
  }
  return greatest;
}

console.log("The greatest number is: ", findGreatestNumber(bigNumbers));

// Crear un objeto estudiante con nombre, edad, array de notas, también crear un función que reciba un objeto y que retorne el promedioo de las notas

const student = {
  name: "Emir",
  age: "22",
  grades: [100, 90, 80],
};

const anotherStudent = {
  name: "Alex",
  age: "23",
  grades: [85, 95, 75],
};

function calculateAverage(student) {
  let sum = 0;
  for (let i = 0; i < student.grades.length; i++) {
    sum += student.grades[i];
  }
  let average = sum / student.grades.length;
  return average;
}

console.log(calculateAverage(anotherStudent));
console.log(
  `And his name is ${anotherStudent.name}, his age is ${anotherStudent.age}`
);

// Crear una función que reciba un arreglo de objetos con estudiantes y que retorne un nuevo arreglo con los nombres y los promedios

const students = [
  { name: "Emir", grades: [100, 90, 80] },
  { name: "Alex", grades: [85, 95, 75] },
  { name: "John", grades: [70, 80, 90] },
  { name: "Pepe", grades: [80, 75, 100] },
];

function generateReport(students) {
  let report = [];
  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    for (let j = 0; j < students[i].grades.length; j++) {
      sum += students[i].grades[j];
    }
    let average = sum / students[i].grades.length;
    let studentName = students[i].name;
    report.push({ name: studentName, average: average });
  }
  return report;
}

console.log(generateReport(students));
