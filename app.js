// var first_input = document.querySelector(".first");
// var custom = document.querySelector(".cus");
// var resetBtn = document.querySelector(".res");
// var perBtn = document.querySelectorAll(".number");
// var second_input = document.querySelector(".peop");
// var display = document.querySelector(".error");
// // var first_value = document.querySelector(".value");
// // var second_value = document.querySelector(".value-two");

// var knowII = document.querySelector(".value");
// var knowIII = document.querySelector(".value-two");
// var Bill = function (knowII, knowIII) {
//   this.knowII = knowII;
//   this.knowIII = knowIII;
//   this.clear();
// };
// Bill.prototype.clear = function () {
//   first_input.value = "";
//   this.current = "";
//   custom.value = "";
//   this.currentII = "$0.00";
//   this.currentIII = "$0.00";
//   second_input.value = "";
//   this.number = undefined;
// };

// Bill.prototype.appendInput = function (number_text) {
//   this.number_text = number_text;
// };
// Bill.prototype.appendPer = function (number) {
//   this.number = number;
//   this.current = number;
//   this.currentIV = number;
//   //   this.currentII = number;
// };
// Bill.prototype.displayUpdate = function () {
//   //   this.know.innerText = this.current;
//   this.knowII.textContent = this.currentII;
//   this.knowIII.textContent = this.currentIII;
// };
// Bill.prototype.computate = function () {
//   var texts = parseFloat(first_input.value);
//   var text_two = parseFloat(second_input.value);
//   var texts_two = custom.value;
//   // console.log(texts_two);
//   var computation, final, two;

//   switch (this.number) {
//     case "5%":
//       computation = Math.trunc((5 / 100) * texts * text_two);
//       final = computation + texts * text_two;
//       break;
//     case "10%":
//       computation = Math.trunc((10 / 100) * texts * text_two);
//       final = computation + texts * text_two;
//       break;
//     case "15%":
//       computation = Math.trunc((15 / 100) * texts * text_two);
//       final = computation + texts * text_two;
//       break;
//     case "25%":
//       computation = Math.trunc((25 / 100) * texts * text_two);
//       final = computation + texts * text_two;
//       break;
//     case "50%":
//       computation = Math.trunc((50 / 100) * texts * text_two);
//       final = computation + texts * text_two;
//       break;
//     case texts_two:
//       computation = Math.trunc((texts_two / 100) * texts * text_two);
//       final = computation + texts * text_two;
//       break;
//     default:
//       return;
//   }
//   if (text_two === 0 || text_two === "") {
//     display.style.display = "flex";
//     second_input.style.border = "1px solid red";
//   } else {
//     display.style.display = "none";
//     second_input.style.border = "none";
//   }
//   if (!text_two) {
//     alert("Please fill total number of peole");
//   }
//   if (texts) {
//     this.currentII = "$" + computation;
//     this.currentIII = "$" + final;
//   } else if (!texts) {
//     alert("Please fill out your Bill");
//   }
// };
// var bill = new Bill(knowII, knowIII);

// perBtn.forEach((button) => {  
//   button.addEventListener("click", () => {
//     bill.appendPer(button.innerText);
//     bill.computate();
//     bill.displayUpdate();
//     // bill.appendInput();
//     // bill.some();
//   });
// });
// resetBtn.addEventListener("click", function () {
//   bill.clear();
//   bill.displayUpdate();
// });
// // document.addEventListener("keypress", function (event) {
// //   if ((event.keyCode = 13)) {
// //     // bill.input();
// //     bill.computate();
// //   }
// // });
