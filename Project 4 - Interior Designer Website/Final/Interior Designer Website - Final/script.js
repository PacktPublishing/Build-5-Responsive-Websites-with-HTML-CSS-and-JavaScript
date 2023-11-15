const menuIcon = document.querySelector(".menu-icon");
const xBtn = document.querySelector(".x-btn");
const navigation = document.querySelector(".navigation");

menuIcon.addEventListener("click", () => {
  navigation.classList.add("navigate");
});

xBtn.addEventListener("click", () => {
  navigation.classList.remove("navigate");
});

let start = false;

window.addEventListener("scroll", () => {
  const about = document.querySelector(".about");
  const services = document.querySelector(".services");
  const portfolio = document.querySelector(".portfolio");
  const data = document.querySelector(".data");
  const nums = document.querySelectorAll(".num");

  if (window.pageYOffset >= 200) {
    about.classList.add("change");
  } else {
    about.classList.remove("change");
  }

  if (window.pageYOffset >= about.offsetTop + 200) {
    services.classList.add("change");
  } else {
    services.classList.remove("change");
  }

  if (window.pageYOffset >= services.offsetTop) {
    portfolio.classList.add("change");
  } else {
    portfolio.classList.remove("change");
  }

  if (window.scrollY >= data.offsetTop - 300) {
    if (!start) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    start = true;
  }
});

const startCount = (el) => {
  let max = el.dataset.val;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === max) {
      clearInterval(count);
    }
  }, 5);
};
