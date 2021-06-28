
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function myfunction() {
    const x = document.getElementById("nav");
    if(x.className === 'nav-bar'){
        x.className += "  responsive";
    }
    else{
        x.className = "nav-bar";
    }
}