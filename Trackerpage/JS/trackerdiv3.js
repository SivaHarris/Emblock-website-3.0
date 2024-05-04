window.addEventListener("load", () => {
  if (window.innerWidth > 1250) {
    window.addEventListener("scroll", function () {
      let scrollSection = document.getElementById(
        "AttendanceTrackerWhatWeOfferSection"
      );
      let mainDivTop = scrollSection.getBoundingClientRect().bottom;
      let scrollIndicator = [
        document.getElementsByClassName("AttendanceScrollBoxRealtime")[0],
        document.getElementsByClassName("AttendanceScrollBoxCustomReport")[0],
        document.getElementsByClassName("AttendanceScrollBoxGeolocation")[0],
        document.getElementsByClassName("AttendanceScrollBoxMobileAccess")[0],
        document.getElementsByClassName("AttendanceScrollBoxIntegration")[0],
        document.getElementsByClassName("AttendanceScrollBoxAutomated")[0],
      ];

      if (mainDivTop > this.window.innerHeight) {
        scrollIndicator.map((i) => {
          i.style.opacity = 1;
        });
      }

      //grow right

      if (mainDivTop < this.window.innerHeight) {
        {
          scrollIndicator[1].style.width = "311px";
          document.getElementsByClassName(
            "AttendanceScrollBoxCustomReportPara"
          )[0].style.opacity = 1;
          document.getElementsByClassName(
            "AttendanceScrollBoxCustomReportPara"
          )[0].style.transition = "opacity 30s";
          document.getElementsByClassName(
            "AttendanceScrollBoxMobileAccessGifSectionText"
          )[0].style.fontWeight = "700";
        }
        {
          scrollIndicator[3].style.width = "285px";
          document.getElementsByClassName(
            "AttendanceScrollBoxMobileAccessPara"
          )[0].style.opacity = 1;
          document.getElementsByClassName(
            "AttendanceScrollBoxMobileAccessPara"
          )[0].style.transition = "30s";
          document.getElementsByClassName(
            "AttendanceScrollBoxCustomReportGifSectionText"
          )[0].style.fontWeight = "700";
        }
        {
          scrollIndicator[5].style.width = "397px";
          document.getElementsByClassName(
            "AttendanceScrollBoxAutomatedPara"
          )[0].style.opacity = 1;
          document.getElementsByClassName(
            "AttendanceScrollBoxAutomatedPara"
          )[0].style.transition = "opacity 30s";
          document.getElementsByClassName(
            "AttendanceScrollBoxAutomatedGifSectionText"
          )[0].style.fontWeight = "700";
        }
      }
      //grow left
      if (mainDivTop < this.window.innerHeight) {
        {
          document.getElementsByClassName(
            "AttendanceScrollBoxRealtime"
          )[0].style.width = "397px";
          document.getElementsByClassName(
            "AttendanceScrollBoxRealtimePara"
          )[0].style.opacity = 1;
          document.getElementsByClassName(
            "AttendanceScrollBoxRealtimePara"
          )[0].style.transition = "opacity 30s";
          document.getElementsByClassName(
            "AttendanceScrollBoxRealtimeGifSectionText"
          )[0].style.fontWeight = "700";
        }
        {
          document.getElementsByClassName(
            "AttendanceScrollBoxGeolocation"
          )[0].style.width = "289px";
          document.getElementsByClassName(
            "AttendanceScrollBoxGeolocationPara"
          )[0].style.opacity = 1;
          document.getElementsByClassName(
            "AttendanceScrollBoxGeolocationPara"
          )[0].style.transition = "opacity 30s";
          document.getElementsByClassName(
            "AttendanceScrollBoxGeolocationGifSectionText"
          )[0].style.fontWeight = "700";
        }
        {
          document.getElementsByClassName(
            "AttendanceScrollBoxIntegration"
          )[0].style.width = "289px";
          document.getElementsByClassName(
            "AttendanceScrollBoxIntegrationPara"
          )[0].style.opacity = 1;
          document.getElementsByClassName(
            "AttendanceScrollBoxIntegrationPara"
          )[0].style.transition = "opacity 30s";
          document.getElementsByClassName(
            "AttendanceScrollBoxIntegrationGifSectionText"
          )[0].style.fontWeight = "700";
        }
      }
    });
  }
});
