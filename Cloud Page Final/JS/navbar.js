
var hamburgerList = ['hamburger', 'hamburgerBack'];
function navHamburger(element) {
    hamburgerList.forEach(ele => {
        if (ele == element.id) {
            document.getElementById(ele).style.display = "none";
        }
        else {
            document.getElementById(ele).style.display = "block";
        }
    });
}
var home = document.getElementById('homeli');
var services = document.getElementById('servicesli');
var products = document.getElementById('productsli');
var contactus = document.getElementById('contactusli');
var servicesToggle = true;
var productsToggle = true;
var sT = true;
var pT = true;
function productsMToggle() {
    if (window.innerWidth <= 990) {
        // products.classList.remove('dropdownProducts');
        if (productsToggle) {
            contactus.style.display = "none";
            document.querySelector('.productsDrop').style.display = "flex";
            productsToggle = false;
        }
        else {
            contactus.style.display = "flex";
            document.querySelector('.productsDrop').style.display = "none";
            productsToggle = true;
        }
    }
    else {
        if (pT) {
            document.querySelector('.dropdownProducts').style.display = "flex";
            pT = false;
            document.querySelector('.dropdownServices').style.display = "none";
            sT = true;
        }
        else {
            document.querySelector('.dropdownProducts').style.display = "none";
            pT = true;
        }
    }
}
function servicesMToggle() {
    if (window.innerWidth <= 990) {
        if (servicesToggle) {
            products.style.display = "none";
            contactus.style.display = "none";
            document.querySelector('.servicesDrop').style.display = "flex";
            servicesToggle = false;
        }
        else {
            products.style.display = "flex";
            contactus.style.display = "flex";
            document.querySelector('.productsDrop').style.display = "none";
            document.querySelector('.servicesDrop').style.display = "none";
            productsToggle = true;
            servicesToggle = true;
        }
    }
    else {
        if (sT) {
            document.querySelector('.dropdownServices').style.display = "flex";
            sT = false;
            document.querySelector('.dropdownProducts').style.display = "none";
            pT = true;
        }
        else {
            document.querySelector('.dropdownServices').style.display = "none";
            sT = true;
        }
    }
}   