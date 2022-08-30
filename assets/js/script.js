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

async function getUsers() {
  let url = 'assets/js/data.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = '';
  users.forEach(user => {
      let htmlSegment = `<div class="user">
                          <img src="${user.profileURL}" >
                          <h2>${user.firstName} ${user.lastName}</h2>
                          <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

function checkFares(users) {
  return users.gender === "Female" && users.username === "jane";
}

async function searchUsers() {
  const users = await getUsers();
  const result = users.filter(checkFares);
  console.log(result);
  /*for (let user of users) {
    if (user.gender === "Female" && user.username === "jane"){
      console.log(user.email);
    }

  }*/
 
}

//renderUsers();

searchUsers();