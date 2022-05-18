fetch(`https://www.anapioficeandfire.com/api/books`)
  .then((Response) => Response.json())
  .then((books) => {
    console.log(books);
    createUI(books);
  });

//   <div class="grid">
//                 <h2>
//                     A Game of Thrones
//                 </h2>
//                 <p>
//                     George R.R Martin
//                 </p>
//                 <button>
//                     Show Characters(434)
//                 </button>
//             </div>

let rootElement = document.querySelector(`.grid-container`);

function createUI(data) {
  data.forEach((elm) => {
    let grid = document.querySelector(`.grid`)
    let bookName = document.querySelector(`h2`);
    bookName.innerText = elm.name;
    let authorName = document.querySelector(`p`);
    authorName.innerText = elm.authors;
    let characters = document.querySelector(`button`);
    characters.innerText = `Characters (${elm.numberOfPages})`;
    rootElement.append(grid);
    grid.append(bookName,authorName,characters);
  });
}
