(function () {
  let button = document.getElementById("btn");
  let input = document.getElementById("text"); // .value
  let message = document.getElementById("message"); // .innerHTML
  let warning = document.getElementById("warning");

  button.addEventListener("click", addMessage);

  function addMessage() {
    if (input.value === "") {
      warning.style.display = "flex";
      setTimeout(function () {
        warning.style.display = "none";
      }, 2000);
    } else {
      message.innerHTML = input.value;
      input.value = "";
    }
  }
})();
