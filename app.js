const profileBtn = document.querySelector("#profile");
const filter = document.querySelector("#filterPopUp");
const alert = document.querySelector("#alert");

document.querySelectorAll(".custom-dropdown .selected").forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const options = dropdown.nextElementSibling;
    options.style.display =
      options.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", () => {
    const dropdown = option.closest(".custom-dropdown");
    dropdown.querySelector(".selected").textContent = option.textContent;
    dropdown.querySelector(".selected").dataset.value = option.dataset.value;
    option.parentElement.style.display = "none";
  });
});

document.addEventListener("click", (event) => {
  const dropdowns = document.querySelectorAll(".custom-dropdown .options");
  dropdowns.forEach((options) => {
    if (!options.parentElement.contains(event.target)) {
      options.style.display = "none";
    }
  });
});

function filterToggle() {
  if (filter.className === "hidden") {
    filter.classList.remove("hidden");
  } else {
    filter.className = "hidden";
  }
}

function alertToggle() {
  if (alert.className === "hidden") {
    alert.classList.remove("hidden");
  } else {
    alert.className = "hidden";
  }
}

profileBtn.addEventListener("click", () => {
  window.location.href = `/profile?id=${userId}`;
});
