const loader = document.querySelector(".loader");
    const content = document.querySelector(".overall-container");
    
    function loadContent() {      
      loader.style.display = "none";
      content.style.display = "block";
    }
    setTimeout(loadContent, 4000); 
    

const showNav = 
document.getElementById('show');
  const hideNav = document.getElementById('hide');
  const navCont = document.querySelector('.content');
  
showNav.addEventListener('click', ()=>{
  navCont.style.display="block";
  showNav.style.display="none";
    
});
hideNav.addEventListener('click', ()=>{
  navCont.style.display="none";
  showNav.style.display="block";
});

   const changeColor = document.getElementById('moon');
   const removeColor = document.getElementById('sun');     
   const Side = document.getElementById('sideCon');
   const Main = document.getElementById('mainCon');
   
changeColor.addEventListener('click', ()=>{
changeColor.style.display="none";
removeColor.style.display="block";

Side.style.backgroundColor="black";
Main.style.backgroundColor="black";    
}); 

removeColor.addEventListener('click', ()=>{
changeColor.style.display="block";
removeColor.style.display="none";

Side.style.backgroundColor="";
Main.style.backgroundColor="";    
}); 
function Note(){ 
alert("!!! Note that, the website is under development some features are not functional.");
}

function submitText() {
    alert("This part is under development, thank you for your attempt ");
}
