const myLibray = [];

function Book(author,title,numOfPages,readOrNot) {
  this.author = author;
  this.title = title;
  this.numOfPages = numOfPages;
  this.readOrNot = readOrNot;
}

function addBookToLibrary(author,title,numOfPages,readOrNot) {
  let newBook = new Book(author,title,numOfPages,readOrNot);
  newBook.id = crypto.randomUUID();
  myLibray.push(newBook);
}
