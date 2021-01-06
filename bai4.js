document
  .getElementById("btnSubmit")
  .addEventListener("click", function (event) {
    event.preventDefault();

    for (var i = 1; i <= 10; i++) {
      var theDiv = document.createElement("div");
      if (i % 2 === 0) {
        theDiv.style.backgroundColor = "red";
        theDiv.style.color = "white";
        theDiv.innerHTML = " The Div Chan Thu " + i + " Red";
      } else {
        theDiv.style.backgroundColor = "blue";
        theDiv.style.color = "white";
        theDiv.innerHTML = " The Div Le Thu " + i + " Blue";
      }
      document.getElementById("divContainer").appendChild(theDiv);
    }
  });
