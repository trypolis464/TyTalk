"use strict";

const connection = new WebSocket("ws://localhost:8080");
const button = document.querySelector("#send");

connection.onerror = (event) => {
  console.error("WebSocket error observed:", event);
};

connection.onmessage = (event) => {
  const chat = document.querySelector("#chat");
  chat.innerHTML += event.data;
};

button.addEventListener("click", () => {
  const name = document.querySelector("#name");
  const message = document.querySelector("#message");
  if (message.value == "" || name.value == "") {
    // Todo: Make this display a message on the page (probably at the bottom)?
    return;
  }
  const data = "<p>" + name.value + ": " + message.value + "</p>";
  connection.send(data);
  message.value = "";
});
