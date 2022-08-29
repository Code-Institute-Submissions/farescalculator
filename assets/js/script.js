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


