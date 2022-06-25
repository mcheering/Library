const cardContainer = document.querySelector('.cardContainer');

let myLibrary = [
      {
            Title: "Your Mom",
            Author: "Earnest Hemmingway",
            Read: true,
            User: "matthew.c.heering01@gmail.com"
      }, 
      {
            Title: "The Hitchhiker's Guide to the Galaxy",
            Author: "Douglas Adams",
            Read: true,
            User: "matthew.c.heering01@gmail.com"
      }, 
      {
            Title: "The Bible",
            Author: "God", 
            Read: false, 
            User: "mandy.heering@gmail.com"
      }
];

const Book = () => {
            this.Title = Title;
            this.Author = Author;
            this.Read = Read;
            this.User = User;
 
};

const addBookToLibrary = () => {

};

const addAttributes = (book) => {


      book = document.createElement('div')
      book.setAttribute('class', 'card')
      book.setAttribute('style', 'width: 18rem;')
      
      const image = document.createElement('img')
      image.setAttribute('class', 'card-img-top')
      image.setAttribute('src', '')
      
      const infoDiv = document.createElement('div')
      infoDiv.setAttribute('class', 'card-body')

      const cardTitle = document.createElement('h5')
      cardTitle.setAttribute('class', 'card-title')
      cardTitle.innerHTML = book.Title

      const cardAuthor = document.createElement('p')
      cardAuthor.setAttribute('class', 'card-text')
      cardAuthor.innerHTML =  book.Author

      const cardReadStatus = document.createElement('p')
      cardReadStatus.setAttribute('class', 'card-text')
      cardReadStatus.innerHTML = (book.Read) ? "Read" : "Not Read"

      const editButton = document.createElement('a')
      editButton.setAttribute('class', 'btn btn-prmary')
      editButton.setAttribute('href', '#')
      editButton.innerHTML = "Edit"


      const markStatusButton = document.createElement('a')
      markStatusButton.setAttribute('class', 'btn btn-prmary')
      markStatusButton.setAttribute('href', '#')
      markStatusButton.innerHTML = "Mark as Read"

      cardContainer.appendChild(book)
      book.appendChild(image)
      book.appendChild(infoDiv)
      infoDiv.appendChild(cardTitle)
      infoDiv.appendChild(cardAuthor)
      infoDiv.appendChild(cardReadStatus)
      book.appendChild(editButton)
      book.appendChild(markStatusButton)
      
}

const populateLibraryFromDatabase = (books) => {
      for (let i = 0; i < books.length; i++) {
      let book = document.createElement('div')
      book.setAttribute('class', 'card')
      book.setAttribute('style', 'width: 18rem;')
      
      const image = document.createElement('img')
      image.setAttribute('class', 'card-img-top')
      image.setAttribute('src', '')
      
      const infoDiv = document.createElement('div')
      infoDiv.setAttribute('class', 'card-body')

      const cardTitle = document.createElement('h5')
      cardTitle.setAttribute('class', 'card-title')
      cardTitle.innerHTML = books[i].Title

      const cardAuthor = document.createElement('p')
      cardAuthor.setAttribute('class', 'card-text')
      cardAuthor.innerHTML =  books[i].Author

      const cardReadStatus = document.createElement('p')
      cardReadStatus.setAttribute('class', 'card-text')
      cardReadStatus.innerHTML = (books[i].Read) ? "Read" : "Not Read"

      const editButton = document.createElement('a')
      editButton.setAttribute('class', 'btn btn-prmary')
      editButton.setAttribute('href', '#')
      editButton.innerHTML = "Edit"


      const markStatusButton = document.createElement('a')
      markStatusButton.setAttribute('class', 'btn btn-prmary')
      markStatusButton.setAttribute('href', '#')
      markStatusButton.innerHTML = "Mark as Read"

      cardContainer.appendChild(book)
      book.appendChild(image)
      book.appendChild(infoDiv)
      infoDiv.appendChild(cardTitle)
      infoDiv.appendChild(cardAuthor)
      infoDiv.appendChild(cardReadStatus)
      book.appendChild(editButton)
      book.appendChild(markStatusButton)
      }
}

populateLibraryFromDatabase(myLibrary)


