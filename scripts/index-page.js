const image =document.createElement("img");
image.src= "./assets/Images/Mohan-muruge.jpg";
image.classList = "main__image--item";
const container = document.querySelector(".main__image");
container.appendChild(image);
console.log(image);

// create an array to contain existing comments.
const comments = [
  {name: "Victor pinto", date: "11/02/2023", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
  {name: "Christina Cabrera", date: "10/28/2023", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day. "},
  {name: "Isaac Tadesse", date: "10/20/2023", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
]



function displayComments(comment){
  for(let i=0; i<=2;i ++){

    const cardEl = document.createElement("article");
    cardEl.classList.add("main__card")
    
    const image = document.createElement('img');
    image.src = "./assets/Images/Mohan-muruge.jpg";
    
    const cardContainer = document.createElement("div");
    
    const heading = document.createElement("h2");
    heading.textContent = comments[i].name;
    
    const text = document.createElement('p');
    text.textContent = comments[i].comment;
    const date = document.createElement('p');
    date.textContent = comments[i].date;
    
    cardEl.appendChild(image);//image url
    cardEl.appendChild(cardContainer);
    cardEl.appendChild(date);//date
    cardContainer.appendChild(heading);//name
    cardContainer.appendChild(text);//comment
    return cardEl
  } //return the whoe element(variable already)
}




// function renderComments(){
  // const myComment = document.querySelector("#comments-list");
  // clear the comments
  // myComment.innerHTML="";
  // for (let i =2; i >= 0; i--){
    // const card =displayComments(comments[i]);
    // myComment.appendChild(card);
  // }
// };

// everytime the user submits the form, the funcation is called and data is sent to the server.
function handleFormSubmit(e){
  e.preventDefault();
  const newComment = e.target.comment.value;
  const newName = e.target.name.value;
  return {name:newName, comment:newComment}
  const commentData ={name:newName, comment:newComment, date: new Date().toLocaleDateString()};
};

comments.unshift(commentData);
comments.pop();
console.log(displayComments(commentData));

//reset input fields how to make sure that it resets after the submit
// e.target.name.value ="";
// e.target.comment.value = "";
// 
// const formEl = document.querySelector(".main__form");
// 
// formEl.addEventListener("submit",handleFormSubmit);
// renderComments();
// 