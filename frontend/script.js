const formLogin = document.querySelector("#loginForm");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  let userName1 = document.querySelector("#usernameInput").value;
  const password1 = document.querySelector("#passwordInput").value;

  const url = "http://localhost:3002/api";

  fetch(url)
    .then((data) => data.json())
    .then((resorce) => {
      //console.log(resorce);
      let user = resorce.find((users) => users.name === userName1);

      if (user) {
        console.log(user);
      } else {
        console.log("Dados incorretos");
      }

      document.querySelector("#usernameInput").value = ""; // Limpa o valor do campo de entrada
    });
});
