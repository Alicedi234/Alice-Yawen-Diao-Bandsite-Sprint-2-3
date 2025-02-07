const image =document.createElement("img");
image.src= "./assets/Images/Mohan-muruge.jpg";
image.classList = "main__image--item";
const containerImage = document.querySelector(".main__image");
containerImage.appendChild(image);
console.log(containerImage);


import BandSiteApi from "./band-site-api.js"

const apiKey = "64eebdbe-732a-4d0c-80e7-c53f51613e18";
const api = new BandSiteApi(apiKey);
// form submit
const container = document.querySelector("#comments-list");
const formEl = document.querySelector(".main__form");

formEl.addEventListener("submit", async function(event){
  event.preventDefault();
  const  NewName = event.target.name.value;
  const NewComment = event.target.comment.value;

//check if the input is valid
  if(!NewComment.trim() || !NewName.trim()){
    const inputEl = document.querySelector("#name");
    inputEl.style.border = "2px solid #D22D2D";
    
    const inputEl2 = document.querySelector("#comment");
    inputEl2.style.border = "2px solid #D22D2D";
    alert("Please fill out the form");
   return;
  }
  console.log("NewName", NewName);
  console.log("NewComment", NewComment);

  const commentData = {
    name: NewName,
    comment: NewComment,
  }
  const responseData = await api.postComment(commentData);
  console.log(responseData);
  
  formEl.reset();
  return await DisplayComments();
})

async function DisplayComments(){
  const dataGot = await api.getComments("comments");
  container.innerHTML = "";
  console.log(dataGot);
  // const articles = [];
  for (let i = ((dataGot.nameSingle.length) - 1); i >= 0; i--){
    const cardEl = document.createElement("article");
    cardEl.classList.add("main__card");
    
    const pic = document.createElement('div');
    pic.classList.add("main__avatar");
    
    const cardContainer2 = document.createElement("div")
    cardContainer2.classList.add("main__container2");
    
    const cardContainer3 = document.createElement("div")
    cardContainer3.classList.add("main__container3");
    
    const headingName = document.createElement("h2");
    headingName.classList.add("main__container2--heading")
    headingName.textContent = dataGot.nameSingle[i];
    
    const textComment = document.createElement('p');
    textComment.textContent = dataGot.commentSingle[i];
    textComment.classList.add("main__container2--text");
    
    const date = document.createElement('p');
    date.classList.add("main__date");
    date.textContent = new Date(dataGot.dateSingle[i]).toLocaleDateString();
    
    const dividerBottom = document.createElement('hr');
    dividerBottom.classList.add("main__divider");
    
    cardContainer2.appendChild(headingName);//name
    cardContainer2.appendChild(textComment);//comment
    cardContainer3.appendChild(pic);
    cardContainer3.appendChild(cardContainer2);
    cardEl.appendChild(cardContainer3);
    cardEl.appendChild(date);//date
    cardEl.appendChild(dividerBottom);
    
    // articles.push(cardEl);
    container.appendChild(cardEl);
  }
  console.log(container);
  return container;
}

DisplayComments();