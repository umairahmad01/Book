const myLibrary = [];

function Book(author,title,numOfPages,readOrNot) {
  this.author = author;
  this.title = title;
  this.numOfPages = numOfPages;
  this.readOrNot = readOrNot;
}

function addBookToLibrary(author,title,numOfPages,readOrNot) {
  let newBook = new Book(author,title,numOfPages,readOrNot);
  newBook.id = crypto.randomUUID();
  myLibrary.push(newBook);
}
let author = document.querySelector("#author");
let title = document.querySelector("#title");
let numOfPages  = document.querySelector("#numOfPages");
let read = document.querySelector("#read");
let submitBtn = document.querySelector("#btn");

submitBtn.addEventListener("click",(e) => {
  e.preventDefault();
  console.log("works")
  addBookToLibrary(author.value,title.value,numOfPages.value,read.value);
  author.textContent = "";
  title.textContent = "";
  numOfPages.textContent = "";
  read.textContent = "";
  console.log(myLibrary);
})
function displayBooks() {
  console.log("works")
  if (myLibrary.length !== 0) {
    myLibrary.forEach((item) => {
      let div = document.createElement("div");
      div.style.border = "2px solid black";
      let author = document.createElement("p");
      let title = document.createElement("p");
      let numOfPages = document.createElement("p");
      let read = document.createElement("p");
      author.textContent = `Author: ${item.author}`;
      title.textContent = `Title: ${item.title}`;
      numOfPages.textContent = `Title: ${item.numOfPages}`;
      read.textContent = `Title: ${item.readOrNot}`;
      div.appendChild(author);
      div.appendChild(title);
      div.appendChild(numOfPages);
      div.appendChild(read);
      let body = document.querySelector("body");
      body.appendChild(div);
    })
  }
}

let display = document.querySelector(".display");
display.addEventListener("click",(e) => {
  displayBooks(); 
});
