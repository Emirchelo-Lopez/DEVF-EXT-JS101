// let index = 1;

// while (index <= 10) {
//   console.log(index);
//   index++;
// }

// for (let index = 1; index <= 10; index++) {
//   console.log("Iteration", index);
// }

// const emojis = ["🤫", "🧏🏽", "🗿", "bye, bye"];

// for (let index = 0; index < emojis.length; index++) {
//   console.log("Iteration", index + 1);
//   console.log(emojis[index]);
// }

const smartphone = {
  brand: "Samsung",
  model: "S24 Ultra",
  RAM: 12,
  storage: 128,
  wirelessCharging: true,
  refreshRate: 120,
};

const smartphone2 = {
  brand: "Apple",
  model: "iPhone 14",
  RAM: 6,
  storage: 256,
  wirelessCharging: true,
  refreshRate: 60,
};

const smartphone3 = {
  brand: "Google",
  model: "Pixel 9 Pro XL",
  RAM: 12,
  storage: 256,
  wirelessCharging: true,
  refreshRate: 120,
};

const smartphone4 = {
  brand: "OnePlus",
  model: "9 Pro",
  RAM: 8,
  storage: 128,
  wirelessCharging: true,
  refreshRate: 120,
};

const smartphone5 = {
  brand: "Xiaomi",
  model: "Mi 11 Ultra",
  RAM: 12,
  storage: 256,
  wirelessCharging: true,
  refreshRate: 120,
};

const smartphone6 = {
  brand: "Sony",
  model: "Xperia 1 III",
  RAM: 12,
  storage: 128,
  wirelessCharging: true,
  refreshRate: 120,
};

const smartphone7 = {
  brand: "Huawei",
  model: "P50 Pro",
  RAM: 8,
  storage: 256,
  wirelessCharging: true,
  refreshRate: 120,
};

const smartphoneArray = [
  smartphone,
  smartphone2,
  smartphone3,
  smartphone4,
  smartphone5,
  smartphone6,
  smartphone7,
];

// Searching by brand

let selectedSmartphone = null;

let userBrand = prompt("Enter you desired brand:");
let userStorage = Number(prompt("Enter your desired storage capacity:"));

for (let index = 0; index < smartphoneArray.length; index++) {
  if (smartphoneArray[index].brand === userBrand) {
    selectedSmartphone = smartphoneArray[index];
    break;
  }
}

if (selectedSmartphone) {
  console.log("Smartphone selected:", selectedSmartphone);
} else {
  console.log("No such smartphone brand was found");
}

// Break down a selected color

const smartphone128 = [];

for (let index = 0; index < smartphoneArray.length; index++) {
  if (smartphoneArray[index].storage === userStorage) {
    smartphone128.push(smartphoneArray[index]);
  }
}

console.log("List of smartphones of 128GB storage: ", smartphone128);
