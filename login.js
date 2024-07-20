import { checkToken, redirect } from "./utils.js";

const form = document.forms[0];

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

const loginButton = document.getElementById("login-button");


(function () {
    const hasToken = checkToken(); // true || false
    if (hasToken) {
      redirect("/index.html");
    }
  })();


form.onsubmit = login;
async function login(event) {
  event.preventDefault();

  try {
    loginButton.disabled = true;
    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();
    localStorage.setItem("token", result.token);

    const hasToken = checkToken(); // true || false
    if (hasToken) {
      window.location = "/index.html";
    }
  } catch (error) {
    console.error(error);
  } finally {
    loginButton.disabled = false;
  }
}