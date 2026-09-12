// let calculatorButtons = [
// 	{
// 		name: "delete",
// 		symbol: "⌫",
// 		formula: false,
// 		type: "key",
// 	},
// 	{
// 		name: "clear",
// 		symbol: "C",
// 		formula: false,
// 		type: "key",
// 	},
// 	{
// 		name: "percent",
// 		symbol: "%",
// 		formula: "/100",
// 		type: "number",
// 	},
// 	{
// 		name: "division",
// 		symbol: "÷",
// 		formula: "/",
// 		type: "operator",
// 	},
// 	{
// 		name: "7",
// 		symbol: 7,
// 		formula: 7,
// 		type: "number",
// 	},
// 	{
// 		name: "8",
// 		symbol: 8,
// 		formula: 8,
// 		type: "number",
// 	},
// 	{
// 		name: "9",
// 		symbol: 9,
// 		formula: 9,
// 		type: "number",
// 	},
// 	{
// 		name: "multiplication",
// 		symbol: "×",
// 		formula: "*",
// 		type: "operator",
// 	},
// 	{
// 		name: "4",
// 		symbol: 4,
// 		formula: 4,
// 		type: "number",
// 	},
// 	{
// 		name: "5",
// 		symbol: 5,
// 		formula: 5,
// 		type: "number",
// 	},
// 	{
// 		name: "6",
// 		symbol: 6,
// 		formula: 6,
// 		type: "number",
// 	},
// 	{
// 		name: "addition",
// 		symbol: "+",
// 		formula: "+",
// 		type: "operator",
// 	},
// 	,
// 	{
// 		name: "1",
// 		symbol: 1,
// 		formula: 1,
// 		type: "number",
// 	},
// 	{
// 		name: "2",
// 		symbol: 2,
// 		formula: 2,
// 		type: "number",
// 	},
// 	{
// 		name: "3",
// 		symbol: 3,
// 		formula: 3,
// 		type: "number",
// 	},
// 	{
// 		name: "subtraction",
// 		symbol: "–",
// 		formula: "-",
// 		type: "operator",
// 	},
// 	{
// 		name: "0",
// 		symbol: 0,
// 		formula: 0,
// 		type: "number",
// 	},
// 	{
// 		name: "comma",
// 		symbol: ".",
// 		formula: ".",
// 		type: "number",
// 	},
// 	{
// 		name: "calculate",
// 		symbol: "=",
// 		formula: "=",
// 		type: "calculate",
// 	},
// ];

// // select elements
// const inputElement = document.querySelector(".input");
// const outputResultElement = document.querySelector(".result .value");
// const outputOperationElement = document.querySelector(".operation .value");

// //create calculator btn by js
// function createBtns() {
// 	const btnsPerRow = 4;
// 	let addedBtns = 0;

// 	calculatorButtons.forEach((button) => {
// 		if (addedBtns % btnsPerRow == 0) {
// 			inputElement.innerHTML += `<div class="row"></div>`;
// 		}

// 		const row = document.querySelector(".row:last-child");

// 		row.innerHTML += `<button id="${button.name}" >
//                             ${button.symbol}
//                          </button>`;

// 		addedBtns++;
// 	});
// }

// createBtns();

// // click event to input elements
// inputElement.addEventListener("click", (event) => {
// 	const target_btn = event.target;

// 	calculatorButtons.forEach((button) => {
// 		if (button.name == target_btn.id) {
// 			calculator(button);
// 		}
// 	});
// });

// // calc data
// let data = {
// 	operation: [],
// 	result: [],
// };

// // calculator
// function calculator(button) {
// 	if (button.type == "operator") {
// 		data.operation.push(button.symbol);
// 		data.result.push(button.formula);
// 	} else if (button.type == "number") {
// 		data.operation.push(button.symbol);
// 		data.result.push(button.formula);
// 	} else if (button.type == "key") {
// 		if (button.name == "clear") {
// 			data.operation = [];
// 			data.result = [];
// 			updateOutputResult(0);
// 		} else if (button.name == "delete") {
// 			data.operation.pop();
// 			data.result.pop();
// 		}
// 	} else if (button.type == "calculate") {
// 		let join_result = data.result.join("");

// 		let result;

// 		try {
// 			result = eval(join_result);
// 		} catch (error) {
// 			if (error instanceof SyntaxError) {
// 				result = "Syntax Error!";
// 				updateOutputResult(result);
// 				return;
// 			}
// 		}

// 		result = formatResult(result);

// 		updateOutputResult(result);

// 		data.operation = [];
// 		data.result = [];

// 		data.operation.push(result);
// 		data.result.push(result);
// 		return;
// 	}
// 	updateOutputOperation(data.operation.join(""));
// }

// // updata output operation
// function updateOutputOperation(operation) {
// 	outputOperationElement.innerHTML = operation;
// }

// // update output result
// function updateOutputResult(result) {
// 	outputResultElement.innerHTML = result;
// }

// // format result
// function formatResult(result) {
// 	const maxOutputNumberLength = 10;
// 	const outputPrecision = 5;

// 	if (digitCouter(result) > maxOutputNumberLength) {
// 		if (isFloat(result)) {
// 			const resultInt = parseInt(result);
// 			const resultIntLength = digitCouter(resultInt);

// 			if (resultIntLength > maxOutputNumberLength) {
// 				return result.toPrecision(outputPrecision);
// 			} else {
// 				const numberOfDigitsAfterPoint =
// 					maxOutputNumberLength - resultIntLength;
// 				return result.toFixed(numberOfDigitsAfterPoint);
// 			}
// 		} else {
// 			// if not interger
// 			return result.toPrecision(outputPrecision);
// 		}
// 	} else {
// 		return result;
// 	}
// }

// // digit counter
// function digitCouter(number) {
// 	return number.toString().length;
// }

// // is float?
// function isFloat(result) {
// 	return result % 1 != 0;
// }

// //------------------------------------------------------


// --------------------------------------------
// function loadData(callback) {
//   setTimeout(() => {
//     callback("Data loaded");
//   }, 2000);
// }

// loadData((message) => {
//   console.log(message);
// });

// func();
// function func() {
//   console.log("Hello Sifat");
// }



// // -------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//   if () {
//     resolve("Hello Sifat");
//   } else {
//     reject("vai karent chole geche ");
//   }
// });

// promise
//   .then((sifat) => {
//     console.log(sifat);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   তেরি নাজরো সে পি হে, খুদা কি কাসাম, সারি  উমার নাশেমে গুজার জায়েগি।  

// //   -------------------------------------------
// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = "true";
//       if (success) {
//         resolve({
//           id: 1,
//           name: "Maruf",
//           age: 25,
//         });
//       } else {
//         reject("User data পাওয়া যায়নি!");
//       }
//     }, 2000);
//   });
// }

// getUser()
//   .then((user) => {
//     console.log( user);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// //   -------------------------------------

// class MyPromise {
//   constructor(callback) {
//     callback(
//       (data) => {
//         console.log("Success:", data);
//       },
//       (error) => {
//         console.log("Error:", error);
//       },
//     );
//   }
// }
// const data = new MyPromise((resolve, reject) => {
//   reject("Hello Reject");
// });

// // --------------------------------------

// function login(email, password) {
//   return new Promise((resolve, reject) => {
//     if (email === "admin@gmail.com" && password === "123456") {
//       resolve({
//         message: "Login successful",
//       });
//     } else {
//       reject( new Error("Invalid email or password"));
//     }
//   });
// }

// async function handleLogin() {
//   try {
//     const result = await login("admin@gmail.com", "123456");

//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// handleLogin();

// // --------------------------------------

// async function getUsers() {

//   const data = await fetch("https://jsonplaceholder.typicode.com/users/1");

//   const users = await data.json();

//   console.log(users);
// }

// getUsers();

// // -----------------------------------------

// async function getUsers() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.comqq/users/1",
//     );

//     if (!response) {
//       throw new Error("Failed to fetch users");
//     }

//     const users = await response.json();

//     console.log(users);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// getUsers();

// // -----------------------------------

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const users = await response.json();

//     // console.log(users);

//     users?.forEach((user) => {
//       console.log(Name: ${user.name});

//       console.log(Email: ${user.email});
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getUsers();

// // -------------------------------
// localStorage.setItem("name", "Maruf");

// const name = localStorage.getItem("name");

// console.log(name);

// const user = {
//   name: "Maruf",
//   age: 25,
//   role: "Developer",
// };

// localStorage.setItem("user", JSON.stringify(user));

// const storedUser = localStorage.getItem("user");

// console.log(storedUser)


// let count = 0;
// const countDisplay = document.querySelector("#count");

// document.querySelector("#increment").addEventListener("click", () => {
//   count++;
//   countDisplay.textContent = count;
// });

// document.querySelector("#decrement").addEventListener("click", () => {
//   if (count > 0) {
//     count--;
//     countDisplay.textContent = count;
//   }
// });


checkNumber(num)

if(num > 0){
    console.log("posittive")   
}else if(num < 0){
    console.log("Negative")
}

checkNumber(num)