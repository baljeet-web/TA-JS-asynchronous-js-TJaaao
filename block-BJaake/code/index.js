let rootElement = document.querySelector(`.grid-container`);
let li = document.querySelector(`.flex-container`);
let img = document.querySelector(`img`);
let data = document.querySelector(`.flex`);
let heading = document.querySelector(h2);
let paragraph = document.querySelector(`p`);
let readMore = document.querySelector(`button`);
let searched = document.querySelector(`option`);

if (searched.innerText === `Arstechnia`) {
  createUI(Arstechnia);
} else if (searched.innerText === `Nasa Spaceflight`) {
  createUI(NasaSpaceflight);
} else if (searched.innerText === ` SpaceNews`) {
  createUI(spaceNews);
} else if (searched.innerText === `Teslarati`) {
  createUI(teslarati);
}

function createUI(event){
    fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`)
    for(var element of elements){
        img.src
    }
}
