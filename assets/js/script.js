// Wait for the DOM to finish loading before populating the selects
document.addEventListener("DOMContentLoaded", function () {

  populateSelects("direction", 1);

});



/**
 * The main populating function, called when the popup is first loaded and defaulting to direction.
 * This populates the dropdown selects from json files.
 * This function is also called in response to event listeners catching user interaction with selects on form.
 */
function populateSelects(mySelect, myOption) {
  switch (mySelect) {
    case 'direction':
  renderDirection();
  break;
    case 'pickup':
  renderPickupPoint(myOption); 
  break;
  case 'dropoff':
    renderDropPoint(myOption); 
    break;
  default:
  alert("Error no select provided. Scratch head as this should never happen!");
}
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
 * The Direction select populating function.
 * This loops through the object returned from our fetchJson.
 * This loop then builds the html to populate the select name="direction" in Calulate fares Form.
 */
 async function renderDirection() {
 
  let dirUrl = 'assets/js/ddata.json';
  let dirs = await fetchJson(dirUrl);
  let dirHtml = '';
  dirs.forEach(dir => {
    let htmlSegment = ` <option value=${dir.value}>
                          ${dir.direction}
                          </option>`;

    dirHtml += htmlSegment;
  });
  let directionoptions = document.querySelector('.directionoptions');
  directionoptions.innerHTML = dirHtml;
}

/**
 * The Pickup Point select populating function.
 * This loops through the object returned from our fetchJson.
 * This loop then builds the html to populate the select name="pickup" in Calulate fares Form.
 * This function reacts to the selection picked by the user in Direction select.
 */
async function renderPickupPoint(myDirection) {
  let pickUrl ="";
  //Check which direction the user wished to travel
  if (myDirection === '1') {
    pickUrl = 'assets/js/clondata.json';
  } else if (myDirection === '2') {
    pickUrl = 'assets/js/kinsaledata.json';
  } else {
    alert("Error no direction provided. Scratch head as this should never happen!");
  }
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

/**
 * The Drop off Point select populating function.
 * This loops through the object returned from our fetchJson.
 * This loop then builds the html to populate the select name="dropoff" in Calulate fares Form.
 * This function also ensures the available option in dropoff will not precede the pickup point in travelling in the selected.
 */
 async function renderDropPoint(myPickupPoint) {
  let dropUrl ="";
  //Check which direction the user wished to travel
  let selectdir = document.getElementById("direction");
  let selectdirvalue = selectdir.options[selectdir.selectedIndex].value;
  if (selectdirvalue === '1') {
    dropUrl = 'assets/js/clondata.json';
  } else if (selectdirvalue === '2') {
    dropUrl = 'assets/js/kinsaledata.json';
  } else {
    alert("Error no direction provided. Scratch head as this should never happen!");
  }
  let drops = await fetchJson(dropUrl);
  let dropHtml = '';
  //This is where it gets interesting
  //We need to only show the elements in json that are later in the journey than the Pickup Point
  drops.forEach(drop => {
    if(parseInt(drop.value) > myPickupPoint) {
      let htmlSegment = ` <option value=${drop.value}>
                          ${drop.ppoint}
                          </option>`;

    dropHtml += htmlSegment;
    }    
  });

  let dropoptions = document.querySelector('.dropoptions');
  dropoptions.innerHTML = dropHtml;
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
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}



//Set up event listeners on form
const form = document.getElementById('form_fares');

const selectdirection = document.getElementById('direction');

const selectPickupPoint = document.getElementById('pickup');

selectdirection.addEventListener('change', function handleChange(event) {
 // The user has selected a direction. Now populate the Pickup Point select with the appropriate json
  populateSelects('pickup', event.target.value);
 
});

selectPickupPoint.addEventListener('change', function handleChange(event) {
  // The user has selected a Pickup Point. Now populate the Drop off Point select with the appropriate json
   populateSelects('dropoff', parseInt(event.target.value));
  
 });


form.addEventListener('submit', (event) => {
  event.preventDefault();
});


/*





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