function generateFact(event) {
  event.preventDefault();

  new Typewriter("#fact", {
    strings: "Generating a fact",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let factFormElement = document.querySelector("#fact-finder-form");
factFormElement.addEventListener("submit", generateFact);
