// Wait for the DOM to finish loading before populating the selects
document.addEventListener("DOMContentLoaded", function() {
  
  populateSelects();

});

/**
 * The main populating function, called when the popup is first loaded.
 * This populates the dropdown selects from json files
 */
function populateSelects(){
  renderPickupPoint();
}

//This is all the json relevant code
//This is based on javascripttutorial for Fetch API example https://www.javascripttutorial.net/javascript-fetch-api/ See Credits

/**
 * The json collection function, called when a select is looking to json for source.
 * This gets the data from the json file residing at the provided url.
 * Then returns the json data as an object
 */
async function fetchJson(myUrl) {
  try {
      let res = await fetch(myUrl);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}
/**
 * The Pickup Point select populating function.
 * This loops through the object returned from our fetchJson.
 * This lopp then builds the html to populate the select name="pickup" in Calulate fares Form.
 */
async function renderPickupPoint() {
  let pickUrl = 'assets/js/pdata.json';
  let picks = await fetchJson(pickUrl);
  let pickHtml = '';
  picks.forEach(pick => {
      let htmlSegment = ` <option value=${pick.value}>
                          ${pick.ppoint}
                          </option>`;

      pickHtml += htmlSegment;
  });

  let pickoptions = document.querySelector('.pickoptions');
  pickoptions.innerHTML = pickHtml;
}

/*
function checkFares(users) {
  return users.gender === "Female" && users.username === "jane";
}

async function searchUsers() {
  const users = await getUsers();
  const result = users.filter(checkFares);
  console.log(result);
  
}

*/

//renderUsers();

//searchUsers();


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

/*

const form = document.getElementById('form_fares');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

function calculateFares(pickPoint, destPoint, catPerson, freqTicket) {
  let fareArray = []; 
    
  let myFare = "€14.00"; 
  let returnText =`${freqTicket} for ${catPerson} from ${pickPoint} to ${destPoint} is ${myFare}`
  return returnText; 
}
    
function calculateForm() {
  
//Pick up Point
let select1 = document.getElementById("pickup");
let value1 = select1.options[select1.selectedIndex].value;
//alert("Pickup is :" + value1);
//Destination
let select2 = document.getElementById("destination");
let value2 = select2.options[select2.selectedIndex].value;
//alert("Destination is :" + value2);
//Category
let select3 = document.getElementById("category");
let value3 = select3.options[select3.selectedIndex].value;
//alert("Category is :" + value3);
//Frequency
let select4 = document.getElementById("frequency");
let value4 = select4.options[select4.selectedIndex].value;
//alert("Frequency is :" + value4);

let fareCalc = calculateFares(value1, value2, value3, value4);

document.getElementById("fare_required").innerHTML = fareCalc;
document.getElementById("fare_required").style.fontSize = "xx-large";
document.getElementById("fare_required").style.fontWeight = "900";

}
*/
