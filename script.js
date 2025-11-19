// =====================
// تغییر بین فرم‌ها
// =====================
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// =====================
// دارک مود
// =====================
const darkModeBtn = document.querySelector("#dark-mode-toggle");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // تغییر متن دکمه
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
  }
});

// =====================
// بهبود عملکرد انیمیشن‌ها (اختیاری)
// =====================
// این کد باعث می‌شود مرورگر روی transform و opacity بهینه رندر کند
const animatedElements = document.querySelectorAll(
  ".signin-signup, .panel .content, .image"
);

animatedElements.forEach(el => {
  el.style.willChange = "transform, opacity";
});
