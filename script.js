import {
  toggleFriendshipState,
  formatCursorCoordinates
} from './card-widget.js';

const statusEl = document.getElementById("status");
const acceptBtn = document.getElementById("accept");
const cardEl = document.getElementById("card");
const heartEl = document.querySelector(".ri-heart-3-fill");
const mainEl = document.querySelector(".main");
const cursorEl = document.querySelector(".cursor");

acceptBtn.addEventListener("click", () => {
  const currentText = statusEl.textContent.trim();
  const next = toggleFriendshipState(currentText);

  statusEl.textContent = next.status;
  acceptBtn.textContent = next.buttonText;
  acceptBtn.style.backgroundColor = next.color;
});

cardEl.addEventListener("dblclick", () => {
  heartEl.style.transform = "translate(-50%, -50%) scale(1)";
  heartEl.style.opacity = "0.8";

  setTimeout(() => {
    heartEl.style.opacity = "0.3";
  }, 1000);

  setTimeout(() => {
    heartEl.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1200);
});

mainEl.addEventListener("mousemove", (e) => {
  const coords = formatCursorCoordinates(e.clientX, e.clientY);
  cursorEl.style.left = coords.left;
  cursorEl.style.top = coords.top;
});
