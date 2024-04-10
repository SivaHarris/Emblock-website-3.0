window.addEventListener('scroll', function() {
    var mainDiv = document.getElementById('future-iot');
    var slidehead = document.getElementById('slidehead');

    var mainDivTop = mainDiv.getBoundingClientRect().top;

    if (mainDivTop < window.innerHeight) {
        slidehead.classList.add('slideDown');
    } 
});
document.addEventListener('scroll', function () {
  var mainDiv = document.getElementById('future-iot');
  var slideInDiv = document.getElementById('user-exp-div');
  var slideInDiv2 = document.getElementById('oper-eff-div');

  var mainDivTop = mainDiv.getBoundingClientRect().top;
  
  function slideIn() {
    slideInDiv.style.left= "22.9%";
    slideInDiv2.style.left= "22.9%";
    
  }

  if (mainDivTop < window.innerHeight) {
    setTimeout(slideIn, 1000);
  }
});


document.addEventListener('scroll', function () {
  var mainDiv = document.getElementById('future-iot');
  var slideInDiv3 = document.getElementById('smart-city-div');
  var slideInDiv4 = document.getElementById('seam-integ-div');

  var mainDivTop = mainDiv.getBoundingClientRect().top;

  function slideIn2() {
    slideInDiv3.style.right="40.6%";
    slideInDiv4.style.right="23.1%";
  }

  if (mainDivTop < window.innerHeight) {
    setTimeout(slideIn2, 2000);
  }
});