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

  let topicInput = document.querySelector("#user-topic");
  let apiKey = "97ca3fd7c1847b8c2t8cf2o00a730a3a";
  let context =
    "You are a knowledgeable AI assistant that can provide intriguing short facts. Your misson is to provide a fact in basic HTML, which is no longer than 8 lines. Do not include a title or heading. Make sure to follow user instructions.";
  let prompt = `User instructions: Generate an interesting fact about ${topicInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Finding fact");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector("#fact-finder-form");
factFormElement.addEventListener("submit", generateFact);
