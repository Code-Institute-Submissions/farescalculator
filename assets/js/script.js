const url = document.location.href;
const lastSegment = url.substring(url.lastIndexOf("/") + 1);
  
  // Wait for the DOM to finish loading before populating the selects
  // Then populate some of the selects with defaults.
  document.addEventListener("DOMContentLoaded", function () {

  //This is for single html only
   
if (lastSegment === 'single.html') { 

    populateSelects("direction", 1);
    populateSelects("pickup", 1);
    populateSelects("dropoff", 1, 1);
    populateSelects("passenger", 1);
    populateSelects("ticket", 1);

}

  });

/**
 * The main populating function, called when the popup is first loaded and loads default direction.
 * This populates the dropdown selects from json files.
 * This function is also called in response to event listeners catching user interaction with selects on form.
 */
function populateSelects(mySelect, myOption, myPicks) {
  switch (mySelect) {
    case 'direction':
      renderDirection(myOption);
      break;
    case 'pickup':
      renderPickupPoint(myOption);
      break;
    case 'dropoff':
      renderDropPoint(myOption, myPicks);
      break;
    case 'passenger':
      renderPassenger(myOption);
      break;
    case 'ticket':
      renderTicket(myOption);
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
 * This loop then builds the html to populate the select name="direction" in Calculate fares Form.
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
 * This loop then builds the html to populate the select name="pickup" in Calculate fares Form.
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
 * This loop then builds the html to populate the select name="dropoff" in Calculate fares Form.
 * This function also ensures the available option in dropoff will not precede the pickup point in travelling in the selected.
 */
async function renderDropPoint(myDirection, myPickupPoint) {
  let dropUrl = "";
  //Check which direction the user wished to travel
  if (myDirection === 1) {
    dropUrl = 'assets/js/clondata.json';
  } else if (myDirection === 2) {
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
 * This loop then builds the html to populate the select name="passenger" in Calculate fares Form.
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
 * The Ticket select populating function.
 * This loops through the object returned from our fetchJson.
 * This loop then builds the html to populate the select name="ticket" in Calculate fares Form.
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
function formParameters() {

  //Direction
  let direction = document.getElementById("direction");
  let value1 = parseInt(direction.options[direction.selectedIndex].value);
  let text1 = direction.options[direction.selectedIndex].text;

  //console.log(value1);
  //console.log(text1);

  //Pick Up Point
  let pickup = document.getElementById("pickup");
  let value2 = parseInt(pickup.options[pickup.selectedIndex].value);
  let text2 = pickup.options[pickup.selectedIndex].text;

  //Drop Off Point
  let dropOff = document.getElementById("dropoff");
  let value3 = parseInt(dropoff.options[dropoff.selectedIndex].value);
  let text3 = dropoff.options[dropoff.selectedIndex].text;

  //Passenger
  let passenger = document.getElementById("passenger");
  let value4 = parseInt(passenger.options[passenger.selectedIndex].value);
  let text4 = passenger.options[passenger.selectedIndex].text;

  //Ticket
  let ticket = document.getElementById("ticket");
  let value5 = parseInt(ticket.options[ticket.selectedIndex].value);
  let text5 = ticket.options[ticket.selectedIndex].text;

  let fareCalc = calculateFares(value1, text1, value2, text2, value3, text3, value4, text4, value5, text5);

}

/**
 * The Fares Calculation function.
 * This calculates the appropriate fare based on the provided parameters.
 * This function checks the fares json file for the fare satisfying the parameters.
 * It then returns that fare value.
 */
async function calculateFares(fareDirection, fareDirectionText, farePick, farePickText, fareDrop, fareDropText, farePassenger, farePassengerText, fareTicket, fareTicketText) {
  let fareUrl = ""
  //Which direction are we travelling?
  if (fareDirection === 1) {
    fareUrl = 'assets/js/clonfaredata.json';
  } else if (fareDirection === 2) {
    fareUrl = 'assets/js/kinsalefaredata.json';
  } else {
    alert("Error with Fares Calculation no Direction provided. Scratch head as this should never happen!");
  }
  let getFares = await fetchJson(fareUrl);
  const fares = getFares.filter(checkFares); //Get a subset of fares that match the provided parameters

  //Prepare the key that you wish to get the value of
  const farePText = farePassengerText.toLowerCase(); //First part of key
  const fareTText = fareTicketText.split(' ')[0];
  const fareTTextLower = fareTText.toLowerCase(); //Second part of key
  const fareSearch = farePText.concat("_", fareTTextLower); //Key

  //Use the key to get the value
  let correctFare = ""
  try {
    correctFare = fares[0][fareSearch];
    //Now we have the Fare Tell the user what it is
    let returnText = `From ${farePickText}<br>to ${fareDropText}<br>${farePassengerText} ${fareTicketText}<br>will cost ${correctFare} euro.`
    document.getElementById("fare").innerHTML = returnText;
    document.getElementById("fare").style.fontSize = "large";
    document.getElementById("fare").style.fontWeight = "900";
  } catch (err) {
    document.getElementById("fare").innerHTML = "Fare not Found";
  }
}

/**
 * The Fares Filter function.
 * This function filters the returned json object to the specified parameters.
 */
function checkFares(fares) {
  const farePick = pickup.options[pickup.selectedIndex].value
  const fareDrop = dropoff.options[dropoff.selectedIndex].value
  return fares.pick === farePick && fares.drop === fareDrop;
}

/**
 * The Swap Direction function.
 * This function swaps direction on the timetable page.
 */
function swapDirection() {
  let outward = document.getElementById("outgoing");
  let inward = document.getElementById("incoming");
  if (outward.style.display === "none") {
    outward.style.display = "block";
    inward.style.display = "none";
  } else {
    outward.style.display = "none";
    inward.style.display = "block";
  }

}

//Set up event listeners on form
const form = document.getElementById('form_fares');

const selectdirection = document.getElementById('direction');

const selectPickupPoint = document.getElementById('pickup');

 //This is for single html only
   
 if (lastSegment === 'single.html') { 
  selectdirection.addEventListener('change', function handleChange(event) {
    // The user has selected a direction. Now populate the Pickup Point select with the appropriate json
    populateSelects('pickup', parseInt(event.target.value));
    if (parseInt(event.target.value) === 1) {
      populateSelects('dropoff', parseInt(event.target.value), 1);
    } else if (parseInt(event.target.value) === 2) {
      populateSelects('dropoff', parseInt(event.target.value), 21);
    }
  });

}

 //This is for single html only
   
if (lastSegment === 'single.html') { 
  selectPickupPoint.addEventListener('change', function handleChange(event) {
    // The user has selected a Pickup Point. Now populate the Drop off Point select with the appropriate json
    populateSelects('dropoff', parseInt(direction.options[direction.selectedIndex].value), parseInt(event.target.value));

  });

}