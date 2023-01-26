function favIceCream1(event) {
  window.event.preventDefault();

  const iceCreamArray = ["Chocolate", "Vanilla", "Pancake", "Mint", "Eel"];
  const ulElement = document.createElement("ul");
  document.querySelector("h1").after(ulElement);

  iceCreamArray.forEach(function (iceCream) {
    const liElement = document.createElement("li");
    liElement.append(iceCream);
    ulElement.append(liElement);
    console.log(iceCream);
  });
}

window.addEventListener('load', function () {
  favIceCream1();
});