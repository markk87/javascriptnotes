const DOMSelectors = {
    submit: document.querySelector("#submit"),
    firstName: document.querySelector(".yourdad")
};

DOMSelectors.submit.addEventListener("submit", function(event) {
    event.preventDeafult();
    console.log(DOMSelectors.firstName.value)
    DOMSelectors.submit.forEach(element => {
        element.textContent = DOMSelectors.firstName.value
    });
})