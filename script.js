const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  age: document.querySelector("#description"),

};

function backgroundAndText(background, firstName) {
  background.style.backgroundColor = "red";
  firstName.innerHTML = "This is now a big red box"
};

backgroundAndText(DOMSelectors.age, DOMSelectors.firstName)