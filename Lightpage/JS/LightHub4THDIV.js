let auto=document.querySelector(".switch-aut");
let manual=document.querySelector(".switch-man");
let aut_txt=document.querySelector(".switch-aut h3");
let man_txt=document.querySelector(".switch-man h3");
let box1=document.querySelector(".LightHub-dg-box-1");
let box2=document.querySelector(".LightHub-dg-box-2");
let box3=document.querySelector(".LightHub-dg-box-3");
let swt=document.querySelector(".switch-over");
let swt2=document.querySelector(".switch-over-2");
let arrow1=document.querySelector(".arrow11");
let arrow2=document.querySelector(".arrow2");
let click=document.querySelector(".click-on-info-11");
let drag=document.querySelector(".click-drag-info");
let image=document.querySelector(".dragimg");

auto.addEventListener('click',function() {
  aut_txt.style.color="#fff";
  auto.style.backgroundColor='#004596';
  man_txt.style.color='#000';
  manual.style.backgroundColor='#ccc';
  box1.style.display='flex';
  box2.style.display='none';
  box3.style.display='none';
  lightHubDgBox1.querySelector('.Light-info-3').style.animation = 'none';
  lightHubDgBox1.querySelector('.Light-info-4').style.animation = 'none';

})

manual.addEventListener('click',function() {
  if(arrow1.style.display==='block'){
    arrow1.style.display='block';
  click.style.display='block';
  arrow2.style.display='none';
  drag.style.display='none';
  }
  else{
    arrow1.style.display='none';
  click.style.display='none'
  arrow2.style.display='block';
  drag.style.display='block';

  }
  aut_txt.style.color="#000";
  auto.style.backgroundColor='#ccc';
  man_txt.style.color='#fff';
  manual.style.backgroundColor='#004596';
  box1.style.display='none';
  box2.style.display='none';
  box3.style.display='flex';
})

swt.addEventListener('click',function() {
  if(arrow1.style.display==='block'){
  box1.style.display='none';
  box2.style.display='flex';
  box3.style.display='none';
  }

})

swt2.addEventListener('click',function() {
  box1.style.display='none';
  box2.style.display='none';
  box3.style.display='flex';

})








const lightHubDgBox1 = document.querySelector('.LightHub-dg-box-1');
const lightHubBenContainer = document.querySelector('.LightHub-ben-container');

lightHubDgBox1.addEventListener('mouseenter', function () {
    lightHubBenContainer.classList.add('hovered');
    lightHubDgBox1.querySelector('.Light-info-3').style.animation = 'move1 1.5s ease forwards';
    lightHubDgBox1.querySelector('.Light-info-4').style.animation = 'move2 1.5s ease forwards';
});

lightHubDgBox1.addEventListener('mouseleave', function () {

    lightHubBenContainer.classList.remove('hovered');
    lightHubDgBox1.querySelector('.Light-info-3').style.animation = 'move1-out 1.5s ease forwards';
    lightHubDgBox1.querySelector('.Light-info-4').style.animation = 'move2-out 1.5s ease forwards';
});





document.addEventListener("DOMContentLoaded", function() {
  var dragImage = document.getElementById('dragImage');
  var container = document.getElementById('container');

  var offsetY;
  var initialTop;

  dragImage.addEventListener('mousedown', startDrag);

  function startDrag(event) {
      event.preventDefault();

      offsetY = event.clientY - dragImage.getBoundingClientRect().top;
      initialTop = event.clientY - offsetY;

      document.addEventListener('mousemove', moveImage);
      document.addEventListener('mouseup', stopDrag);
  }

  function moveImage(event) {
      event.preventDefault();

      var newPosition = event.clientY - offsetY - container.getBoundingClientRect().top;
      newPosition = Math.min(Math.max(newPosition, 0), container.clientHeight - dragImage.clientHeight);

      dragImage.style.top = newPosition + 'px';
  }

  function stopDrag(event) {
document.removeEventListener('mousemove', moveImage);
document.removeEventListener('mouseup', stopDrag);

if (event.clientY - container.getBoundingClientRect().top <= container.clientHeight * 0.2) {
    // If the mouse is within the top 20% of the container
    dragImage.style.top = '0%';
    arrow1.style.display = 'block';
    click.style.display = 'block';
    arrow2.style.display = 'none';
    drag.style.display = 'none';
    
    // Show arrow 1 and click on info text, hide arrow 2 and click drag info

} else {
    // Otherwise, return the image to its initial position
    dragImage.style.top = '80%';
    arrow1.style.display = 'none';
    click.style.display = 'none';
    arrow2.style.display = 'block';
    drag.style.display = 'block';
}
}
});