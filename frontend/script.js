const formLogin = document.querySelector("#loginForm");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = document.querySelector("#usernameInput").value;
  const password1 = document.querySelector("#passwordInput").value;

  const url = "http://localhost:5500/api";

  fetch(url)
    .then((data) => data.json())
    .then((resorce) => {
      const dados = resorce.produtos.find(
        (resorces) =>
          resorces.name === userName && resorces.password === password1
      );
      if (dados) {
        console.log(dados);
      } else {
        console.log("Dados incorretos");
      }
    });
});
