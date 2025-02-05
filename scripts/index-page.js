const image =document.createElement("img");
image.src= "./assets/Images/Mohan-muruge.jpg";
image.classList = "main__image--item";
const container = document.querySelector(".main__image");
container.appendChild(image);
console.log(image);

// create a new variable to store the constant APikey
const API_KEY = "64eebdbe-732a-4d0c-80e7-c53f51613e18";

// create an instance of BandSiteApi
const api = new BandSiteApi(API_KEY);
console.log("new instance", api);

console.log(await api.getData("comments"));















// create an array to contain existing comments.


const comments = [
  { 
    name: "Victor Pinto", 
    date: "11/02/2023", 
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
  },
  { 
    name: "Christina Cabrera", 
    date: "10/28/2023", 
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },
  { 
    name: "Isaac Tadesse", 
    date: "10/20/2023", 
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  }
];

// I tried it ... didn't work :(

// function timeAgo(dateString) {
//   const now = new Date().toISOString();
//   const past = new Date(dateString);
//   const diffInSeconds = Math.floor((now - past) / 1000);

//   if (diffInSeconds < 60) {
//       return `${diffInSeconds} seconds ago`;
//   } else if (diffInSeconds < 3600) {
//       return `${Math.floor(diffInSeconds / 60)} minutes ago`;
//   } else if (diffInSeconds < 86400) {
//       return `${Math.floor(diffInSeconds / 3600)} hours ago`;
//   } else if (diffInSeconds < 604800) {
//       return `${Math.floor(diffInSeconds / 86400)} days ago`;
//   } else{
//     return past.toLocaleDateString();
//   }
// }


// diplay function
function displayComments(comments){
  const articles = [];

  for(let i =0; i <comments.length; i++){
    const cardEl = document.createElement("article");
    cardEl.classList.add("main__card");
    
    const pic = document.createElement('div');
    pic.classList.add("main__avatar");
    
    const cardContainer2 = document.createElement("div");
    cardContainer2.classList.add("main__container2");

    const cardContainer3 = document.createElement("div");
    cardContainer3.classList.add("main__container3");
    
    const heading = document.createElement("h2");
    heading.classList.add("main__container2--heading")
    heading.textContent = comments[i].name;
    
    const text = document.createElement('p');
    text.textContent = comments[i].comment;
    text.classList.add("main__container2--text");

    const date = document.createElement('p');
    date.classList.add("main__date");
    date.textContent =comments[i].date;
    
    // date.textContent =timeAgo(comments[i].date);
    

    const dividerBottom = document.createElement('hr');
    dividerBottom.classList.add("main__divider");

    cardContainer2.appendChild(heading);//name
    cardContainer2.appendChild(text);//comment
    cardContainer3.appendChild(pic);
    cardContainer3.appendChild(cardContainer2);
    cardEl.appendChild(cardContainer3);
    cardEl.appendChild(date);//date
    cardEl.appendChild(dividerBottom);
  
    articles.push(cardEl);
  }
  return articles;
  }

// submit form
const formEl = document.querySelector(".main__form");
const myComment = document.querySelector("#comments-list");

formEl.addEventListener("submit", function(event){
  event.preventDefault();

//toch the form values
  const newComment = event.target.comment.value;
  const newName = event.target.name.value; 

//check if the form is filled out
   if(!newComment.trim() || !newName.trim()){
     const inputEl = document.querySelector("#name");
     inputEl.style.border = "2px solid #D22D2D";

     const inputEl2 = document.querySelector("#comment");
     inputEl2.style.border = "2px solid #D22D2D";
     alert("Please fill out the form");
    return;
   }

   console.log("newName", newName);
   console.log("newComment", newComment);
// create a new comment object
  const commentData = {
    name:newName, 
    date: new Date().toLocaleDateString(),
    comment:newComment,
  };

  console.log("commentData", commentData);

  comments.unshift(commentData);
  console.log("comments", comments);

  myComment.innerHTML = "";

  const updatedComments = displayComments(comments);
  updatedComments.forEach(comment => {
    myComment.appendChild(comment);
  })

//clear the form
  formEl.reset();

});

const commentSection = displayComments(comments);
commentSection.forEach(comment =>{
  myComment.appendChild(comment);
})

