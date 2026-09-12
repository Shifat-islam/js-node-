// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.filter((number) => {
//     return number > 25;
// });

// console.log(result);



// function greet(name) {
//     console.log("Hello", name);
// }

// function processUser(callback) {
//     callback("Shifat");
// }

// processUser(greet);


// console.log(typeof 25);        
// console.log(typeof "Maruf");   
// console.log(typeof true);      
// console.log(typeof undefined);
// console.log(typeof null);  

// console.log(Number("25"));     // 25
// console.log(Number("abc"));    // NaN (Not a Number)
// console.log(parseInt("25px")); // 25 → শুধু শুরুর সংখ্যাটা নেয়



// const age = 20;

// if (age >= 18) {
//   console.log("আপনি Vote দিতে পারবেন");
// } else {
//   console.log("আপনি এখনো Vote দিতে পারবেন না");
// }


// const marks = 75;

// function shifat(){
//     if (marks >= 80) {
//   console.log("A+");
// } else if (marks >= 70) {
//   console.log("A");
// } else if (marks >= 60) {
//   console.log("A-");
// } else {
//   console.log("Fail");
// }
// }


// shifat()


// const day = "Sunday";

// switch (day) {
//   case "Saturday":
//     console.log("Weekend শুরু");
//     break;
//   case "Sunday":
//     console.log("hi man");
//     break;
//   default:
//     console.log("oh now");
// }



// for (let i = 1; i <= 10; i++) {
//   if (i === 5) break;   
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;   
//   console.log(i);
// }


// for(let i=1; i<=50; i++){

//  if (i % 3 === 0 && i % 5 === 0){
//    console.log(`${i} = fizzbazz`)
    
//   }else if(i % 3 === 0){
//     console.log(`${i} = fizz`);
//   } else if(i % 5 === 0){
//         console.log(`${i} = bazz`);

//   } 
  
// }


// 1.let amra jokhon jani je value poroborti te change korte hobe tokon amra let use kori
// 2.const jokhon amra jani je ei value ta fixte tokon amra const use korbo 
// 3.JavaScript-এ এমন কিছু value আছে, যেগুলোকে if condition-এর ভিতরে দিলে JavaScript এগুলোকে false হিসেবে ধরে।
// এগুলোকেই বলা হয় Falsy Value। jemon: false 0 "" null nan undefined 

// let products = ["shirt", "pant", "shoe"];

// while (products.length > 0) {
//   let product = products.pop();

//   console.log("Removed:", product);
// }

// console.log("Cart empty");

// let health = 100;

// while (health > 0) {
//   console.log("Player is alive");

//   health -= 20;
// }


// function greet(name) {
//   return "Hello, " + name;
// }

// console.log(greet("Maruf")); 



// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log( isEven(i));
// }


// function test() {
//   if (true) {
//     let secret = "hidden";
//   }
//   console.log(secret);
// }
// test();


// const fruits = ["Apple", "Banana"];

// // fruits.push("Mango");        
// // fruits.pop();                
// // fruits.unshift("Orange");    
// // fruits.shift();              

// // console.log(fruits.includes("Apple")); 
// // console.log(fruits.indexOf("Banana")); 

// console.log(fruits);


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   console.log(num * 2);
// });


// const result = numbers.map((num) => {
//   return num * 2;
// });

// console.log(result);


// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); 


// const total = numbers.reduce((sum, num) => sum + num);
// console.log(total); 


// const invoices = [
//   { customer: "Rahim", amount: 500, paid: true },
//   { customer: "Karim", amount: 750, paid: false },
//   { customer: "Salma", amount: 300, paid: false },
// ];

// const unpaidCustomers = invoices.filter((invoice) => !invoice.paid);

// const totalDue = unpaidCustomers.reduce((sum, invoice) => sum + invoice.amount, 0);

// console.log(totalDue); 


// let shifat = [10, 25, 30, 5, 50];

// shifat.forEach((shifat) => {
//     if(shifat > 20){
//         console.log(shifat);
        
//     }
// })


// let result = shifat.filter((num) => num > 20);
// console.log(result);


// const maltipluy = shifat.map((shifat) => {
//   return shifat * 10;
// });

// console.log(maltipluy);
    
    
// let total = shifat.reduce ((sum,num) => sum + num )
//     console.log(total)



// const clients = [
//   { id: 1, name: "Rahim", package: "10 Mbps", due: 0 },
//   { id: 2, name: "Karim", package: "20 Mbps", due: 500 },
// ];

// const clientsWithDue = clients.filter((client) => client.due > 0);
// console.log(clientsWithDue);



// const product = {
//     name: "shifat",
//     price: 100,
//     quantity: 5,

//     getTotal: function() {
//         return `Shifat \n Total = ${this.price * this.quantity}`
//     }
// }

// console.log(product.getTotal());


// const name = "Maruf Bellah";
// console.log(name.split(" "));

// function formatName(firstName, lastName) {
//   return `${lastName}, ${firstName}`;
// }

// console.log(formatName("Maruf", "Bellah"));


// function getGrade(marks) {
//   if (marks >= 80) {
//     return "A+";
//   } else if (marks >= 60) {
//     return "A";
//   } else if (marks >= 33) {
//     return "C";
//   } else {
//     return "Fail";
//   }
// }

// console.log(getGrade(32));


// function getGrade(marks) {
//   if (marks >= 80) {
//     return "A+";
//   } else if (marks >= 60) {
//     return "A";
//   } else if (marks >= 33) {
//     return "C";
//   } else {
//     return "Fail";
//   }
// }


// const students = [
//   { name: "Rahim", marks: 85 },
//   { name: "Karim", marks: 45 },
//   { name: "Salma", marks: 92 },
//   { name: "Nadia", marks: 60 },
// ];

// const studentsWithGrade = students.map((student) => {
//   return {
//     ...student,
//     grade: getGrade(student.marks),
//   };
// });

// console.log(studentsWithGrade);


// function getGrade(marks) {
//   if (marks >= 80) {
//     return "A+";
//   }
// }

// console.log(getGrade(80));


// const fruits = ["Apple", "Banana"];
// const moreFruits = [...fruits, "Mango", "Orange"];
// console.log(moreFruits);

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2];
// console.log(combined); 



// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3));       // 6
// console.log(sum(1, 2, 3, 4, 5));


// const defaultSettings = { theme: "light", language: "bn" }

// const updatedsettings = {...defaultSettings, theme: "dark"}

// console.log(updatedsettings);

// const title = document.querySelector("#title");
// const button = document.querySelector("button");

// const ad = document.createElement("p");
// ad.textContent = "Practice সম্পন্ন হয়েছে";
// ad.style.color = "blue";
// ad.style.fontSize = "32px";

// document.body.appendChild(ad);


// const button = document.querySelector("#myButton");

// button.addEventListener("click", function () {
//   console.log("Button-এ ক্লিক করা হয়েছে!");
// });


// const form = document.querySelector("#loginForm");

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Default আচরণ (Page Reload) বন্ধ করা
//   const username = document.querySelector("#username").value;
//   console.log(`Login করা হচ্ছে: ${username}`);
// });


// const input = document.querySelector("#taskInput");
// const addBtn = document.querySelector("#addBtn");
// const list = document.querySelector("#taskList");

// addBtn.addEventListener("click", () => {
//   const taskText = input.value.trim();

//   if (taskText === "") {
//     alert("কিছু লিখুন!");
//     return;
//   }

//   const li = document.createElement("li");
//   li.textContent = taskText;
//   list.appendChild(li);

//   input.value = ""; // Input খালি করে দেওয়া
// });


// const countDisplay = document.querySelector("#countDisplay");

// const jog = document.querySelector("#jog");
// const biog = document.querySelector("#biog");

// let count = 0;

// jog.addEventListener("click", () => {
//   count = count + 1;
//   countDisplay.textContent = count;
// });

// biog.addEventListener("click", () => {
//   if (count > 0) {
//     count = count - 1;
//     countDisplay.textContent = count;
//   }
// });


// console.log("১");

// setTimeout(() => {
//   console.log("২ (২ সেকেন্ড পর)");
// }, 2000);

// console.log("৩");


// //////////////////////////////////connection ta bujte hone /////////////////


// function fetchUserData(callback) {
//   console.log("Data ena hoche....");

//   setTimeout(() => {
//     const userData = { name: "Maruf", age: 25 };
//     callback(userData); 
//   }, 2000);
// }

// fetchUserData((data) => {
//   console.log("Data powya geche", data);
// });

// console.log("ei line aga cholbe");



// function processOrder(orderName, callback) {
//   setTimeout(() => {
//     callback(`${orderName} প্রস্তুত!`);
//   }, 1000);
// }

// processOrder("Pizza", (message) => {
//   console.log(message);
// });


// //////////////////////////////////connection ta bujte hone /////////////////



// function checkAge(age) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve("আপনি Vote দিতে পারবেন");
//       } else {
//         reject("আপনার বয়স যথেষ্ট নয়");
//       }
//     }, 1000);
//   });
// }

// checkAge(20)
//  .then((message) => console.log(message))
//   .catch((error) => console.log(error));


// function processOrder(orderName) {
//   return new Promise((resolve, reject) => {

//       if (orderName) {
//         resolve(`${orderName} প্রস্তুত!`);
//       } else {
//         reject("Order পাওয়া যায়নি");
//       };
//   });
// }


// processOrder("Pizza")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// function shifat(order){
//     if(order){
//         console.log(`${order} done`);
//     }else{
//         "procesing now"
//     }
// }

// shifat("pizza") 

// function getUserPromise() {
//   return new Promise((resolve) => {
    
//     setTimeout(() => 
//         resolve({ name: "Maruf", age: 25 }), 1000);
//   });
// }

// async function showUser() {
//   console.log("Data ena hoche...");
//   const user = await getUserPromise();
//   console.log("User powya geche:", user);
// }

// showUser();

 
// function checkAge(age) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve("vot now");
//       } else {
//         reject("your age is no match")
//       }
//     }, 1000);
//   });
// }

// async function testAge(age) {
//   try {
//     const result = await checkAge(age);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }}

// testAge(15);
// testAge(20);

// async function shifat() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/");
//     const data = await response.json(); 
//     console.log(data);
//   } catch (error) {
//     console.log("Error হয়েছে:", error);
//   }
// }

// shifat();


// async function shifat() {
//   try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data.name);
//     console.log(data.email);
//     console.log(data.address.city);
//   } catch (error) {
//      console.log("Error হয়েছে:", error);
//   }}

//   shifat()


// async function processPayment(amount) {
//   try {
//     if (amount <= 0) {
//       throw new Error("Amount beci hote hobe");
//     }
//     console.log(`${amount} taka process hoche...`);

//   } catch (error) {
//     console.log("Payment batil hoyeche:", error.message);
//   } finally {
//     console.log("Payment done)");
//   }
// }

// processPayment(100);


// function validateAge(age) {
//   if (typeof age !== "number") {
//     throw new Error("boyos akta sonkha hote hobe");
//   }
//   if (age < 0) {
//     throw new Error("boyos hoynai");
//   }
//   return true;
// }

// try {
//   validateAge(50);
// } catch (error) {
//   console.log("Validation Error:", error.message);
// }


// async function withdrawMoney(balance, amount) {

//   if (amount > balance) {
//     throw new Error("অপর্যাপ্ত ব্যালেন্স");
//   }

//   if (amount <= 0) {
//     throw new Error("সঠিক পরিমাণ দিন");
//   }

//   return balance - amount;
// }


// async function testWithdraw() {

//   try {

//     const newBalance1 = await withdrawMoney(1000, 300);
//     console.log("টাকা তোলার পর Balance:", newBalance1);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }


//   try {

//     const newBalance2 = await withdrawMoney(1000, 1500);
//     console.log("টাকা তোলার পর Balance:", newBalance2);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }


//   try {

//     const newBalance3 = await withdrawMoney(1000, 0);
//     console.log("টাকা তোলার পর Balance:", newBalance3);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }


//   try {

//     const newBalance4 = await withdrawMoney(1000, 500);
//     console.log("টাকা তোলার পর Balance:", newBalance4);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }


// testWithdraw();


// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data পাওয়া গেছে");
//     }, 2000);
//   });
// }

// getData()
//  .then((data) => {
//     console.log(data);
//   });

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Shifat");
//     }, 2000);
//   });
// }

// async function showUser() {

//   console.log("User খোঁজা হচ্ছে...");
//   const user = await getUser();
//   console.log(user);
//   console.log("কাজ শেষ");
// }

// showUser();


// const clients = [
//   {
//     id: 1,
//     name: "Rahim",
//     address: {
//       city: "Rajshahi"
//     }
//   },
//   {
//     id: 2,
//     name: "Karim"
//   },
//   {
//     id: 3,
//     name: "Sakib",
//     address: {
//       city: "Dhaka"
//     }
//   }
// ];

// const client = clients.find((client) => client.id === 1);

// console.log(client);

// console.log(client?.address?.city);


// export function add(a, b) {
//   return a + b;
// }

// export function subtract(a, b) {
//   return a - b;
// }

// export const PI = 3.1416;



// class Client {
//   constructor(name, packageName, monthlyFee) {
//     this.name = name;
//     this.packageName = packageName;
//     this.monthlyFee = monthlyFee;
//     this.due = 0;
//   }

//   addDue(amount) {
//     this.due += amount;
//   }

//   payBill(amount) {
//     this.due -= amount;
//     return `${this.name} ${amount} টাকা পরিশোধ করেছেন। বাকি: ${this.due}`;
//   }
// }

// const client1 = new Client("Rahim", "10 Mbps", 500);
// client1.addDue(500);
// console.log(client1.payBill(300)); 


// class Invoice {
//   constructor(clientName, amount, isPaid) {
//     this.clientName = clientName;
//     this.amount = amount;
//     this.isPaid = isPaid;
//   }

//   markAsPaid() {
//     this.isPaid = true;
//   }

//   get status() {
//     if (this.isPaid === true) {
//       return "paid";
//     } else {
//       return "due";
//     }
//   }
// }

// const invoice1 = new Invoice("Rahim", 5000, false);
// const invoice2 = new Invoice("Karim", 3000, true);
// const invoice3 = new Invoice("Shifat", 7000, false);

// invoice1.markAsPaid();
// invoice3.markAsPaid();

// console.log(invoice1.status);
// console.log(invoice2.status);
// console.log(invoice3.status);



// const client = {
//   name: "Rahim",
//   greet() {
//     console.log(`আমি ${this.name}`); // this = client
//   },
// };

// client.greet(); 


// const user = {
//   name: "Rahim",
//   age: 25,

//   showInfo() {
//     console.log(`নাম: ${this.name}`);

//     setTimeout(() => {
//       console.log(`বয়স: ${this.age}`);
//     }, 1000);
//   },
// };

// user.showInfo();

// console.log([].__proto__ === Array.prototype);

// function saveTasks(tasks) {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function loadTasks() {
//   const saved = localStorage.getItem("tasks");
//   return saved ? JSON.parse(saved) : []; // কিছু Save করা না থাকলে খালি Array
// }

// let tasks = loadTasks();
// tasks.push({ text: "JavaScript শেখা", done: false });
// saveTasks(tasks);

// real biling 

// const today = new Date("2026-09-05");

// const dueDate = new Date("2026-09-10");

// if (today > dueDate) {
//     console.log("Expired");
// } else {
//     console.log("এখনো সময় আছে");
// }



// const today = new Date();
// const dueDate = new Date("2026-08-10");

// if (today > dueDate) {
//  console.log("Expired");
// } else {
// console.log("এখনো সময় আছে");
// }

//      const invoice = {
//             customer: "Shifat",
//             amount: 5000,
//             dueDate: "2026-09-10"
//         };

//         const today = new Date();
//         const dueDate = new Date(invoice.dueDate);

//         if (today > dueDate) {

//       throw new Error("Payment Expired ❌");
           
//         } else {
//             console.log("pay not done");
//         }

// const invoiceDate = new Date("2026-08-01");
// const dueDate = new Date("2026-08-15");
// const today = new Date();

// console.log(today > dueDate); 

// const diffInMs = dueDate - invoiceDate;
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// console.log(diffInDays); 


// const today = new Date();
// console.log(data.toLocaleDateString("bn-BD")); 
// console.log(today.toLocaleDateString("en-US"));


// function getAverage(numbers) {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }

//   return total / numbers.length;
// }

// console.log(getAverage([10, 20, 30]));



// const client = {
//   id: 101,
//   name: "Nadia",
//   package: "20 Mbps",
//   monthlyFee: 800,

//   showInfo: function() {
//     console.log(`${this.name} ar monthly fee ${this.monthlyFee}`);
//   }
// };

// client.showInfo();


// const defaultSettings = { theme: "light", language: "bn" };
// const darkSettings = { ...defaultSettings, theme: "dark" };

// console.log(darkSettings);       // { theme: "dark", language: "bn" }



// function getUser(callback) {

//     setTimeout(() => {
//         const user = {
//             name: "Shifat",
//             age: 20
//         };
//         callback(user);
//     }, 2000);
// }

// getUser((user) => {
//     console.log(user);
// });
// console.log("next line");


// function getUser() {

//     return new Promise((resolve, reject) => {
        
//             const user = {
//                 name: "Shifat",
//                 age: 20
//             };
//             resolve(user);
//     });
// }

// getUser().then((user) => {
//     console.log(user);
// });



// function doSomething(callback) {
//     console.log("কাজ হচ্ছে...");

//     callback();
// }

// function finish() {
//     console.log("কাজ শেষ!");
// }

// doSomething(finish);

// function getUser(callback) {
//     setTimeout(() => {
//         const user = {
//             name: "Shifat",
//             age: 20
//         };
//         callback(user);
//     }, 2000);
// }

// getUser((user) => {
//     console.log(user);
// });


// const promise = new Promise((resolve, reject) => {

//     resolve("Pizza পাওয়া গেছে");

// });

// promise.then((result) => {

//     console.log(result);

// });


// const promise = new Promise((resolve, reject) => {

//     async function fetchData() {
//         throw new Error("Data fetch করতে সমস্যা হয়েছে");
//     }

//     fetchData().catch((error) => {
//         reject(error);
//     });

// })






// const number = [1,2,3,4,5,6];

// number.forEach((num) => {
//     console.log(num * 2);
// })

// const shi =  number.map((num) => num + 2);
//  console.log(shi);
 
// const evenNumbers = number.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// const total = number.reduce((sum, num) => sum + num);
// console.log(total);


// const invoices = [
//   { customer: "Rahim", amount: 500, paid: true },
//   { customer: "Karim", amount: 750, paid: false },
//   { customer: "Salma", amount: 300, paid: false },
// ];

// const unpaidCustomers = invoices.filter((invoice) => !invoice.paid);

// const totalDue = unpaidCustomers.reduce((sum, invoice) => sum + invoice.amount, 0);

// console.log(totalDue); 


// const person = {
//   name: "Maruf",
//   greet: function () {
//     return `hi im ${this.name}`
//   },

// };

// console.log(person.greet()); 

// const student = { name: "Maruf", age: 25, city: "Rajshahi" };

// for (const key in student) {
//   console.log(key + ": " + student[key]);
// }

//  const product = {
//   name: "mobile",
//   price: 1500,
//   quantity: 2,
//     total: function () {
//     return this.price * this.quantity;
//   },
// }


// console.log(product.total());


// const marks = 59;

// if (marks >= 80){
//   console.log("A+");
// } else if(marks >= 60){
//   console.log("A");
// } else if(marks >= 33){
//   console.log("c");
// }else {
//   console.log("Fail"); 
// }


// const mark = [80,60,79,33,59];

// const shifat = mark.map((num) => {
//   console.log(shifat);
  
// })


// const students = [
//   { name: "Rahim", marks: 85 },
//   { name: "Karim", marks: 45 },
//   { name: "Salma", marks: 92 },
//   { name: "Nadia", marks: 60 },
// ];

// const total = students.map((num) => {

//   let grade;

//   if (num.marks >= 92) {
//     grade = "A+";
//   } else if (num.marks >= 85) {
//     grade = "A";
//   } else if (num.marks >= 60) {
//     grade = "B";
//   } else if (num.marks >= 45) {
//     grade = "fail";
//   } 

//   return {
//     ...num,
//     grade: grade
//   };

// });

// const students = [
//   { name: "Rahim", marks: 85 },
//   { name: "Karim", marks: 45 },
//   { name: "Salma", marks: 92 },
//   { name: "Nadia", marks: 60 },
// ];

// // 1. Grade বের করার Function
// function getGrade(marks) {
//   if (marks >= 80) {
//     return "A+";
//   } else if (marks >= 60) {
//     return "A";
//   } else if (marks >= 33) {
//     return "C";
//   } else {
//     return "Fail";
//   }
// }

// const updatedStudents = students.map((student) => {
//   return {
//     ...student,
//     grade: getGrade(student.marks),
//   };
// });

// console.log(updatedStudents);

// const failedStudents = updatedStudents.filter((student) => {
//   return student.grade === "Fail";
// });

// console.log(failedStudents);

// updatedStudents.forEach((student) => {
//   console.log(
//     `${student.name} পেয়েছে ${student.marks} নম্বর, Grade: ${student.grade}`
//   );
// // });
// function checkAge(age) {
//   return new Promise((resolve, reject) => {

//     if (age >= 18) {
//       resolve("You are eligible!");
//     } else {
//       reject("You are not eligible!");
//     }

//   });
// }


//  checkAge(15) 

//  .then((message) => 
//   console.log(message))
//  .error((error) =>
//   console.log(error)
//  )


// const marks = [1,2,3,4,5,6]

// console.log(...markse);


// async function post() { 
//    try{
//      const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data);
//    }catch(error){
//    throw new Error ("data pawya jai ni")
// }
// }

// post()


// async function getUser() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );

//     if (!response.ok) {
//       throw new Error("User data fetch করা যায়নি");
//     }

//     const user = await response.json();

//     console.log("Name:", user.name);
//     console.log("Email:", user.email);
//     console.log("City:", user.address.city);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// getUser();


// async function processPayment(amount) {
//   try {
//     if (amount <= 0) {
//       throw new Error("Amount অবশ্যই ০-এর বেশি হতে হবে");
//     }
//     console.log(`${amount} টাকা প্রসেস করা হচ্ছে...`);

// } catch (error) {
//     console.log("Payment ব্যর্থ হয়েছে:", error.message);
//   } 
// }

// processPayment(100);


// async function getClientData(clientId) {
//   try {
//     if (!clientId) {
//       throw new Error("Client ID দেওয়া হয়নি");
//     }

//     const response = await fetch(`/api/clients/${clientId}`);

//     if (!response.ok) {
//       throw new Error(`Client পাওয়া যায়নি (Status: ${response.status})`);
//     }

//     return await response.json();

//   } catch (error) {
//     console.log("getClientData-এ সমস্যা:", error.message);
//     return null;
//   }
// }

// async function withdrawMoney(balance, amount) {
//   try {
//     if (amount > balance) {
//       throw new Error("অপর্যাপ্ত ব্যালেন্স");
//     } else if (amount <= 0) {
//       throw new Error("সঠিক পরিমাণ দিন");
//     }

//     const newBalance = balance - amount;

//     return newBalance;

//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// withdrawMoney(100, 50).then((result) => {
//   console.log("নতুন Balance:", result);
// });


// async function getPostById(id){
//   try{
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

//      if(!response.ok){
//         throw new Error ("Post পাওয়া যায়নি")
//      }

//      const data = await response.json()
//      return data;

//    }catch(error){
//     console.log("Error:", error.message);
//   }
// }


// getPostById(1).then((post) => {
//   console.log(post);
// });


// const user = {
//   name: "Maruf",
//   address: {
//     city: "Rajshahi",
//   },
// };

// console.log(user.address?.city);  
// console.log(user.contact?.phone);


// const client = [
//   {
//     id: 1,
//     name: "Shifat",
//     roll: 22,
//     address: {
//       city: "Rajshahi"
//     }
//   },

//   {
//     id: 2,
//     name: "Rahim",
//     roll: 23,
//     address: {
//       city: "Dhaka"
//     }
//   },

//   {
//     id: 3,
//     name: "Karim",
//     roll: 24
//   }
// ];

// const clients = client.find(client => client.id === 3);

// console.log(clients);
// console.log(client.address?.city);  

// class Client {
//   constructor(name, packageName, monthlyFee) {
//     this.name = name;
//     this.packageName = packageName;
//     this.monthlyFee = monthlyFee;
//     this.due = 0;
//   }

//   addDue(amount) {
//     this.due += amount;
//   }

//   payBill(amount) {
//     this.due -= amount;
//     return `${this.name} ${amount} টাকা পরিশোধ করেছেন। বাকি: ${this.due}`;
//   }
// }

// const client1 = new Client("Rahim", "10 Mbps", 500);
// client1.addDue(500);
// console.log(client1.payBill(300)); 


// class Invoice {
//   constructor(clientName, amount, isPaid) {
//     this.clientName = clientName;
//     this.amount = amount;
//     this.isPaid = isPaid;
//   }

//   markAsPaid() {
//     this.isPaid = true;
//   }

//   get status() {
//     if (this.isPaid) {
//       return "পরিশোধিত";
//     } else {
//       return "বাকি আছে";
//     }
//   }
// }

// const invoice1 = new Invoice("Rahim", 500, false);
// const invoice2 = new Invoice("Karim", 800, false);
// const invoice3 = new Invoice("Shifat", 1000, true);

// invoice1.markAsPaid();
// invoice2.markAsPaid();

// console.log(invoice1.status);
// console.log(invoice2.status);
// console.log(invoice3.status);


// class Client {
//   constructor(name, packageName, monthlyFee) {
//     this.name = name;
//     this.packageName = packageName;
//     this.monthlyFee = monthlyFee;
//   }

//   scheduleReminder() {
//     setTimeout( () => {
//       console.log(`${this.name}-কে বিল রিমাইন্ডার পাঠানো হয়েছে`);
//     }, 2000);
//   }
// }

// const client1 = new Client("Rahim", "10 Mbps", 500);

// client1.scheduleReminder();

// class Client {
//   greet() {
//     return "Hello!";
//   }
// }

// const c1 = new Client();
// const c2 = new Client();

// console.log(c1.greet === c2.greet);


// class Client {
//   constructor(name, monthlyFee) {
//     this.name = name;
//     this.monthlyFee = monthlyFee;
//     this.due = monthlyFee;
//   }

//   payBill(amount) {
//     this.due = Math.max(0, this.due - amount);

//     return this.due === 0
//       ? "সম্পূর্ণ পরিশোধিত"
//       : `বাকি আছে: ${this.due}`;
//   }

//   get status() {
//     return this.due > 0 ? "বকেয়া আছে" : "ক্লিয়ার";
//   }
// }

// class PremiumClient extends Client {
//   constructor(name, monthlyFee) {
//     super(name, monthlyFee);
//     this.prioritySupport = true;
//   }
// }

// const client1 = new Client("Rahim", 500);
// const client2 = new Client("Karim", 800);
// const client3 = new Client("Hasan", 1000);

// const premiumClient = new PremiumClient("Shifat", 1500);

// client1.payBill(500);
// client2.payBill(300);
// premiumClient.payBill(1500);

// const clients = [
//   client1,
//   client2,
//   client3,
//   premiumClient
// ];

// const dueClients = clients.filter(client => client.status === "বকেয়া আছে");

// dueClients.forEach(client => {
//   console.log(
//     `${client.name}-এর ${client.monthlyFee} টাকার বিলের মধ্যে এখনও ${client.due} টাকা বাকি আছে।`
//   );
// });


// const cart = [
//   { item: "চাল", quantity: 5 },
//   { item: "ডাল", quantity: 2 },
// ];

// localStorage.setItem("cart", JSON.stringify(cart));

// const savedCart = JSON.parse(localStorage.getItem("cart"));
// console.log(savedCart);

 
// const pattern = /^[A-Z][a-z]+[0-9]{3}$/;

// console.log(pattern.test("Shifat112"));

// const logo = /^[A-z]{1}[a-z]{5}[0-9]{3}$/

// console.log(logo.test("Shifat112"));

// const logos = /^(?=.{9}$)[A-Z][a-z]+[0-9]+$/;

// console.log(logos.test("Shifat112"));

// const date = new Date();

// console.log(date.getFullYear());  
// console.log(date.getMonth() + 1);     
// console.log(date.getDate());      
// console.log(date.getDay());       
// console.log(date.getHours());     
// console.log(date.getMinutes()); 
// console.log(date.getSeconds());  


// const invoiceDate = new Date("2026-09-01");
// const dueDate = new Date("2026-09-13");
// const today = new Date();

// if (today > dueDate) {
//     console.log("Payment Expired");
// } else {
//     console.log("Payment is still available");
// }

// const customer = "Shifat";

// const invoiceDate = new Date("2026-09-01");
// const dueDate = new Date("2026-09-10");
// const today = new Date();

// console.log("Customer:", customer);
// console.log("Invoice Date:", invoiceDate);
// console.log("Due Date:", dueDate);

// if (today > dueDate) {
//     console.log("Payment Expired");
// } else {
//     const difference = dueDate - today;
//     const days = Math.ceil(
//         difference / (1000 * 60 * 60 * 24)
//     );

//     console.log("Payment is available");
//     console.log("Days remaining:", days);
// }


// function isOverdue(dueDateString) {
//   const dueDate = new Date(dueDateString);
//   const today = new Date();
//   return today > dueDate;
// }

// function daysUntilDue(dueDateString) {
//   const dueDate = new Date(dueDateString);
//   const today = new Date();
//   const diffInDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
//   return diffInDays;
// }

// console.log(isOverdue("2026-08-15"));     
// console.log(daysUntilDue("2026-09-01"));   


// checkNumber(num){
// if(num > 0){
//     console.log("posittive")   
// }else if(num < 0){
//     console.log("Negative")
// }

// }


// checkNumber(7)