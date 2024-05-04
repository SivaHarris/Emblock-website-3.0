

// division 1 js



let pwrBtn = document.querySelector(".rmtHandlingHomeCtrPwrText");
let bgColorLayer = document.querySelector(".rmtHandlingHomeCtrColorLayer");
let pwrLogo = document.querySelector(".rmtHandlingHomeCtrPwrLogo");
let pwrText = document.querySelector(".rmtHandlingHomeCtrPwrText");
let movgText = document.querySelector(".rmtHandlingHomeCtrTxtSection");
let movCtr = document.querySelector(".rmtHandlingHomeCtrPwrCtr");
pwrBtn.addEventListener("click", () => {
  if (bgColorLayer.classList.contains("turnOnPos")) {
    bgColorLayer.classList.remove("turnOnPos");
    pwrBtn.textContent = "Turn ON";
    pwrBtn.style.color = "#7e7e7e";
    pwrLogo.classList.remove("turnOnPos");
    movgText.classList.remove("turnOnPos");
    movCtr.classList.remove("turnOnPos");
    movCtr.style.animation="shake2 0.8s ease 0.7s"
  } else {
    bgColorLayer.classList.add("turnOnPos");
    pwrBtn.textContent = "Turn OFF";
    pwrBtn.style.color = "#c6c0c0";
    pwrLogo.classList.add("turnOnPos");
    movgText.classList.add("turnOnPos");
    movCtr.classList.add("turnOnPos");
    movCtr.style.animation="shake1 0.8s ease 0.7s"
  }
});
//onClick for logo
pwrLogo.addEventListener("click", () => {
  if (bgColorLayer.classList.contains("turnOnPos")) {
    bgColorLayer.classList.remove("turnOnPos");
    pwrBtn.textContent = "Turn ON";
    pwrBtn.style.color = "#7e7e7e";
    pwrLogo.classList.remove("turnOnPos");
    movgText.classList.remove("turnOnPos");
    movCtr.classList.remove("turnOnPos");
    movCtr.style.animation="shake2 0.8s ease 0.7s"
  } else {
    bgColorLayer.classList.add("turnOnPos");
    pwrBtn.textContent = "Turn OFF";
    pwrBtn.style.color = "#c6c0c0";
    pwrLogo.classList.add("turnOnPos");
    movgText.classList.add("turnOnPos");
    movCtr.classList.add("turnOnPos");
    movCtr.style.animation="shake1 0.8s ease 0.7s"
  }
});


const button = document.querySelector('.rmtHandlingHomeCtrPwrCtr div');


button.classList.add('shake');


setTimeout(() => {
  button.classList.remove('shake');
}, 2000); 




// Second division js

function changeOpacity() {
    // Get the gif image element
    var gifImage = document.getElementById('gifImage2');
    var divImage = document.getElementById('gifImage1');
    var circle = document.getElementById('circle');
    var offtext = document.getElementById('OFF');
    var ontext = document.getElementById('ON');
    var onswap = document.getElementById('on-swap');
    var offswap = document.getElementById('off-swap');

          
          

          if (gifImage.style.display === 'none') {
              gifImage.style.display = 'block';
              divImage.style.display='none';
              circle.style.backgroundColor = '#96002D';
              ontext.style.opacity = '0';
              offtext.style.opacity= '1';
              onswap.style.color= '#928B8B';
              offswap.style.color= 'black';

          } else {
              gifImage.style.display = 'none';
              divImage.style.display='block';
              circle.style.backgroundColor= '#11606D';
              ontext.style.opacity = '1';
              offtext.style.opacity= '0';
              onswap.style.color= 'black';
              offswap.style.color= '#928B8B';
          }
  }


// Third division script

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}


