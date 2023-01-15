import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  /* There must be a fire emoji next to the price when it has the .hot class
     The price must not include any new child elements */

  let hot = document.querySelectorAll(".hot");


    // Add the fire emoji to the price
  for (let i = 0; i < hot.length; i++) { 
    hot[i].textContent+=' 🔥';
  }
});
