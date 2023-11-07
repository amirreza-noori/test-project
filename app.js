let section = document.querySelector("section");

fetch("https://www.melivecode.com/api/users")
  .then((res) => res.json())
  .catch((err) => alert("error"))
  .then((res) => {
    section.innerHTML = res
      .map(
        ({ fname, lname, avatar }) => `
            <div class="card">
            <img src="${avatar}" width="100%">
            <h2>First Name:</h2>
            <span class="firstName">${fname}</span>
            <h2>last Name:</h2>
            <span class="lastName">${lname}</span>
            </div>`
      )
      .join('');
  });

alert("welcome");
