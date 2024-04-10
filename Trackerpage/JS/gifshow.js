function showInfo(Clickedoption,option) {
    // Reset GIF container's position and opacity
    const gifContainer = document.querySelector('.gif-container');
    const gifImage = gifContainer.querySelector('.gif');
    
    setTimeout(() => {
        gifImage.style.opacity = 0;
        gifContainer.style.opacity = 0;
      }, 100);
    
      setTimeout(() => {
        gifContainer.style.right = '-100%';
      }, 1000);
    

      document.querySelectorAll('.types-list').forEach(option => {
        option.classList.remove('clicked');
      });

      // Add 'clicked' class to the clicked option
      Clickedoption.classList.add('clicked');


    // Customize the description, points, and gif for each option as needed
    let description = '';
    let points = '';
    let gifUrl = '';
    let head = '';

    if (option === 'Option 1') {
      head = 'Fingerprint Recognition';
      description = 'Say goodbye to traditional methods and embrace a secure and efficient solution. Our system ensures accurate and reliable attendance data by uniquely identifying individuals through their fingerprints.';
      points = ['Biometric Precision', 'Enhanced Security', 'Streamlined Process'];
      gifUrl = './IMAGES/fingerprint.gif';
    } else if (option === 'Option 2') {
      head = 'Facial Recognition';
      description = 'Transform attendance tracking with facial recognition, offering a secure and efficient alternative to traditional methods. This innovative sets a new standard for modern attendance management.';
      points = ['Accuracy and Reliability', 'Privacy and Ethical Concerns', 'Applications and Controversies'];
      gifUrl = './IMAGES/facerecog.gif';
    } else if (option === 'Option 3') {
      head = 'Iris Recognition';
      description = 'Iris recognition offers precise attendance tracking by analyzing unique iris patterns. Its accuracy and non-intrusive nature make it an ideal solution for diverse settings, ensuring efficient management while prioritizing user privacy.';
      points = ['High Accuracy', 'Non-intrusive and Hygienic', 'Unique and Secure'];
      gifUrl = './IMAGES/Irisrecog.gif';
    } else if (option === 'Option 4') {
      head = 'Radio Frequency Identification';
      description = 'RFID (Radio Frequency Identification) technology enables automatic identification and tracking of objects using tags and readers. It finds diverse applications across industries, facilitating inventory management, access control, and asset tracking.';
      points = ['Automatic Identification', 'Versatile Applications', 'Efficiency and Accuracy'];
      gifUrl = './IMAGES/RFID.gif';
    }

    // Update the content of the info div
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
      <h1 class="info-head">${head}</h1>
      <p class="description">${description}</p>
      <ul class="points">${points.map(point => `<li>${point}</li>`).join('')}</ul>
    `;

    // Trigger the description to appear slowly
    const descriptionDiv = infoDiv.querySelector('.description');
    const headDiv = infoDiv.querySelector('.info-head');
    setTimeout(() => {
      descriptionDiv.style.opacity = 1;
      headDiv.style.opacity =1;

    }, 100);

    // Trigger the points to appear one by one with a sliding-in effect
    const pointsList = infoDiv.querySelector('.points');
    const pointItems = pointsList.querySelectorAll('li');

    pointItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = 'translateX(0)';
      }, 3000 + index * 1000);
    });

    // Trigger the GIF to appear with a sliding-in effect
    setTimeout(() => {
      gifImage.src = gifUrl;
      gifImage.style.opacity = 1;
      gifContainer.style.opacity=1;
      gifContainer.style.right = "-13%";
    }, 500 + (pointItems.length + 1) * 200);
  }

  document.addEventListener('scroll', function () {
    var mainDiv = document.getElementById('trackertypes');
    var mainDivbottom = mainDiv.getBoundingClientRect().bottom;
    if (mainDivbottom < window.innerHeight) {
        showInfo(document.querySelector('.types-list'), 'Option 1');
    }
  });