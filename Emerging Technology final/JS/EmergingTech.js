document.addEventListener("DOMContentLoaded", function() {
    const contentContainer = document.querySelector('.emg-slide-box');
    const prevButton = document.querySelector('.pre');
    const nextButton = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.indicators');
    const buttonContainer = document.querySelector('.but-container');
    let currentIndex = 0;

    // Initial display
    showContent(currentIndex);
    updateIndicators(currentIndex);
    updateButtonContainer(currentIndex);

    // Show content based on index
    function showContent(index) {
        const contents = contentContainer.querySelectorAll('.slide-content');
        contents.forEach((content, i) => {
            if (i === index) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }

    // Update indicators
    function updateIndicators(index) {
        const contents = contentContainer.querySelectorAll('.slide-content');
        indicatorsContainer.innerHTML = ''; // Clear previous indicators
        contents.forEach((_, i) => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            if (i === index) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                currentIndex = i;
                showContent(currentIndex);
                updateIndicators(currentIndex);
                updateButtonContainer(currentIndex);
            });
            indicatorsContainer.appendChild(indicator);
        });
    }

    // Update button container background
    function updateButtonContainer(index) {
        const contents = contentContainer.querySelectorAll('.slide-img');
        buttonContainer.style.backgroundColor = contents[index].style.backgroundColor;
    }

    // Event listener for Previous button
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = contentContainer.querySelectorAll('.slide-content').length - 1;
        }
        showContent(currentIndex);
        updateIndicators(currentIndex);
        updateButtonContainer(currentIndex);
    });

    // Event listener for Next button
    nextButton.addEventListener('click', function() {
        const totalContents = contentContainer.querySelectorAll('.slide-content').length;
        if (currentIndex < totalContents - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showContent(currentIndex);
        updateIndicators(currentIndex);
        updateButtonContainer(currentIndex);
    });

  
});