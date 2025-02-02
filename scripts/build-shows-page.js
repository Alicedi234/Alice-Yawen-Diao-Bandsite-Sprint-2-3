const showsdata = [
{date: "MON Sept 09 2024",
  venue: "Ronald Lane",
  location: "San Francisco, CA"
},
{
  date: "Tue Sept 17 2024",
  venue: "Pier 3 East",
  location: "San Francisco, CA"
},
{
  date: "Sat Oct 12 2024",
  venue: "View Lounge",
  location: "San Francisco, CA"
},
{
  date: "Sat Nov 16 2024",
  venue: "The Fillmore",
  location: "San Francisco, CA"
},
{
  date: "Fri Nov 29 2024",
  venue: "Moscow Center",
  location: "San Francisco, CA"
},
{
  date: "Wed Dec 18 2024",
  venue: "Press Club",
  location: "San Francisco, CA"
}
]

function displayShows(showsdata){
  
  const showsContainer = [];
  for (let i =0; i < showsdata.length; i++){

    const showsEl = document.createElement("div");
    showsEl.classList.add("shows__container");
    showsEl.classList.add("shows__container--hover");
    showsEl.classList.add("shows__container--selected");
    
    const dateContainer = document.createElement("h3");
    dateContainer.textContent = "DATE";
    dateContainer.classList.add("shows__date-container");
    
    const date = document.createElement("p");
    date.textContent = showsdata[i].date;
    date.classList.add("shows__date");
    
    const venueContainer = document.createElement("h3");
    venueContainer.textContent = "VENUE";
    venueContainer.classList.add("shows__venue-container");
    
    const venue = document.createElement("p");
    venue.textContent = showsdata[i].venue;
    venue.classList.add("shows__venue");
    
    
    const locationContainer = document.createElement("h3");
    locationContainer.textContent = "LOCATION";
    locationContainer.classList.add("shows__location-container");
    
    const location = document.createElement("p");
    location.classList.add("shows__location")
    location.textContent = showsdata[i].location;
    
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "BUY TICKETS";
    buttonEl.classList.add("shows__button");

    const dividerEl = document.createElement("hr");
    dividerEl.classList.add("shows__divider");
    
    showsEl.appendChild(dateContainer);
    showsEl.appendChild(date);
    showsEl.appendChild(venueContainer);
    showsEl.appendChild(venue);
    showsEl.appendChild(locationContainer);
    showsEl.appendChild(location);
    showsEl.appendChild(buttonEl);
    showsEl.appendChild(dividerEl);
    
    showsContainer.push(showsEl)
  }
  return showsContainer;
}

const showsSection = document.querySelector(".shows");
const showsList = displayShows(showsdata)

showsList.forEach(function(show){
showsSection.appendChild(show);
})

const buttons = document.querySelectorAll(".shows__button");

buttons.forEach(function(button){
  button.addEventListener("click", function(){
    alert("Jumping to another page")
  })
})
