//1-masala

// let Car = class {
//   constructor(brand, model, speed) {
//     this.brand = brand;
//     this.model = model;
//     this.speed = speed > 0 ? this.speed : 0;
//   }
//   accelerate(value = 0) {
//     if (value == 0) this.speed;
//     else this.speed = this.speed + value;
//   }
//   brake(value = 0) {
//     if (value == 0) {
//       this.speed;
//     } else if (this.speed - value < 0) {
//       this.speed = "Mashina tezligi nolga teng!";
//     } else {
//       this.speed = this.speed - value;
//     }
//   }
//   getInfo() {
//     return `${this.brand} ${this.model}, Tezlik: ${this.speed}km/soat`;
//   }
// };
// let car1 = new Car("BMw", "X5", -10);
// console.log(car1.accelerate(0));
// console.log(car1.brake());
// console.log(car1.getInfo());

//2-masala

// try {
//   let tabalar = "23";
//   if (typeof tabalar !== "number") {
//     throw new Error("Invalid input: Faqat son kiriting!");
//   } else {
//     console.log("ha bu raqam ekan!!");
//   }
// } catch (error) {
//   console.log(error);
// }

//3-masala

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("M'alumot kelib tushdi");
//   }, 2000);
// });
// myPromise.then((res) => {
//   console.log(res);
// });

// let dataGetter = async () => {
//   await fetch("https://kun.uz").then(() => {
//     console.log("Ma'lumot yetib keldi");
//   });
// };
// dataGetter();

//4-masala

// document.querySelector("button").addEventListener("click", () => {
//   let getInfo = async () => {
//     await fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => {
//         return data.json();
//       })
//       .then((dat) => {
//         dat.forEach((element) => {
//           document.querySelector("#data1").innerHTML = element.name;
//           document.querySelector("#data2").innerHTML = element.phone;
//           document.querySelector("#data3").innerHTML = element.email;
//         });
//       });
//   };
//   getInfo();
// });

// HTML bilan ulanga shu fayl ichida

//5-masala

// document.querySelector("#btn").addEventListener("click", () => {
//   console.log("Ism:", document.getElementById("nm").value);
//   console.log("Email:", document.getElementById("em").value);
//   console.log("Parol:", "Parol kitildi!");
//   event.preventDefault();
// });

//6-masala
//bu masalani hamma masalarni yechib githubga yuklab qoydim
