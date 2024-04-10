console.log("hello");
function changeColor(str) {
  //for changing color of radio boxes
  if (str == "New Project") {
    document.getElementById("newProject").style =
      "color: rgba(30, 215, 96, 1);";
  } else {
    document.getElementById("newProject").style = "color: #fff;";
  }
  if (str == "Maintenance and Support") {
    document.getElementById("maintenance").style =
      "color: rgba(30, 215, 96, 1);";
  } else {
    document.getElementById("maintenance").style = "color: #fff;";
  }
  if (str == "Add-on features") {
    document.getElementById("addOn").style = "color: rgba(30, 215, 96, 1);";
  } else {
    document.getElementById("addOn").style = "color: #fff;";
  }
  if (str == "Virtual") {
    document.getElementById("virtualInputValue").style =
      "color: rgba(30, 215, 96, 1);";
  } else {
    document.getElementById("virtualInputValue").style = "color: #fff;";
  }
  if (str == "Offline") {
    document.getElementById("offlineInputValue").style =
      "color: rgba(30, 215, 96, 1);";
  } else {
    document.getElementById("offlineInputValue").style = "color: #fff;";
  }
}
//selecting Services and products
const Services = document.querySelectorAll(
  ".landingPageServicesInputContainer div"
);
Services.forEach((div) => {
  div.addEventListener("click", () => {
    div.classList.toggle("selectedServices");
  });
});
const products1 = document.querySelectorAll(
  ".landingPageProductsInputContainer div"
);
products1.forEach((div) => {
  div.addEventListener("click", () => {
    div.classList.toggle("selectedProducts");
  });
});
//opening calendar onClick

//collecting date
function generateCalendar(year, month) {
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var firstDayOfMonth = new Date(year, month, 1).getDay();

  var calendarContainer = document.getElementById("calendarContainer");
  calendarContainer.innerHTML = ""; // Clear previous calendar

  var dateElement = document.createElement("div");
  dateElement.classList.add("date");
  calendarContainer.appendChild(dateElement);

  // Add empty cells for the days before the first day of the month
  for (var i = 0; i < firstDayOfMonth; i++) {
    dateElement.appendChild(document.createElement("span"));
  }

  // Add days of the month
  for (var i = 1; i <= daysInMonth; i++) {
    var dayElement = document.createElement("span");
    dayElement.textContent = i;
    dayElement.onclick = function () {
      var clickedDate = new Date(year, month, parseInt(this.textContent));
      getDate(clickedDate.toDateString());
    };
    dateElement.appendChild(dayElement);
  }
}

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();

function generateCalendar(year, month) {
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var firstDayOfMonth = new Date(year, month, 1).getDay();

  var calendarContainer = document.getElementById("calendarContainer");
  calendarContainer.innerHTML = ""; // Clear previous calendar

  var dateElement = document.createElement("div");
  dateElement.classList.add("date");
  calendarContainer.appendChild(dateElement);

  // Add empty cells for the days before the first day of the month
  for (var i = 0; i < firstDayOfMonth; i++) {
    dateElement.appendChild(document.createElement("span"));
  }

  // Add days of the month
  for (var i = 1; i <= daysInMonth; i++) {
    var dayElement = document.createElement("span");
    dayElement.textContent = i;
    dayElement.onclick = function () {
      var clickedDate = new Date(year, month, parseInt(this.textContent));
      getDate(clickedDate.toDateString());
    };
    dateElement.appendChild(dayElement);
  }

  document.getElementById("currentMonthYear").textContent = new Date(
    year,
    month
  ).toLocaleString("default", { month: "long", year: "numeric" });
}

function getDate(date) {
  getMeetDate(date);

  // You can perform further actions with the selected date here
  document.getElementsByClassName("calendar")[0].style = "opacity: 0";
  document.getElementsByClassName("controls")[0].style = "opacity: 0;";
  document.getElementsByClassName(
    "landingPageFormAnyOtherQuestionsInput"
  )[0].style = "z-index: 0";
  document.getElementsByClassName("landingPageFormMeetingTime")[0].style =
    "z-index: 0";
  document.getElementsByClassName("landingPageFormAnyOtherQuestions")[0].style =
    "z-index: 0";
  document.getElementById("LandingPageChooseDate").style = "opacity: 1";
  document.getElementById("LandingPageChooseTime").style = "opacity: 1";
  document.getElementById("meetingDate").textContent = date;
}
var meetDate;

function getMeetDate(str) {
  meetDate = str;
}
function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentMonth);
}

function previousMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentMonth);
}

generateCalendar(currentYear, currentMonth);

function openCalendar() {
  console.log("calendar clicked");
  document.getElementsByClassName("calendar")[0].style = "opacity: 1";
  document.getElementsByClassName("controls")[0].style = "opacity: 1;";
  document.getElementsByClassName(
    "landingPageFormAnyOtherQuestionsInput"
  )[0].style = "z-index: -1";
  document.getElementsByClassName("landingPageFormMeetingTime")[0].style =
    "z-index: -1";
  document.getElementsByClassName("landingPageFormAnyOtherQuestions")[0].style =
    "z-index: -1";
  document.getElementById("LandingPageChooseDate").style = "opacity: 0";
  document.getElementById("LandingPageChooseTime").style = "opacity: 0";
}

//time

// Function to handle selection of hour or minute
function selectHour(value) {
  var selected = document.querySelector(".selectedHour");
  if (selected) {
    selected.classList.remove("selectedHour");
  }
  document
    .querySelector(".hour-column .time-selector:nth-child(" + value + ")")
    .classList.add("selectedHour");
}
function selectMins(value) {
  var selectedMins = document.querySelector(".selectedMin");
  if (selectedMins) {
    selectedMins.classList.remove("selectedMin");
  }
  let mins = document.querySelectorAll(".minute-column .time-selector");
  console.log(mins.innerText);
  let minsText = [];
  for (let i = 0; i < mins.length; i++) {
    minsText.push(mins[i].innerText);
  }
  console.log(minsText);

  let selectedMin = minsText.findIndex((i) => {
    return i == value;
  });
  console.log(selectedMin);
  document
    .querySelector(
      ".minute-column .time-selector:nth-child(" + (selectedMin + 1) + ")"
    )
    .classList.add("selectedMin");
}

// Function to handle selection of AM or PM
function selectAmPm(value) {
  var selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
  document
    .querySelector(
      ".am-pm-column .time-selector:nth-child(" +
        (value === "AM" ? "1" : "2") +
        ")"
    )
    .classList.add("selected");
}
function openClock() {
  console.log("clock clicked");
  document.getElementsByClassName(
    "landingPageClockInputmain-container"
  )[0].style = "opacity: 1";
  document.getElementsByClassName(
    "landingPageFormAnyOtherQuestionsInput"
  )[0].style = "z-index: -1";
  document.getElementsByClassName("landingPageFormAnyOtherQuestions")[0].style =
    "z-index: -1";
  document.getElementById("LandingPageChooseTime").style = "opacity: 0";
}
function getTime() {
  let hour = document.querySelector(".selectedHour").innerText;
  let mins = document.querySelector(".selectedMin").innerText;
  let amPm = document.querySelector(".selected").innerText;
  console.log(hour + " " + mins + " " + amPm);
  let meetTime = hour + ":" + mins + " " + amPm;
  // document.getElementsByClassName("landingPageFormMeetingTime")[0].textContent =
  //   meetTime;
  document.getElementById("meetingTime").textContent = meetTime;
  //close clock
  getMeetTime(meetTime);
  closeClock();
}
var meetTime;
function getMeetTime(str) {
  meetTime = str;
  return meetTime;
}
console.log(meetTime);
function closeClock() {
  document.getElementsByClassName(
    "landingPageClockInputmain-container"
  )[0].style = "opacity: 0";
  document.getElementsByClassName(
    "landingPageFormAnyOtherQuestionsInput"
  )[0].style = "z-index: 1";
  document.getElementsByClassName("landingPageFormAnyOtherQuestions")[0].style =
    "z-index: 1";
  document.getElementById("LandingPageChooseTime").style = "opacity: 1";
}
//collecting data
document.getElementById("finishCollectData").addEventListener("click", () => {
  //opening greet divison

  console.log("finish clicked");
  let stageOfProject = () => {
    let stageOfProjectElement = document.getElementsByName("stageOfProject");
    for (i = 0; i < stageOfProjectElement.length; i++) {
      if (stageOfProjectElement[i].checked) {
        return stageOfProjectElement[i].value;
      }
    }
  };
  const selectedServices = [];

  Services.forEach((div) => {
    if (div.classList.contains("selectedServices")) {
      selectedServices.push(div.textContent.trim());
    }
  });

  const selectedProducts = [];
  products1.forEach((div) => {
    if (div.classList.contains("selectedProducts")) {
      selectedProducts.push(div.textContent.trim());
    }
  });
  let meetingMode = () => {
    let meetingModeElement = document.getElementsByName("planMeeting");
    for (i = 0; i < meetingModeElement.length; i++) {
      if (meetingModeElement[i].checked) {
        return meetingModeElement[i].value;
      }
    }
  };
  let contactUsJSON = {
    name: document.getElementsByClassName("landingPageFormName")[0].value,
    contactNumber: document.getElementsByClassName(
      "landingPageFormContactNo"
    )[0].value,
    email: document.getElementsByClassName("landingPageFormEmail")[0].value,
    company: document.getElementsByClassName("landingPageFormCompanyName")[0]
      .value,
    stageOfProject: stageOfProject(),
    subjectOfProject: document.getElementsByClassName(
      "landingPageFormSubject"
    )[0].value,
    services: selectedServices,
    products: selectedProducts,
    meetingMode: meetingMode(),
    meetingDate: meetDate,
    meetingTime: meetTime,
    OtherQuestions: document.getElementsByClassName(
      "landingPageFormAnyOtherQuestionsInput"
    )[0].value,
  };
  console.log(contactUsJSON);
  localStorage.setItem("contactUsData", JSON.stringify(contactUsJSON));
});

//for slidingEffect
let currentImage = 1;
const progressBar = document.querySelectorAll(".slide-container-1 > div");
function nextSlide() {
  if (currentImage < 5) {
    currentImage++;
    progressBar[currentImage - 2].style.display = "none";
    console.log(currentImage);
    progressBar[currentImage - 1].style.display = "grid";
    updateSlide();
  } else {
    progressBar[progressBar.length - 1].style.display = "none";

    currentImage = 1;
    updateSlide(); // Reset to first image
    progressBar[0].style.display = "grid";
  }
}

function prevSlide() {
  if (currentImage > 1) {
    progressBar[currentImage - 1].style.display = "none";
    progressBar[currentImage - 2].style.display = "grid";
    currentImage--;
    updateSlide();
  }
}

function updateSlide() {
  const slider = document.querySelector(".image-slider");
  const transformValue = `translateX(-${(currentImage - 1) * 100}%)`;

  slider.style.transform = transformValue;
}
//forchecking value in inputs
function validatePersonalInfo() {
  let name = document.getElementsByClassName("landingPageFormName")[0].value;
  let email = document.getElementsByClassName("landingPageFormEmail")[0].value;
  let contactNo = document.getElementsByClassName("landingPageFormContactNo")[0]
    .value;
  if (name.length != 0 && email.length != 0 && contactNo.length != 0) {
    nextSlide();
  } else {
    alert("Please fill all the fields");
  }
}
function validateCompanyInfo() {
  let companyName = document.getElementsByClassName(
    "landingPageFormCompanyName"
  )[0].value;
  let stageOfProject = document.getElementsByName("stageOfProject");
  let stageOfProjectValue = "";
  for (i = 0; i < stageOfProject.length; i++) {
    if (stageOfProject[i].checked) {
      stageOfProjectValue = stageOfProject[i].value;
    }
  }

  let subjectOfProject = document.getElementsByClassName(
    "landingPageFormSubject"
  )[0].value;
  if (
    companyName.length != 0 &&
    stageOfProjectValue.length != 0 &&
    subjectOfProject.length != 0
  ) {
    nextSlide();
  } else {
    alert("Please fill all the fields");
  }
}

function validateServicesProducts() {
  const selectedServices = [];

  Services.forEach((div) => {
    if (div.classList.contains("selectedServices")) {
      selectedServices.push(div.textContent.trim());
    }
  });
  const selectedProducts = [];
  products1.forEach((div) => {
    if (div.classList.contains("selectedProducts")) {
      selectedProducts.push(div.textContent.trim());
    }
  });
  console.log(selectedProducts + " " + selectedServices);
  if (selectedServices.length != 0 && selectedProducts.length != 0) {
    nextSlide();
  } else {
    alert("Please select Products and Services");
  }
}

function validateMeetingInfo() {
  let meetingMode = () => {
    let meetingModeElement = document.getElementsByName("planMeeting");
    for (i = 0; i < meetingModeElement.length; i++) {
      if (meetingModeElement[i].checked) {
        return meetingModeElement[i].value;
      }
    }
  };
  let meetingTime = "";
  let meetingDate = "";
  let meetingModeValue = "";
  meetingTime = meetTime;
  meetingDate = meetDate;
  meetingModeValue = meetingMode();
  console.log(
    typeof meetingTime +
      " " +
      typeof meetingDate +
      " " +
      typeof meetingModeValue
  );
  if (
    typeof meetingTime != "undefined" &&
    typeof meetingDate != "undefined" &&
    typeof meetingModeValue != "undefined"
  ) {
    nextSlide();
  } else {
    console.log("Please fill all the fields");
    alert("Please fill all the fields");
  }
}
document.getElementById("continueBtn").addEventListener("click", () => {
  document.querySelectorAll('input[type="text"]').forEach((input) => {
    input.value = "";
  });
  document.querySelectorAll('input[type="tel"]').forEach((input) => {
    input.value = "";
  });
  document.querySelectorAll('input[type="email"]').forEach((input) => {
    input.value = "";
  });
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.checked = false;
  });
  document.getElementById("meetingDate").innerText = "";
  document.getElementById("meetingTime").innerText = "";

  document
    .querySelectorAll(".landingPageServicesInputContainer > div")
    .forEach((serviceDiv) => {
      serviceDiv.classList.remove("selectedServices");
    });

  document
    .querySelectorAll(".landingPageProductsInputContainer > div")
    .forEach((productDiv) => {
      productDiv.classList.remove("selectedProducts");
    });
});
