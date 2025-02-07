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
async getComments(path){
  const url =`${this.baseUrl}${path}?api_key=${this.apiKey}`;
  try{
    const response = await axios.get(url);
    const nameSingle = response.data.map(item => item.name);
    const commentSingle = response.data.map(item => item.comment);
    const dateSingle = response.data.map(item => item.timestamp);
    console.log(response.data);
    console.log(nameSingle, commentSingle, dateSingle);
    return {nameSingle, commentSingle, dateSingle}
  }catch (error){
console.log(error);
  }
  }

// get shows
async getShows(){
  const url = `${this.baseUrl}showdates?api_key=${this.apiKey}`;
}

  
}

export default BandSiteApi;




