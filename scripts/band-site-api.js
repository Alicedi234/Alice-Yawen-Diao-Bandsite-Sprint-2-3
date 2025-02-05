// form submit








async function postComment(){
  const newPost = {
    "name": "alice",
    "comment":"this is a great show",
  }
  try{
    const reponsePost = await axios.post("https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=64eebdbe-732a-4d0c-80e7-c53f51613e18",
      newPost, {Headers: {"content-Type":"application/json"}});
      console.log(reponsePost.data);
      return reponsePost.data;
      
  }catch(error){
    console.log(error);
  }
}
//reset data

// postComment();







class BandSiteApi{
  constructor(apiKey){
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    this.apiKey = apiKey;
  }

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

const container = document.querySelector("#comments-list");


async function DisplayComments(){
  const dataGot = await api.getData("comments");
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
















    
// date.textContent =timeAgo(comments[i].date);
    








// const new url = "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=64eebdbe-732a-4d0c-80e7-c53f51613e18";




// // getComments("https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=64eebdbe-732a-4d0c-80e7-c53f51613e18");