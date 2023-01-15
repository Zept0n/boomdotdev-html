import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  // Get all elements with the class 'product'
  var products = document.getElementsByClassName("product");

  // Loop through each product
  for (var i = 0; i < products.length; i++) {
    // Get the price of the product
    var price = products[i].getElementsByClassName("price")[0].textContent;

    // Add the 'data-price' attribute to the product element
    products[i].setAttribute("data-price", price);
  }
});
