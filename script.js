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
  addBookToLibrary(author.value,title.value,numOfPages.value,read.value);
  author.textContent = "";
  title.textContent = "";
  numOfPages.textContent = "";
  read.textContent = "";
})


function displayBooks() {
  if (myLibrary.length !== 0) {
    myLibrary.forEach((item) => {
      let div = document.createElement("div");
      div.style.border = "1px solid black";
      let author = document.createElement("p");
      let title = document.createElement("p");
      let numOfPages = document.createElement("p");
      let read = document.createElement("p");
      let btn = document.createElement("button");
      let btnTwo = document.createElement("button");
      let container = document.querySelector(".container");
      author.textContent = `Author: ${item.author}`;
      title.textContent = `Title: ${item.title}`;
      numOfPages.textContent = `Num of Pages: ${item.numOfPages}`;
      read.textContent = `Reading: ${item.readOrNot}`;
      btn.textContent = "Change Reading Status";
      btnTwo.textContent = "Delete Book";
      btn.setAttribute("id",`${item.id}`);
      btn.setAttribute("class","read");
      btnTwo.setAttribute("class","del");
      btnTwo.setAttribute("id",`${item.id}`);
      read.setAttribute("id",`${item.id}`);
      read.setAttribute("class","reading");
      div.appendChild(author);
      div.appendChild(title);
      div.appendChild(numOfPages);
      div.appendChild(read);
      div.appendChild(btn);
      div.appendChild(btnTwo);
      container.appendChild(div);
    })
  }
}

let display = document.querySelector(".display");
display.addEventListener("click",(e) => {
  displayBooks();
});

let container = document.querySelector(".container");
container.addEventListener("click",(e) => {
  const id = e.target.id;
  let p = document.querySelector(`p[id="${id}"]`);
  if (e.target.className === "read") {
    myLibrary.forEach((item) => {
      if (item.id === id) {
        if (item.readOrNot === "no") {
          item.readOrNot = "yes";
          p.textContent = "Reading: yes";
        }
        else {
          item.readOrNot = "no";
          p.textContent = "Reading: no";
        }
      }
    })
  }
})

container.addEventListener("click",(e) => {
  let id = e.target.id;
  let btn = e.target;
  if (e.target.className === "del") {
    myLibrary.forEach((item,index) => {
      if (item.id === id) {
        myLibrary.splice(index,1); 
      }
      const parent = btn.parentElement;
      parent.remove();
    })
  }
})
