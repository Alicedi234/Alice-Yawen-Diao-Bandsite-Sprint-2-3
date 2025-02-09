class shows{
  constructor(apiKey){
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    this.apiKey = apiKey;
  }
  async getShows(){
    const url = `${this.baseUrl}showdates?api_key=${this.apiKey}`;
    try{
      const response = await axios.get(url);
      const date = response.data.map(item =>item.date);// new array
      const venue = response.data.map(item => item.place);
      const location = response.data.map(item => item.location);
      const dataGot = {date, venue, location}; //put 6 arrays in 1 object
      return dataGot;
    }
    catch(error){
      console.log(error);
    }
  }
}

  const apiKey = "64eebdbe-732a-4d0c-80e7-c53f51613e18";
  const api = new shows(apiKey);

  const showsBox = document.querySelector(".shows__box");

 async function displayShows(){
    const dataFinal = await api.getShows(); // call class
    
    for (let i =0; i < 5; i++){
      
      const showsEl = document.createElement("div");
      showsEl.classList.add("shows__container");
      showsEl.classList.add("shows__container--hover");
      showsEl.classList.add("shows__container--selected");
      
      const dateBox = document.createElement("div");
      dateBox.classList.add("shows__date-box");

      const dateContainer = document.createElement("h3");
      dateContainer.textContent = "DATE";
      dateContainer.classList.add("shows__date-container");
  
      const date = document.createElement("p");
      const newDate = new Date(await dataFinal.date[i])
      const formattedDate = newDate.toString().substring(0,15)
      date.textContent = formattedDate;
      date.classList.add("shows__date");

      const venueBox = document.createElement("div");
      venueBox.classList.add("shows__venue-box");

      const venueContainer = document.createElement("h3");
      venueContainer.textContent = "VENUE";
      venueContainer.classList.add("shows__venue-container");
    
      const venue = document.createElement("p");
      venue.textContent = await dataFinal.venue[i];
      venue.classList.add("shows__venue");
    
      const locationBox = document.createElement("div");
      locationBox.classList.add("shows__location-box");
  
      const locationContainer = document.createElement("h3");
      locationContainer.textContent = "LOCATION";
      locationContainer.classList.add("shows__location-container");
  
      const location = document.createElement("p");
      location.classList.add("shows__location")
      location.textContent = await dataFinal.location[i];

      const buttonEl = document.createElement("button");
      buttonEl.textContent = "BUY TICKETS";
      buttonEl.classList.add("shows__button");

      const dividerEl = document.createElement("hr");
      dividerEl.classList.add("shows__divider");

      dateBox.appendChild(dateContainer);
      dateBox.appendChild(date);

      venueBox.appendChild(venueContainer);
      venueBox.appendChild(venue);

      locationBox.appendChild(locationContainer);
      locationBox.appendChild(location);

      showsEl.appendChild(dateBox);
      showsEl.appendChild(venueBox);
      showsEl.appendChild(locationBox);
      showsEl.appendChild(buttonEl);
      showsEl.appendChild(dividerEl);

      showsBox.appendChild(showsEl)
    }
      const buttons = document.querySelectorAll(".shows__button");
      buttons.forEach(function(button){
      button.addEventListener("click", function(){
      alert("Jumping to another page")
    })
  })
  return showsBox;
  }

  displayShows();




