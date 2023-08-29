/*
    تاریخ مقرر شده برای برگشت ضمانت نامه :
    clicking on radio butto to display guaranteeReturnDate div
*/

let positiveRadioButton = document.getElementById('flexRadioPositive');
let negativeRadioButton = document.getElementById('flexRadioNegative');
let guaranteeReturnDate = document.getElementById('guaranteeReturnDate');

negativeRadioButton.addEventListener('click',()=>{
    

    if(positiveRadioButton.checked){
        guaranteeReturnDate.classList.add("d-none");
        guaranteeReturnDate.classList.remove("d-block");
        
    }else if(negativeRadioButton.checked){
        guaranteeReturnDate.classList.remove("d-none");
        guaranteeReturnDate.classList.add("d-block");
        
        
    }
})

positiveRadioButton.addEventListener('click',()=>{
    
    

    if(positiveRadioButton.checked){
        guaranteeReturnDate.classList.add("d-none");
        guaranteeReturnDate.classList.remove("d-block");
        
    }else if(negativeRadioButton.checked){
        guaranteeReturnDate.classList.add("d-block");
        guaranteeReturnDate.classList.remove("d-none");
        
        
    }
})



var fisrtContainer = document.getElementById("container-1");
var secondContainer = document.getElementById("container-2");
var thirdContainer = document.getElementById("container-3");




var options = {
  calendarType: "persian", // DONE
  calendar: {
    persian: {
      locale: "fa", // DONE
      showHint: true, // DONE
      leapYearMode: "algorithmic", // "astronomical" // DONE
    },
    gregorian: {
      locale: "en", // DONE
      showHint: true, // DONE
    },
  },
  animate: true,
  overlay: false,
  responsive: true, // Deprecated
  inline: false, // Deprected
  initialValue: false, // DONE
  initialValueType: "persian", // Works but deprecated in next version
  persianDigit: true, // Deprected
  viewMode: "year", // DONE
  format: "LLLL", // DONE
  formatter(unixDate, dateObject) {
    return new dateObject(unixDate).format(this.format);
  }, // DONE
  altField: "#containerAlt", // DONE
  altFormat: "g", // DONE
  altFieldFormatter: function (unixDate, dateObject) {
    //console.log('user config alt formmater funciton')
    if (this.altFormat === "gregorian" || this.altFormat === "g") {
      return new Date(unixDate);
    } else {
      return new dateObject(unixDate).format(this.altFormat);
    }
  }, // DONE
  minDate: new persianDate().subtract("year", 16).valueOf(), // DONE
  maxDate: new persianDate().add("year", 6).valueOf(), // DONE,
  navigator: {
    enabled: true,
    scroll: {
      enabled: true,
    },
    text: {
      btnNextText: "<", // Deprecated
      btnPrevText: ">", // Deprected
    },
    onNext: function (datepickerObject) {
      // DONE
      console.log("navigator.onNext");
      console.log(datepickerObject);
    },
    onPrev: function (datepickerObject) {
      // DONE
      console.log("navigator.onPrev");
      console.log(datepickerObject);
    },
    onSwitch: function (datepickerObject) {
      // DONE
      console.log("navigator.onSwitch");
      //console.log(datepickerObject)
    },
  },
  toolbox: {
    enabled: true,
    text: {
      // DEPRECTED
      btnToday: "امروز",
    },
    submitButton: {
      enabled: true, // DONE
      text: {
        // DEPRECTED
        fa: "تایید",
        en: "submit",
      },
      onSubmit: function (datepickerObject) {
        // DONE
        datepicker.hide();
        console.log("toolbox.onSubmit");
      },
    },
    todayButton: {
      enabled: true, // DONE
      text: {
        // DEPRECTED
        fa: "امروز",
        en: "today",
      },
      onToday: function (datepickerObject) {
        // DONE
        console.log("toolbox.onToday");
      },
    },
    calendarSwitch: {
      enabled: true, // DONE
      format: "MMMM", // DEPRECATED
      onSwitch: function (datepickerObject) {
        // DONE
        console.log("toolbox.onSwitch");
      },
    },
  },
  onlyTimePicker: false, // DONE
  onlySelectOnDate: false,
  checkDate: function (unix) {
    // DONE
    return true;
  },
  checkMonth: function (y, m) {
    // DONE
    return true;
  },
  checkYear: function (y) {
    // DONE
    return true;
  },
  timePicker: {
    enabled: false, // DONE
    step: 1, // DONE
    hour: {
      enabled: true, // DONE
      step: null, // DONE
    },
    minute: {
      enabled: true, // DONE
      step: null, // DONE
    },
    second: {
      enabled: true, // DONE
      step: null, // DONE
    },
    meridian: {
      enabled: true, // DONE
    },
  },
  dayPicker: {
    enabled: true, // DONE
    titleFormat: "YYYY MMMM", // DONE
    titleFormatter: function (unix, dateObject) {
      // DONE
      return new dateObject(unix).format(this.titleFormat);
    },
    onSelect: function (selectedDayUnix) {
      // DONE
      console.log("use event onSelect date");
    },
  },
  monthPicker: {
    enabled: true,
    titleFormat: "YYYY", // DONE
    titleFormatter: function (unix, dateObject) {
      // DONE
      return new dateObject(unix).format(this.titleFormat);
    },
    onSelect: function (monthIndex) {
      // DONE
      console.log("use event onSelect month");
    },
  },
  yearPicker: {
    enabled: true,
    titleFormat: "YYYY", // DONE
    titleFormatter: function (unix, dateObject) {
      // DONE
      let selectedYear = new dateObject(unix).year();
      let startYear = selectedYear - (selectedYear % 12);
      return (
        new dateObject(unix).year(startYear).format(this.titleFormat) +
        "-" +
        new dateObject(unix).year(startYear + 11).format(this.titleFormat)
      );
    },
    onSelect: function (year) {
      // DONE
      console.log("use event onSelect year");
    },
  },
  infobox: {
    enabled: true, // DONE
    titleFormat: "YYYY", // DONE
    titleFormatter: function (unix, dateObject) {
      // DONE
      return new dateObject(unix).format(this.titleFormat);
    },
    selectedDateFormat: " dddd DD MMMM", // DONE
    selectedDateFormatter: function (unix, dateObject) {
      // DONE
      return new dateObject(unix).format(this.selectedDateFormat);
    },
  },
  position: "auto", // DONE
  autoClose: false, // DONE
  template: null, // DEPRECATED
  observer: true, // DONE
  inputDelay: 800, // DEPRECATED
  onSelect: function (unixDate) {
    console.log("user event onSelect");
  }, // DONE
  onShow: function (unixDate) {
    console.log("user event onShow");
  }, // DONE
  onHide: function (unixDate) {
    console.log("user event onHide");
  }, // DONE
  onToggle: function (unixDate) {
    console.log("user event onToggle");
  }, // DEPRECATED
  onSet: function (unixDate) {
    console.log("user event onSet");
  },
  onDestroy: function (unixDate) {
    console.log("user event onDestroy");
  },
};

window.datepicker = persianDatepicker(fisrtContainer, {
  animate: false,
  toolbox: {
    enabled: true,
  },
  navigator: {
    enabled: true,
  },
  infobox: {
    enabled: true,
  },
  timePicker: {
    enabled: false,
  },
  yearPicker: {
    enabled: false,
  },
  monthPicker: {
    enabled: false,
  },
  format: "YYYY/MM/DD HH:mm:ss",
  calendarType: "persian",
  viewMode: "day",
});

window.datepicker = persianDatepicker(secondContainer, {
  animate: false,
  toolbox: {
    enabled: true,
  },
  navigator: {
    enabled: true,
  },
  infobox: {
    enabled: true,
  },
  timePicker: {
    enabled: false,
  },
  yearPicker: {
    enabled: false,
  },
  monthPicker: {
    enabled: false,
  },
  format: "YYYY/MM/DD HH:mm:ss",
  calendarType: "persian",
  viewMode: "day",
});

window.datepicker = persianDatepicker(thirdContainer, {
  animate: false,
  toolbox: {
    enabled: true,
  },
  navigator: {
    enabled: true,
  },
  infobox: {
    enabled: true,
  },
  timePicker: {
    enabled: false,
  },
  yearPicker: {
    enabled: false,
  },
  monthPicker: {
    enabled: false,
  },
  format: "YYYY/MM/DD HH:mm:ss",
  calendarType: "persian",
  viewMode: "day",
});

datepicker.show();








