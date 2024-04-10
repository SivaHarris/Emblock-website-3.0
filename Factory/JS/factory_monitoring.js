//text disappear and appear in factory monitoring video
setTimeout(function () {
  document
    .querySelector(".factoryMonitoringVideoTextHead")
    .classList.remove("active");
}, 1000);

setTimeout(function () {
  document
    .querySelector(".factoryMonitoringVideoTextHead")
    .classList.add("active");
}, 3000);

setTimeout(function () {
  document
    .querySelector(".factoryMonitoringVideoTextPara")
    .classList.remove("active");
}, 1000);

setTimeout(function () {
  document
    .querySelector(".factoryMonitoringVideoTextPara")
    .classList.add("active");
}, 3000);

