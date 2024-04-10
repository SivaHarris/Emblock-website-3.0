  
  let currentSlide = 1;

  function showSlide(n) {
    const slides = document.getElementsByClassName('slides');
    const circles = document.getElementsByClassName('circle');

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      circles[i].classList.remove('itsactive');
    }

    slides[n - 1].style.display = 'block';
    circles[n - 1].classList.add('itsactive');
  }

  function changeSlide(n) {
    currentSlide += n;

    if (currentSlide < 1) {
      currentSlide = 3;
    } else if (currentSlide > 3) {
      currentSlide = 1;
    }

    showSlide(currentSlide);
  }

  // Initial display
  showSlide(currentSlide);


    function toggleSwitch() {
        var switchBox = document.querySelector('.switch-box');
        var circle = document.querySelector('.switch-circle');
        var offText = document.querySelector('.text.off');
        var onText = document.querySelector('.text.on');
        var lampshade = document.querySelector('.lampshade')
        var lampellipse =document.querySelector('.light-ellipseglow')
        

        if(circle.style.left === '7px')
        {
            circle.style.left = '110px';
            offText.style.opacity = '0';
            onText.style.opacity = '1';
            switchBox.classList.remove('non-active');
            switchBox.classList.add('itsactive');
            lampshade.style.opacity = '1';
            lampellipse.style.opacity = '0.95';
        }
        else{
            circle.style.left = '7px';
            offText.style.opacity = '1';
            onText.style.opacity = '0';
            switchBox.classList.remove('itsactive');
            switchBox.classList.add('non-active');
            lampshade.style.opacity = '0';
            lampellipse.style.opacity = '0';
        }

        
    }

    function changeStopColor(color) {
      // Find the stop element by ID
      var stopElement0 = document.getElementById('stop0');
      var stopElement1 = document.getElementById('stop1');
      
      stopElement0.style.stopColor = color;
      stopElement1.style.stopColor = color;
    }

    function updateOpacity(value) {
      // Update the stop-opacity property for each stop
      document.getElementById('stop0').style.stopOpacity = value;
      
      
    }
  
    function showrelaxlight(){
        var activeclicker1 = document.getElementById('active-clicker1');
        var activeclicker2 = document.getElementById('active-clicker2');
        var activeclicker3 = document.getElementById('active-clicker3');
        var clicker1 = document.getElementById('clicker1');
        var relaxlighting =document.getElementById('relax-lighting');
        var partylighting = document.getElementById('party-lighting');
        var studylighting = document.getElementById('study-lighting');

        activeclicker1.style.opacity = '1';
        activeclicker2.style.opacity = '0';
        activeclicker3.style.opacity = '0';
        relaxlighting.style.opacity = '1';
        partylighting.style.opacity = '0';
        studylighting.style.opacity = '0';

        
    }

    function showpartylight(){
        var activeclicker1 = document.getElementById('active-clicker1');
        var activeclicker2 = document.getElementById('active-clicker2');
        var activeclicker3 = document.getElementById('active-clicker3');
        var clicker1 = document.getElementById('clicker1');
        var relaxlighting =document.getElementById('relax-lighting');
        var partylighting = document.getElementById('party-lighting');
        var studylighting = document.getElementById('study-lighting');

        activeclicker1.style.opacity = '0';
        activeclicker2.style.opacity = '1';
        activeclicker3.style.opacity = '0';
        relaxlighting.style.opacity = '0';
        partylighting.style.opacity = '1';
        studylighting.style.opacity = '0';

        
    }

    function showstudylight(){
        var activeclicker1 = document.getElementById('active-clicker1');
        var activeclicker2 = document.getElementById('active-clicker2');
        var activeclicker3 = document.getElementById('active-clicker3');
        var clicker1 = document.getElementById('clicker1');
        var relaxlighting =document.getElementById('relax-lighting');
        var partylighting = document.getElementById('party-lighting');
        var studylighting = document.getElementById('study-lighting');

        activeclicker1.style.opacity = '0';
        activeclicker2.style.opacity = '0';
        activeclicker3.style.opacity = '1';
        relaxlighting.style.opacity = '0';
        partylighting.style.opacity = '0';
        studylighting.style.opacity = '1';

        
    }

    showrelaxlight();
