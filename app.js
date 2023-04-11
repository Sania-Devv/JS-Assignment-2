// Q # 1

// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); 
//   console.log(add10(2)); 

// Q no 2

// let myArray = [1, 2, 3, 4, 5];
// function searchArray(array, value) {
//   if (array.length === 0) {
//     return false; // base case: array is empty
//   }
//   if (array[0] === value) {
//     return true; // base case: value is found
//   }
//   else {
//     return searchArray(array.slice(1), value);
//   }
// }
// console.log(searchArray(myArray, 2)); 
// console.log(searchArray(myArray, 7)); 

// Q no 3:
// let myPara =document.getElementById("para");
//  function write(string)  {
//   myPara.innerHTML= string;
//   console.log(myPara);
//  }

// write("HI!! I M A student of SMIT")
// Q NO 4

// function xyz(string)
// {let body = document.querySelector("ul");
// body.innerHTML = "<li> </li>";
// let myContent = document.querySelector("li");
// myContent.innerHTML = string;
// console.log(myContent);
// }
// xyz("hello");

// Q NO 5

// function abc(element,color){
//   let X = document.querySelector("#"+element);
//   X.style.backgroundColor=color;

//   let s = document.querySelector("#"+element);
//   s.style.backgroundColor=color;
  

// }

// abc("X","skyblue");
// abc("s","lightgreen");

   

//Q no 6
// function obj(key, object) {
//   localStorage.setItem(key, object);
// }
// let myObject = { 
//   name: 'Uzair', obj };

// let stringify = JSON.stringify(myObject);
// obj("myObject" , stringify);

// Q no 7
// function retrieve(key) {
//   let x =localStorage.getItem(key);
//  return x;
// }
// let object={
//   name:"Sania", 
//   teacherName : "samia",
//   className: "CSS"
// };

// let stringify = JSON.stringify(object);

// localStorage.setItem("object",stringify);
// console.log(retrieve("object"));

// q no 8

// function saveStorage(key,value)
// {
//     let stored = localStorage.setItem(key,value);
//     return stored;

// }
// let myObject =
// {
//     myName:"Sania",
//     center:"SMIT",
//     rollNo:13 
// }

//  saveStorage("myName","Sania");
//  saveStorage("center","SMIT");
//  saveStorage("rollNo","13");