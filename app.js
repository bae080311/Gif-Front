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
    dropdown.querySelector(".options").style.display = "none";
  });
});

document.addEventListener("click", (event) => {
  const dropdowns = document.querySelectorAll(".custom-dropdown .options");
  dropdowns.forEach((options) => {
    if (!options.parentElement.contains(event.target)) {
      options.style.display = "none";
    }
  });

  if (!filter.contains(event.target)) {
    filter.classList.add("hidden");
  }

  if (!alert.contains(event.target)) {
    alert.classList.add("hidden");
  }
});

document
  .querySelector("img[alt='filter']")
  .addEventListener("click", (event) => {
    event.stopPropagation();
    filter.classList.toggle("hidden");
    alert.classList.add("hidden");

    document
      .querySelectorAll(".custom-dropdown .options")
      .forEach((options) => {
        options.style.display = "none";
      });
  });

document
  .querySelector("img[alt='alert']")
  .addEventListener("click", (event) => {
    event.stopPropagation();
    alert.classList.toggle("hidden");
    filter.classList.add("hidden");

    document
      .querySelectorAll(".custom-dropdown .options")
      .forEach((options) => {
        options.style.display = "none";
      });
  });

profileBtn.addEventListener("click", () => {
  window.location.href = `/profile?id=${userId}`;
});
