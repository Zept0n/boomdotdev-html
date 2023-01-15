import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const imageDiv = document.querySelector('.image');

  imageDiv.addEventListener('click', function () {
    imageDiv.style.transform = 'scale(2)';
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
