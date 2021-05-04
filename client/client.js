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
  const data = "<p>" + name.value + ": " + message.value + "</p>";
  if (message.value == "") {
    return;
  }
  connection.send(data);
  message.value = "";
});
