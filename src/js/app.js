import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {

  const imageDiv = document.querySelector('.image');

  imageDiv.addEventListener('click', function () {
    imageDiv.style.transform = 'scale(2)';
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
