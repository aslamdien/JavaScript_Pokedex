let base_URL = "https://pokeapi.co/api/v2/pokemon/";



function getPokemonList(url) {
  fetch(url)
    // Convert data from JSON
    .then((response) => response.json())
    //Stuff to do with data
    .then((data) => {
      // Console log to make sure I am getting the data
      console.log(data);
      // Get the list of pokemon from the results
      let pokemon = data.results;
      // Get element from HTML to write buttons in
      let container = document.querySelector(".pokemon-list-container");
      // Clear the container
      container.innerHTML = "";
      // Loop over pokemon list and create an HTML button for each one. Add the button to the container
    
    
      pokemon.forEach((btn) => {
        
        container.innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
        container.innerHTML += `<br><br><button class = "prev" onclick="getPokemonList('${data.previous}')">Prev</button>`
      // Add a next pokemon button
      container.innerHTML += `<button class = "next" onclick="getPokemonList('${data.next}')">Next</button>`;
    });
}

// Get default pokemon list
getPokemonList(base_URL);

function getPokemonInfo(url){
  console.log(url)
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector(".pokemon-info").innerHTML = `<img src = "${data.sprites.front_default}">`
  })
}