const oasContent = [
    "Turning ideas into innovation, chaos into code, and dreams into digital reality",
    "Unleashing innovation, enhancing efficiency, and shaping the future by translating ideas into functional, user-friendly digital solutions",
    "Software engineering empowers industries from healthcare to finance, entertainment to education, creating a tech-driven tapestry woven into every aspect of our lives"
]
var index = 0;
var oasp = document.getElementById('pContentAnim');
setInterval(function () {
    oasp.style.opacity = 0;
    setTimeout(function () {
        oasp.textContent = oasContent[index];
        console.log(oasContent[index]);
        oasp.style.opacity = 1;
        index = (index + 1) % oasContent.length;
    }, 500);
}, 3000); 
