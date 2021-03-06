//Nav bar//
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.menu')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//resizing//
window.onresize = () => {if (window.innerWidth > 468) mainnav.classList.remove('responsive')};

//get the date//
const thedate = new Date();
let year = thedate.getFullYear();
document.getElementById("year").textContent = year;

const lastModDate = new Date(document.lastModified);
let strLMD = + lastModDate.getMonth()+1 + "/" + lastModDate.getDate() + "/" 
           + lastModDate.getFullYear() + " " + lastModDate.getHours() + ":" 
           + lastModDate.getMinutes() + ":" + lastModDate.getSeconds();
document.getElementById("lastUpdate").textContent = strLMD;

if (thedate.getDay() == 5) {
    document.querySelector('.announcement').style.display = 'block';
}

var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

