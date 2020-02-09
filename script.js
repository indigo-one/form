window.onload = function(e) {
  let inputs = document.querySelectorAll(".check");
  document.querySelector("form").onsubmit = function(e) {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].classList.add("err");
        error = true;
      } else {
        inputs[i].classList.remove("err");
      }
    }
    if (error) {
      e.preventDefault();
    }
  };
};
