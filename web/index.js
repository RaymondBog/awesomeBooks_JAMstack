const addedBooks = document.querySelector("#added-books");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
const addBooks = async function () {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  let addBookApi = `https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-3ebc639c-4198-46cd-8f1a-49c8ef431682/cloud/addBooks?title=${title}&author=${author}`;
  await fetch(addBookApi);
  form.reset();
}

const addBookButton = document.getElementById('form-button');
addBookButton.addEventListener('click', addBooks);

document.addEventListener("DOMContentLoaded", ()=>{
  let ul = document.createElement("ul");
  ul.style.listStyleType = "none";
  let getBookApi = `https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-3ebc639c-4198-46cd-8f1a-49c8ef431682/cloud/getBooks`
  fetch(getBookApi)
  .then (response => response.json())
  .then (books => {
      books.forEach(book => {
        let li = document.createElement('li')
        li.style.marginBottom = "10px";
        li.innerHTML = `${book.title} written by ${book.author}
        <button style="background-color: #ff0000; color: #fff; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer;">Remove</button>`
        
       
         ul.appendChild(li);
         addedBooks.appendChild(ul);                
        
      });
  })
})





