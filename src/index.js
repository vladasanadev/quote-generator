function displayFact(response) {
  console.log("fact generated");
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let feedInput = document.querySelector;
  let apiKey = "97ca3fd7c1847b8c2t8cf2o00a730a3a";
  let prompt = `Generate an interesting fact about ${feedInput.value}`;
  let context =
    "You are a knowledgeable AI assistant that can provide interesting facts.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  console.log("Finding fact");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector("#fact-finder-form");
factFormElement.addEventListener("submit", generateFact);
