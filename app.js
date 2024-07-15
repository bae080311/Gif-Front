const profileBtn = document.querySelector("#profile");

profileBtn.addEventListener("click", () => {
  window.location.href = `/profile?id=${userId}`;
});
