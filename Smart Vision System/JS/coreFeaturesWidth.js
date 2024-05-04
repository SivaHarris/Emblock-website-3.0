// Get all .cfgGridImg elements
const cfgGridImgs = document.querySelectorAll('.cfgGridImg');

// Iterate over each .cfgGridImg element
cfgGridImgs.forEach(cfgGridImg => {
    // Get the img element inside .cfgGridImg
    const img = cfgGridImg.querySelector('.cfgGridImg img');

    // Set the width of .LG to be equal to the width of img
    cfgGridImg.querySelector('.cfgGridImg .LG').style.width = `${img.clientWidth}px`;
});