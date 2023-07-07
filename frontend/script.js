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

      /* const dados = resorce.produtos.find(
        (dados) => dados.name === userName1 && dados.password === password1
      ); */

      const dados = resorce;

      if (dados) {
        console.log(dados);
      } else {
        console.log("Dados incorretos");
      }

      document.querySelector("#usernameInput").value = ""; // Limpa o valor do campo de entrada
    });
});
