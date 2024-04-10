function toggleOverlay1() {
    const overlay = document.getElementById('translucentOverlay1');
    const arrowIcon = document.getElementById('arrowIcon1');
    const image = document.getElementById('mainImage');
    const downArrow = document.getElementById('downarrow1');
    const descriptionText = document.getElementById('descriptionText1');

    if (overlay.style.height === '20%') {
      overlay.style.height = '100%';
      image.classList.add('flipped1');
      document.getElementById('title1').style.opacity = 0;
      descriptionText.style.display = 'block';
      fadeIn(descriptionText, 0);
      document.getElementById('knowMore1').style.opacity = 0;
      arrowIcon.style.opacity = 0;
      downArrow.style.display = 'block';
    } 
	else {
     
      overlay.style.height = '20%';
	  image.classList.remove('flipped1');
      document.getElementById('title1').style.opacity = 1;
      descriptionText.style.display = 'none';
      document.getElementById('knowMore1').style.opacity = 1;
      arrowIcon.style.opacity = 1;
      downArrow.style.display = 'none';
	  
  }
}


  function toggleOverlay2() {
    const overlay = document.getElementById('translucentOverlay2');
    const arrowIcon = document.getElementById('arrowIcon2');
    const image = document.getElementById('mainImage2');
    const downArrow = document.getElementById('downarrow2');
    const descriptionText = document.getElementById('descriptionText2');

    if (overlay.style.height === '20%') {
      overlay.style.height = '100%';
      image.classList.add('flipped1');
      document.getElementById('title2').style.opacity = 0;
      descriptionText.style.display = 'block';
      fadeIn(descriptionText, 0);
      document.getElementById('knowMore2').style.opacity = 0;
      arrowIcon.style.opacity = 0;
      downArrow.style.display = 'block';
    } 
	else {
     
      overlay.style.height = '20%';
	    image.classList.remove('flipped1');
      document.getElementById('title2').style.opacity = 1;
      descriptionText.style.display = 'none';
      document.getElementById('knowMore2').style.opacity = 1;
      arrowIcon.style.opacity = 1;
      downArrow.style.display = 'none';
	  
    }
  }

  function toggleOverlay3() {
    const overlay = document.getElementById('translucentOverlay3');
    const arrowIcon = document.getElementById('arrowIcon3');
    const image = document.getElementById('mainImage3');
    const downArrow = document.getElementById('downarrow3');
    const descriptionText = document.getElementById('descriptionText3');

    if (overlay.style.height === '20%') {
      overlay.style.height = '100%';
      image.classList.add('flipped1');
      document.getElementById('title3').style.opacity = 0;
      descriptionText.style.display = 'block';
      fadeIn(descriptionText, 0);
      document.getElementById('knowMore3').style.opacity = 0;
      arrowIcon.style.opacity = 0;
      downArrow.style.display = 'block';
    } 
	else {
     
      overlay.style.height = '20%';
	    image.classList.remove('flipped1');
      document.getElementById('title3').style.opacity = 1;
      descriptionText.style.display = 'none';
      document.getElementById('knowMore3').style.opacity = 1;
      arrowIcon.style.opacity = 1;
      downArrow.style.display = 'none';
	  
    }
  }


  function toggleOverlay4() {
    const overlay = document.getElementById('translucentOverlay4');
    const arrowIcon = document.getElementById('arrowIcon4');
    const image = document.getElementById('mainImage4');
    const downArrow = document.getElementById('downarrow4');
    const descriptionText = document.getElementById('descriptionText4');

    if (overlay.style.height === '20%') {
      overlay.style.height = '100%';
      image.classList.add('flipped1');
      document.getElementById('title4').style.opacity = 0;
      descriptionText.style.display = 'block';
      fadeIn(descriptionText, 0);
      document.getElementById('knowMore4').style.opacity = 0;
      arrowIcon.style.opacity = 0;
      downArrow.style.display = 'block';
    } 
	else {
     
      overlay.style.height = '20%';
	    image.classList.remove('flipped1');
      document.getElementById('title4').style.opacity = 1;
      descriptionText.style.display = 'none';
      document.getElementById('knowMore4').style.opacity = 1;
      arrowIcon.style.opacity = 1;
      downArrow.style.display = 'none';
	  
    }
  }

  function fadeIn(element, opacity) {
    let interval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }