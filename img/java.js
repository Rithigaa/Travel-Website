const header =-document.querySelector("header");

 window.addEventlistener ("scroll", function(){
header.classlist.toggle ("sticky", this.window.scrolly > 0)
 });

 function sendMessage() {
    // Fetch values from the form fields
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var duration = document.getElementById("duration").value;
    var num_person = document.getElementById("num_person").value;
    var destination = document.getElementById("destination").value;
  
    // Compose the WhatsApp message
    var whatsappMessage = "Name: " + name + "\nPlace: " + place + "\nDuration: " + duration + "\nNumber of Person: " + num_person + "\nDestination: " + destination;
  
    // Encode the message to be used in the URL
    var encodedMessage = encodeURIComponent(whatsappMessage);
  
    // Replace the following number with your WhatsApp number (with country code)
    var whatsappNumber = "+917012299826";
  
    // Construct the WhatsApp URL with the pre-filled message
    var whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodedMessage;
  
    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  }

let menu=document.querySelector('#menu-icon');
let navmenu=document.querySelector('.navmenu');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open')
}