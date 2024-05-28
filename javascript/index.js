// window.showForm = function () {
//   document.getElementById("formElement").style.display = "block";

//   document.getElementById("add_Student").style.display = "none";
// };
// window.addRow = function (e) {
//   console.log();
//   e.preventDefault();
//   const data = new FormData(e.target);

//   for (let [key, value] of data) {
//     let tableBody = document.getElementById("myTable");
//     const tr = document.createElement("tr");
//     tr.innerHTML = `<td>${value}</td>`;

//     console.log(tableBody, "body");
//     console.log(data.length, "data");
//     console.log(key);
//     console.log(value);
//   }
//   const name = data.get("firstName");
//   console.log(name, "nMAE");
//   var form = document.querySelector("#formElement");
//   var elements = form.elements;

//   console.log(elements, "FormElements");

//   for (let i = 0; i < Object.keys(data).length; i++) {
//     console.log("Hye");
//     const tr = document.createElement("tr");
//     tr.innerHTML = `<td>${i}</td>
//     <td>${data[i].firstName}</td>
//     <td>${data[i].country}</td>
//     <td>${data[i].disambiguation}</td>
//     <td><input type="button" value="" >Add</input></td>
//    `;
//     tableBody.appendChild(tr);
//   }
// };
