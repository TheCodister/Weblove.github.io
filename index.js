const button = document.querySelector(".heart-like-button"), num = document.querySelector(".counter");
let a = 0;
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
  if(a === 100){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    alert("Congratulation! You have unlock hidden achievement!!!");
  }
});

function totalclick(click){
  if(click === 0){
    a = 0;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
}
