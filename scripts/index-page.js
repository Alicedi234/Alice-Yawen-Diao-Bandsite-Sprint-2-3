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
  const cardEl = document.createElement("article");
  const image = document.createElement('img');
  const cardContainer = document.createElement("div");
  const heading = document.createElement("h2");
  const text = document.createElement('p');
  const date = document.createElement('p');
  cardEl.appendChild(image);
  cardEl.appendChild(cardContainer);
  cardEl.appendChild(date);
  cardContainer.appendChild(heading);
  cardContainer.appendChild(text);

  return cardEl
}

function renderComments(){
  const myComment = document.querySelector("comments-list");
  //clear the comments
  myComment.innerHTML="";
}





