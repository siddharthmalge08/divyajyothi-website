const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
function sendQuote(e){
 e.preventDefault();
 const name=document.getElementById("name").value.trim();
 const phone=document.getElementById("phone").value.trim();
 const req=document.getElementById("req").value.trim();
 const text=`Hello Divyajyoti Creations,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ARequirement: ${encodeURIComponent(req)}`;
 window.open(`https://wa.me/919342627000?text=${text}`,"_blank");
}
