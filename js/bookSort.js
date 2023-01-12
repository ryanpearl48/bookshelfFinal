// Importing all the book data we've been using
import { bookData } from "./book-data.js";

// Top of html doc, used for search and favorite function
const search = document.getElementById("search");

// Don't touch, for wrapper for list of items.
const wrapper = document.querySelector("#wrapper") // Wrapper for all generated book elements
const ul = document.createElement("ul"); // UL to house books

const reg = document.querySelector("#reg");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password")
const seeCon2 = document.querySelector("#subContent")

// Event listener for displaying book data with sign in stuff
seeCon2.addEventListener("click", function(){
    if(emailInput === emailInput && passwordInput === passwordInput){ 
            reg.style.display = "none";
            wrapper.appendChild(ul); // Appending UL to the div
        }
})


const author = document.getElementById("author")
const language = document.getElementById("language")
const subject = document.getElementById("subject")
const title = document.getElementById("title")
const selectButton = document.querySelector("#selectButton");
const book = document.createElement("li");
book.hasAttribute("class", "words");

// Create Books class
class Books {
    constructor(author, language, subject, title) {
        this.book = author, language, subject, title;
        this.selectButton = selectButton;
    }
    

    // Display books
    initBook(){

// The following are the setup for comments/favoriting
        const heart = document.createElement("button");
        heart.setAttribute("class", "heartButt")
        heart.innerHTML = "🔥";

// Comment input bar
        const comment = document.createElement("input");
        const commentCharCount = document.createElement("h5");

// Comment button (a.k.a) the button that opens the comment
        const commentButton = document.createElement("button");
        commentButton.innerHTML = "Leave a comment"

// The submit button for finished comment
        const commentSubmit = document.createElement("button");
        commentSubmit.innerHTML = "Submit"

// The input that is pushed to be the output
        const commentInput = document.createElement("h2");
        commentInput.setAttribute("class", "commInput");
        
// Variable favrt named for favorite inner HTML 
        const favrt = document.createElement("h4");
        
        // Creates book content to generate
        this.renderBook = document.createElement("li");
        this.renderBook.innerHTML =`
        Author: ${this.book.author} 
        Language:${this.book.language} 
        Subject:${this.book.subject}  
        Title: ${this.book.title}`; 
        
        
        // Content that is applied to the generated book content
        this.renderBook.appendChild(heart);
        this.renderBook.appendChild(commentButton);
        this.renderBook.appendChild(commentCharCount);
        this.renderBook.appendChild(comment);
        this.renderBook.appendChild(commentSubmit);
        this.renderBook.appendChild(commentInput);
        this.renderBook.appendChild(favrt);
        // Inputs for generating a new book and adding to the shelf
        ul.appendChild(this.renderBook);
        
        this.selectButton.addEventListener("click", function(){
            book.innerHTML =`
            Author: ${author.value}  
            Language: ${language.value}
            Subject: ${subject.value} 
            Title: ${title.value}`;
            ul.appendChild(book);
        })
        
// Comment system (Start with no display and switch accordingly)
// Comment.maxLength specifies the max character amount
// Trying to implement a character counter
    commentSubmit.style.display = "none";
    comment.style.display = "none";
    commentInput.style.display = "none";
    comment.maxLength = "280";
    commentButton.addEventListener("click", function(){
        commentButton.style.display = "none";
        comment.style.display = "block";
        commentSubmit.style.display = "block";
// commentCharCount.innerHTML = comment.length;
    });  
    
// Adds comments to generated elements
    commentSubmit.addEventListener("click", function(){
        commentInput.innerHTML = comment.value;
        commentInput.style.display = "block";
// These two below get rid of input bar and submit buttons after pressing submit.
// I feel like it'd be relatively easy to add a function to reset comment.
        comment.style.display = "none";
        commentSubmit.style.display = "none";
    });  
    
// Add for each since it will only count to one, also add 
// a place for favorited books to go
    let count = 0;
    heart.addEventListener("click", function(){
        count++
        favArea.value = count;
        if(count >= 1){
            favrt.innerHTML = "Favorited! ⭐️"
        }     
    })
}
};

// Create Bookshelf Class
class Bookshelf {
    constructor(){
        this.books = bookData;
        this.author;
        this.language;
        this.subject;
        this.title;
    }

// Render function to display book data
    render(){
        this.rendered = this.books.map((bk) => {new Books(bk).initBook();})
        
    }
}
new Bookshelf().render();


//     const sortSelector = document.querySelector("#sort");
//     const az = document.querySelector("#az")
//     const aZZa = this.rendered.sort(function(a, b) {
//     sortSelector.addEventListener("change", function(){
//     sortSelector.addEventListener("click", function(){
//             if(az  === "A-Z"){
//                 if(a.author < b.author){
//                     return -1;
//                 }
//                 if(a.author > b.author){
//                     return 1;
//             }
//          } 
//         }) 
//     }) 
//     return aZZa;
//    })