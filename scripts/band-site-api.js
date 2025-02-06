// const image =document.createElement("img");
// image.src= "./assets/Images/Mohan-muruge.jpg";
// image.classList = "main__image--item";
// const container = document.querySelector(".main__image");
// container.appendChild(image);
// console.log(image);





// async function postComment(commentData){
  // const url =`${this.baseUrl}${path}?api_key=${this.apiKey}`;
  // try{
    // // const reponsePost = await axios.post("https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=64eebdbe-732a-4d0c-80e7-c53f51613e18",
    // commentData, {Headers: {"content-Type":"application/json"}});
    // console.log(reponsePost.data);
    // return reponsePost.data;
      // 
  // }catch(error){
    // console.log(error);
  // 
// }
// }



//reset data





class BandSiteApi{
  constructor(apiKey){
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    this.apiKey = apiKey;
  }
  // post comment
  async postComment(commentData){
    const url =`${this.baseUrl}comments?api_key=${this.apiKey}`;
    try{
      const responsePost = await axios.post(url, commentData, {headers:{"Content-Type":"application/json"}
      });
      console.log(responsePost.data);
      return responsePost.data;
    }catch(error){
      console.log(error)
    }
  }
// get comments

async getData(path){
  const url =`${this.baseUrl}${path}?api_key=${this.apiKey}`;
  try{
    const response = await axios.get(url);
    const nameSingle = response.data.map(item => item.name);
    const commentSingle = response.data.map(item => item.comment);
    const dateSingle = response.data.map(item => item.timestamp);
    
    return {nameSingle, commentSingle, dateSingle}
  }catch (error){
console.log(error);
  }
  }
}

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
  
  return await DisplayComments();
})






async function DisplayComments(){
  const dataGot = await api.getData("comments");
  container.innerHTML = "";
  console.log(dataGot);
  // const articles = [];
  for (let i = 0; i < dataGot.nameSingle.length; i++){
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
    date.textContent = dataGot.dateSingle[i];
    
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
















    
    












