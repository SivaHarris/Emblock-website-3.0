setTimeout(function () {
    console.log('working');
    document.getElementById('SVShomeH1').classList.add("activeH1");
    document.getElementById('SVShomeP').classList.add("activeH1");
}, 3000);
setTimeout(function () {
    console.log('Nextworking');
    document.querySelector('.svsCamera').classList.add("Camera-fade-right");
    // document.getElementById("cam").style.display = "none";
}, 5000);
setTimeout(function () {
    console.log('off');
    document.getElementById("cam").style.display = "none";
}, 8000);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;
        var r = reveals[i];
        if (elementTop < windowHeight - elementVisible) {

            if (reveals[i].id === "afterClear") {
                setTimeout(function () {
                    r.classList.add("activeSVS");
                }, 1000);
            }
            else {
                r.classList.add("activeSVS");
            }

        } else {
            r.classList.remove("activeSVS");
        }
    }
}

window.addEventListener("scroll", reveal);