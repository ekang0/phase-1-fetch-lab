function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});



/*
//FETCH LAB- finding 
//1. The 5th book in the series
//2. The 1031st character in the series
//3. The total number of pages of all the books
fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
        console.log(json);
        console.log(`The 5th book in the series: ${json[4].name}`);
//The 1031st character in the series
        console.log(json[0].characters);

        let totalPages = 0;
        json.forEach(objElem => {
            totalPages += objElem.numberOfPages;
        });
        console.log(`The total number of pages of all the books: ${totalPages}`);
});
*/