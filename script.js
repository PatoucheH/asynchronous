const myBtn = document.getElementById("my-btn");
const body = document.body;

// Exercise 1

// myBtn.addEventListener("click", (e) => {
//   fetch("files.json")
//     .then((response) => response.json())
//     .then((data) => {
//       const existingUl = document.getElementById("file-list");
//       if (existingUl) {
//         existingUl.remove();
//       }

//       const ul = document.createElement("ul");
//       ul.id = "file-list";
//       data.forEach((file) => {
//         const li = document.createElement("li");
//         li.textContent = file;
//         ul.appendChild(li);
//       });
//       body.appendChild(ul);
//     })
//     .catch((error) => console.error(error));
// });

// Exercise 2

const inputName = document.getElementById("name");
const inputCountry = document.getElementById("country");

myBtn.addEventListener("click", (e) => {
  let nameValue = inputName.value;
  let countryValue = inputCountry.value;

  fetch(
    "https://api.agify.io/?name=" + nameValue + "&country_id=" + countryValue
  )
    .then((response) => response.json())
    .then((data) => {
      const div = document.createElement("div");
      const text = `${data.name} is ${data.age} years.`;
      div.textContent = text;
      localStorage.setItem(localStorage.length, text);
      body.appendChild(div);
    });
});

window.addEventListener("load", (e) => {
  for (let i = 0; i < localStorage.length; i++) {
    const div = document.createElement("div");
    div.textContent = localStorage.getItem(localStorage.key(i));
    body.appendChild(div);
  }
});
