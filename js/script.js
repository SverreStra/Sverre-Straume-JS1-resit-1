const url = "https://api.noroff.dev/api/v1/jokes/";
let jokesContainer = document.querySelector(".results")





async function getJoke() {


  try {
  const response = await fetch(url);

  const results = await response.json();

  var jokes = results



  console.log(jokes);


  for (let i = 0; i < jokes.length; i++) {
    let item = jokes[i];

   

    console.log(item.setup);

    console.log(item.type);

    
    jokesContainer.innerHTML += `<div class="card">
                                  <h2>${item.setup}</h2>
                                  <p>${item.type}</p>
                                  <a class="btn" href="joke.html?id=${item.id}">Click me</a>
                                  </div>`
  }

  

  } 
  catch {
    console.log(err);
  }
}
  
getJoke();

