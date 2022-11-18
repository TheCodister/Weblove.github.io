const plus = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", () => {
  a++;
  a = (a < 10) ? "0" + a : a;
  plus.innerText = a;
  console.log(a);
});