const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

function sendQuote(e){
 e.preventDefault();

 const name=document.getElementById("name").value.trim();
 const phone=document.getElementById("phone").value.trim();
 const req=document.getElementById("req").value.trim();

 const message =
   "Hello Divyajyoti Creations,\n\n" +
   "New Website Enquiry\n" +
   "Name: " + name + "\n" +
   "Phone: " + phone + "\n" +
   "Requirement: " + req;

 const encodedMessage = encodeURIComponent(message);

 // Send the same enquiry to both Divyajyoti WhatsApp numbers.
 const whatsapp1 = "https://wa.me/919342627000?text=" + encodedMessage;
 const whatsapp2 = "https://wa.me/919035773763?text=" + encodedMessage;

 window.open(whatsapp1, "_blank");
 window.open(whatsapp2, "_blank");

 // Reset the form after opening both chats.
 e.target.reset();
}
