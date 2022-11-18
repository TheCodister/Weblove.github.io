const button = document.querySelector(".heart-like-button"), num = document.querySelector(".counter");
let a = 1;
button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
  console.log(a);
});