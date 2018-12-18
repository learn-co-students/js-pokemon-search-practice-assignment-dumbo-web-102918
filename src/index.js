document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('pokemon-logo');
  onLoad();
})



// LOAD LISTENERS



function loadListeners(filter, flip) {

  // filter pokemon
  filter.addEventListener('keydown', filterPokemon);

  // flip pokemon
  const pokemon_flip = Array.from(flip);

  pokemon_flip.forEach(function (image) {
    image.addEventListener('click', flipPokemon);
  });

}


// ONLOAD 
function onLoad() {
  fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {

      let output = '';
      data.forEach(function (pokemon) {
        output += newPokemonDiv(pokemon.name, pokemon.sprites['front'])
      })
      // ATTACH POKEMON 
      document.getElementById('pokemon-container').innerHTML = output;
      const filter = document.getElementById('pokemon-search-input');
      const flip = document.getElementsByClassName('toggle-sprite');
      loadListeners(filter, flip);
    })

}

function filterPokemon(e) {
  // what are you filtering 
  const text = e.target.value.toLowerCase();

  // select values you want to filter through
  pokemon_names = document.querySelectorAll('.center-text')

  // got through each value
  pokemon_names.forEach(function (pokemon) {
    const name = pokemon.innerText.toLowerCase();

    if (name.indexOf(text) !== (-1)) {
      pokemon.style.opacity = 1;

    } else {
      pokemon.parentNode.style.display = 'none ';
    }
  });
}

function flipPokemon() {
  alert('he is flipped');
}

function newPokemonDiv(name, image) {
  return `
        <div class="pokemon-container">
          <div style='width:230px;margin:10px;background:#fecd2f;color:#2d72fc' class="pokemon-frame">
            <h1 class="center-text">${name}</h1>
            <div style='width:96px;margin:auto'>
            <div style='width:96px;margin:auto'>
              <img data-id="3" data-action="flip" class="toggle-sprite" src=${image}>
              </div>
            </div>
          </div>
        </div>`
}




