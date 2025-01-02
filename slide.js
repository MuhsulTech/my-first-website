let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
 if (n > slides.length){
      slideIndex = 1
  }
 if (n < 1){
      slideIndex = slides.length
  }
 for (let i = 0; i < slides.length; i++) {
 slides[i].style.display = "none";
    }
 slides[slideIndex-1].style.display = "block";
}       

const showSkill_1 = document.getElementById('skill_1');
 const showSkill_2 = document.getElementById('skill_2');
 const showSkill_3 = document.getElementById('skill_3');
 
 const showCon1 = document.getElementById('con_1');
 const showCon2 = document.getElementById('con_2');
 const showCon3 = document.getElementById('con_3');
 
 
 showSkill_1.addEventListener('click', ()=>{
    showCon1.style.display="block";
    showCon2.style.display="none";
    showCon3.style.display="none";
    
 });
 
 showSkill_2.addEventListener('click', ()=>{
    showCon1.style.display="none";
    showCon2.style.display="block";
    showCon3.style.display="none";
 });
  
 showSkill_3.addEventListener('click', ()=>{
    showCon1.style.display="none";
    showCon2.style.display="none";
    showCon3.style.display="block";
 });
 
 
 
 
