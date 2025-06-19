function toggleBox(id) {
  const box = document.getElementById(id);
  box.classList.toggle('open');
}

  document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.querySelector(".ellipse");
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });



document.addEventListener("DOMContentLoaded", () => {
  const beforeImages = [
    "img/Group47.png",
    "img/Group44.png",
    "img/Group46.png",
    "img/Group45.png"
  ];

  const afterImages = [
    "img/Group52.png",
    "img/Group51.png",
    "img/Group53.png",
    "img/Group54.png"
  ];

  const items = document.querySelectorAll(".hover-item");

  items.forEach((item, index) => {
    const img = item.querySelector("img");
    let isClicked = false;

    item.addEventListener("click", () => {
      isClicked = !isClicked;

      // 이미지 바꾸기
      img.src = isClicked ? afterImages[index] : beforeImages[index];

      // 확대 효과
      if (isClicked) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});






