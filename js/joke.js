const jokeContainer = document.querySelector(".main-joke");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);


const id = params.get("id");

console.log(id);


const url = "https://api.noroff.dev/api/v1/jokes/" + id;

async function getJokes() {


  try {
  const response = await fetch(url);

  const joke = await response.json();

  console.log(joke);

 createHtml(joke);
 
  } 
  catch {
    console.log(err);
  }
}
  
getJokes();




function createHtml(joke) {
  jokeContainer.innerHTML = `<div class="card">
                              <h1>${joke.type}</h1>
                              <p class="joke">${joke.setup}</p>
                              <button class="punch-btn" onclick="showPunch()">Punchline</button>
                              <p id="punch">${joke.punchline}</p>
                              </div>`
}



function showPunch() {
  var x = 
  document.getElementById("punch");
  if (x.style.display ==="none");
  {
    x.style.display = "block";
  }
}
