const profileBtn = document.querySelector(".profile");
const alertPopup = document.querySelector("#alert");
const previous = document.querySelector("#previous");

// 프로필 버튼 클릭 시 프로필 페이지로 이동
profileBtn.addEventListener("click", () => {
  window.location.href = `/profile?id=${userId}`;
});

document.addEventListener("click", (event) => {
  const dropdowns = document.querySelectorAll(".custom-dropdown .options");
  dropdowns.forEach((options) => {
    if (!options.parentElement.contains(event.target)) {
      options.style.display = "none";
    }
  });
  // 팝업 외부 영역을 클릭하면 숨김
  if (!alertPopup.contains(event.target)) {
    alertPopup.classList.add("hidden");
  }
});

// 알림 클릭 시 alert 팝업을 여닫고 다른 요소들을 숨김
document.querySelector("img[alt='알림']").addEventListener("click", (event) => {
  event.stopPropagation();
  alertPopup.classList.toggle("hidden");

  document.querySelectorAll(".custom-dropdown .options").forEach((options) => {
    options.style.display = "none";
  });
});

previous.addEventListener("click", () => {
  window.history.back();
});
profileBtn.addEventListener("click", () => {
  window.location.href = `/profile?id=${userId}`;
});
