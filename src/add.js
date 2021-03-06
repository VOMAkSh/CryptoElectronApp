const electron = require("electron");
const path = require("path");
const remote = electron.remote;
const ipc = electron.ipcRenderer;
const closeBtn = document.getElementById("closeBtn");
const updateBtn = document.getElementById("updateBtn");

closeBtn.addEventListener("click", event => {
  const window = remote.getCurrentWindow();
  window.close();
});

updateBtn.addEventListener("click", () => {
  ipc.send("update-notify-value", document.getElementById("notifyVal").value);
  const window = remote.getCurrentWindow();
  window.close();
});
