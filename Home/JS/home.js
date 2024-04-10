const textElements = ['as1', 'as2', 'as3'];
        let currentIndex = 0;
        const elements = ['vision', 'values', 'mission'];
        function fadeIn(elementId, ele) {
            const element = document.getElementById(elementId);
            console.log(ele);
            document.getElementById(ele).classList.add('visib');
            element.classList.add('visi');
        }

        function fadeOut(elementId, ele) {
            const element = document.getElementById(elementId);
            console.log(ele);
            document.getElementById(ele).classList.remove('visib');
            element.classList.remove('visi');
        }

        function animateText() {
            fadeOut(textElements[currentIndex], elements[currentIndex]);
            currentIndex = (currentIndex + 1) % textElements.length;
            fadeIn(textElements[currentIndex], elements[currentIndex]);
        }

        // Initial animation
        fadeIn(textElements[currentIndex], elements[currentIndex]);

        // Set interval to loop through animations
        setInterval(animateText, 2500);
        var firstM = document.getElementById('1m');
        var secondM = document.getElementById('2m');
        var thirdM = document.getElementById('3m');

        firstM.addEventListener('animationend', function () {
            console.log("end 1m");
            firstM.classList.remove('fall1');
            secondM.classList.add('fall2');
        });
        secondM.addEventListener('animationend', function () {
            console.log("end 2m");
            secondM.classList.remove('fall2');
            thirdM.classList.add('fall3');
        });
        thirdM.addEventListener('animationend', function () {
            console.log("end 2m");
            thirdM.classList.remove('fall3');
            firstM.classList.add('fall1');
        });


        // teams
        document.addEventListener("DOMContentLoaded", function () {
            var boxes = document.querySelectorAll('.Team-box');

            boxes.forEach(function (box) {
                box.addEventListener("mouseenter", function () {
                    console.log("hai");
                    if (!box.classList.contains('expanded')) {
                        box.classList.add('expanded');
                    }
                });

                box.addEventListener("mouseleave", function () {
                    console.log("bye");
                    if (box.classList.contains('expanded')) {
                        box.classList.remove('expanded');
                    }
                });
            });
        });