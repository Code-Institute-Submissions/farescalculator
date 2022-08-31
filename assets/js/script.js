// Wait for the DOM to finish loading before populating the selects
// Then populate some of the selects with defaults.
document.addEventListener("DOMContentLoaded", function () {

  populateSelects("direction");
  populateSelects("pickup", 1);
  populateSelects("passenger");
  populateSelects("ticket");

});

/**
 * The main populating function, called when the popup is first loaded and loads default direction.
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
    case 'passenger':
      renderPassenger();
      break;
    case 'ticket':
      renderTicket();
      break;
    default:
      alert("Error no select provided. Scratch head as this should never happen!");
  }
}

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

  let dirUrl = 'assets/js/directiondata.json';
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
  let pickUrl = "";
  //Check which direction the user wished to travel
  if (myDirection === 1) {
    pickUrl = 'assets/js/clondata.json';
  } else if (myDirection === 2) {
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
  let dropUrl = "";
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
  const filteredDrops = drops.filter(drop => parseInt(drop.value) > myPickupPoint);

  filteredDrops.forEach(drop => {
    let htmlSegment = ` <option value=${drop.value}>
                          ${drop.ppoint}
                          </option>`;

    dropHtml += htmlSegment;
  });

  let dropoptions = document.querySelector('.dropoptions');
  dropoptions.innerHTML = dropHtml;
}

/**
 * The Passenger select populating function.
 * This loops through the object returned from our fetchJson.
 * This loop then builds the html to populate the select name="passenger" in Calulate fares Form.
 */
async function renderPassenger() {

  let passUrl = 'assets/js/passdata.json';
  let passengers = await fetchJson(passUrl);
  let passHtml = '';
  passengers.forEach(passenger => {
    let htmlSegment = ` <option value=${passenger.value}>
                          ${passenger.passenger}
                          </option>`;

    passHtml += htmlSegment;
  });
  let passengeroptions = document.querySelector('.passengeroptions');
  passengeroptions.innerHTML = passHtml;
}

/**
 * The Passenger select populating function.
 * This loops through the object returned from our fetchJson.
 * This loop then builds the html to populate the select name="passenger" in Calulate fares Form.
 */
async function renderTicket() {

  let tickUrl = 'assets/js/tickdata.json';
  let tickets = await fetchJson(tickUrl);
  let tickHtml = '';
  tickets.forEach(ticket => {
    let htmlSegment = ` <option value=${ticket.value}>
                          ${ticket.ticket}
                          </option>`;

    tickHtml += htmlSegment;
  });
  let ticketoptions = document.querySelector('.ticketoptions');
  ticketoptions.innerHTML = tickHtml;
}

/**
 * The Fares Calculation Parameter gathering function.
 * This checks that all the selects have a value.
 * This then passes the parameters to the calculateFares function
 * This function then outputs the fare to the name = "fare"
 */
function calculateForm() {
  
   //Direction
   let direction = document.getElementById("direction");
   let value1 = direction.options[direction.selectedIndex].value;
  
  //Pick Up Point
  let pickup = document.getElementById("pickup");
  let value2 = pickup.options[pickup.selectedIndex].value;
  
  //Drop Off Point
  let dropOff = document.getElementById("dropoff");
  let value3= dropOff.options[dropOff.selectedIndex].value;
  
  //Passenger
  let passenger = document.getElementById("passenger");
  let value4 = passenger.options[passenger.selectedIndex].value;
  
  //Ticket
  let ticket = document.getElementById("ticket");
  let value5 = ticket.options[ticket.selectedIndex].value;
  
  let fareCalc = calculateFares(value1, value2, value3, value4, value5);

  let returnText =`Travelling ${fareDirection}${freqTicket} for ${catPerson} from ${pickPoint} to ${destPoint} is ${myFare}`
  document.getElementById("fare_required").innerHTML = fareCalc;
  document.getElementById("fare_required").style.fontSize = "xx-large";
  document.getElementById("fare_required").style.fontWeight = "900";

  }

/*

 function calculateFares(fareDirection, farePick, fareDrop, farePassenger, fareTicket) {
  let fareArray = []; 
    
  let myFare = "€14.00"; 
  
  return myFare; 
}
 
function checkFares(users) {
  return users.gender === "Female" && users.username === "jane";
}

async function searchUsers() {
  const users = await getUsers();
  const result = users.filter(checkFares);
  console.log(result);
  
}
*/

// Handle all the modal stuff for the popup

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
  populateSelects('pickup', parseInt(event.target.value));

});

selectPickupPoint.addEventListener('change', function handleChange(event) {
  // The user has selected a Pickup Point. Now populate the Drop off Point select with the appropriate json
  populateSelects('dropoff', parseInt(event.target.value));

});

form.addEventListener('submit', (event) => {
  event.preventDefault();
});