const clientWidth = document.getElementById('myDiv').clientWidth;
const clientHeight = document.getElementById('myDiv').clientHeight;
let num = 5;
var catchMe = document.getElementById('catchMeIfYouCan');

function generateRandom(previousValue) {
    let newValue = Math.floor(Math.random() * 7) + 1;
    while (newValue === previousValue) {
        newValue = Math.floor(Math.random() * 7) + 1;
    }
    num = newValue;
}
document.addEventListener("mousemove", (e) => {
    const gX = (e.clientX / clientWidth) * 100;
    const gY = (e.clientY / clientHeight) * 100;
    const lightPositions = {
        1: {
            x: 15,
            y: 23
        },
        2: {
            x: 27,
            y: 80
        },
        3: {
            x: 40,
            y: 80
        },
        4: {
            x: 32,
            y: 35
        },
        5: {
            x: 61,
            y: 70
        },
        6: {
            x: 60,
            y: 35
        },
        7: {
            x: 73,
            y: 42
        },
    };
    var gradientCenterX = lightPositions[num]['x'];
    var gradientCenterY = lightPositions[num]['y'];
    if (((gradientCenterX - 10 < gX) && (gX < gradientCenterX + 10)) && ((gradientCenterY - 10 < gY) && (gY < gradientCenterY + 10))) {
        generateRandom(num);
        gradientCenterX = lightPositions[num]['x'];
        gradientCenterY = lightPositions[num]['y'];
        if (num == 5) {
            catchMe.style.display = "block";
        }
        else {
            catchMe.style.display = "none";
        }
    }
    const revealedArea = document.querySelector(".revealed-area");
    revealedArea.style.background = `radial-gradient(
                circle 180px at ${gradientCenterX}% ${gradientCenterY}%,
                rgba(30, 30, 30, 0.6) 5%,
                rgba(0, 0, 0, 0.96)
            )`;
    // console.log("x " + e.clientX);
    // console.log("y " + e.clientY);
    // console.log("gx " + gX);
    // console.log(gradientCenterX - 10 + "<" + gX + "<" + (gradientCenterX + 10));
    // console.log((gradientCenterX - 10 < gX) && (gX < gradientCenterX + 10));
    // console.log("gy " + gY);
    // console.log(gradientCenterY - 10 + "<" + gY + "<" + (gradientCenterY + 10));
    // console.log((gradientCenterY - 10 < gY) && (gY < gradientCenterY + 10));


});
