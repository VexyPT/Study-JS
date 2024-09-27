class Book {
  #title
  #author
  #year
  #available

  constructor(title, author, year, available=true) {
    this.#title = title;
    this.#author = author;
    this.#year = year;
    this.#available = available;
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getYear() {
    return this.#year;
  }

  isAvailable() {
    return this.#available;
  }

  borrow() {
    if(!this.#available) {
      return console.log("O livro não está disponível.");
    }
    this.#available = false;
    return console.log("Livro emprestado.");
  }

  return() {
    if(this.#available) {
      return console.log("O livro já foi devolvido ou nunca foi emprestado");
    }
    this.#available = true;
    return console.log("Livro devolvido.");
  }
}

class Library {
  #books

  constructor() {
    this.#books = [];
  }

  addBook(book) {
    this.#books.push(book);
  }
  
  listBooks() {
    if (this.#books.length == 0) {
      return "Biblioteca vazia";
    }
    return this.#books.map((book) => {
      return `Título: ${book.getTitle()}\n > Autor: ${book.getAuthor()}\n > Ano de lançamento: ${book.getYear()}\n > ${book.isAvailable() ? "Livro disponível para levantamento" : "Livro indisponível"}`
    }).join("\n");
  }
}

const book1 = new Book("1994", "George Orwell", 1949, true);
const book2 = new Book("Dom Casmurro", "Machado de Assis", 1899, false);
const book3 = new Book("O senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", 1954, true);

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("Biblioteca do Vexy\n\n" + library.listBooks());

book1.borrow();
book2.return();
book3.return();