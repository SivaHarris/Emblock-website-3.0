document.addEventListener("DOMContentLoaded", function() {
    const contentContainer = document.querySelector('.content-container');
    const prevButton = document.querySelector('.pre');
    const nextButton = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.indicators');
    const buttonContainer = document.querySelector('.but-container');
    let currentIndex = 0;
    let transitioning = false; // Variable to track if a transition is in progress

    // Initial display
    showContent(currentIndex);
    updateIndicators(currentIndex);

    // Show content based on index
    function showContent(index) {
        const contents = contentContainer.querySelectorAll('.slide-box-main');
        contents.forEach((content, i) => {
            if (i === index) {
                content.classList.add('active1');
            } else {
                content.classList.remove('active1');
            }
        });
    }

    // Update indicators
    function updateIndicators(index) {
        const contents = contentContainer.querySelectorAll('.slide-box-main');
        indicatorsContainer.innerHTML = ''; // Clear previous indicators
        contents.forEach((_, i) => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            if (i === index) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                if (!transitioning) {
                    currentIndex = i;
                    transitionContent(currentIndex);
                }
            });
            indicatorsContainer.appendChild(indicator);
        });
    }

    

    // Function to handle content transition
// Function to handle content transition
function transitionContent(index) {
transitioning = true;
contentContainer.querySelector('.active1').style.opacity = '0'; // Set opacity to 0 for current active slide

// Apply brightness animation to the background SVG
const bgBlur = document.querySelector('.bg-blur');
bgBlur.style.animation = 'changeBrightness 2s ease';

setTimeout(() => {
    showContent(index);
    contentContainer.querySelector('.active1').style.opacity = '1'; // Set opacity back to 1 for next active slide
    transitioning = false;

    // Remove animation after it finishes
    bgBlur.style.animation = 'none';
}, 1500); // Wait for 0.5 seconds before showing the next slide
updateIndicators(index);
}



    prevButton.addEventListener('click', function() {
        if (!transitioning) {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : contentContainer.querySelectorAll('.slide-box-main').length - 1;
            transitionContent(currentIndex);
        }
    });


    nextButton.addEventListener('click', function() {
        if (!transitioning) {
            currentIndex = (currentIndex < contentContainer.querySelectorAll('.slide-box-main').length - 1) ? currentIndex + 1 : 0;
            transitionContent(currentIndex);
        }
    });

});
