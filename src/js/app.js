import "../scss/app.scss";
//console.log('loaded')
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let body = document.querySelector("body");
  body.addEventListener('click', () => {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < 5; i++) {
      let newArticle = document.createElement("article");
      newArticle.classList.add("message");
      fragment.appendChild(newArticle);
    }
    body.appendChild(fragment);
    console.log('click')
  })

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
