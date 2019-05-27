(function($) {
    $.fn.dateTime = function(option) {
        var elem = this;
        var defaultDate = {
            Year: null,
            Month: null,
            Day: null
        }
        var datePart;
        var timePart;

        if (elem.val() === "") {
            console.log(elem.val());
            $.ajax({
                url: "https://localhost:44379/api/Date",
                success: function(result) {
                    datePart = result.split("T")[0];
                    timePart = result.split("T")[1];
                    defaultDate.Year = datePart.split("-")[0];
                    defaultDate.Month = datePart.split("-")[1];
                    defaultDate.Day = datePart.split("-")[2];
                    elem.val(`${datePart} ${timePart}`);
                    $("input[name='pickTime']").val(timePart);
                },
                async: false
            });
        }

        var settings = $.extend(defaultDate, option);
//        show datepicker
            this.click(function() {
            $(".popupWindow").css("display", "block");
            if (elem.val() !== "") {
                datePart = elem.val().split("T")[0];
                timePart = elem.val().split("T")[1];
                defaultDate.Year = datePart.split("-")[0];
                defaultDate.Month = datePart.split("-")[1];
                defaultDate.Day = datePart.split("-")[2];
            }
            addYears();
            addMonths();
            addDays();
        });
//        hide datepicker
        $("#closePopup").click(function() {
            $(".popupWindow").css("display", "none");
            var selectedDay = $("#selectDay").children("option:selected").val();
            $("#selectYear").empty();
            $("#selectMonth").empty();
            $("#selectDay").empty();
        });

        var selectedYear = settings.Year;
        var selectedMonth = settings.Month;
        var selectedDay = settings.Day;
        var selectedTime = timePart;
//        listen which year is selected
        $("#selectYear").change(function() {
            selectedYear = $("#selectYear").children("option:selected").val();
            elem.val(`${selectedYear}-${selectedMonth}-${selectedDay} ${selectedTime}`);
            //days reload
            $("#selectDay").empty();
            addDays();
        });
//        listen which month is selected
        $("#selectMonth").change(function() {
            selectedMonth =  $("#selectMonth").children("option:selected").val();
            elem.val(`${selectedYear}-${selectedMonth}-${selectedDay} ${selectedTime}`);
            // days reload
            $("#selectDay").empty();
            addDays();
        });
        $("#selectDay").change(function() {
            selectedDay = $("#selectDay").children("option:selected").val();
            elem.val(`${selectedYear}-${selectedMonth}-${selectedDay} ${selectedTime}`);
        });
        $("input[name='pickTime']").change(function() {
            console.log("time:",$("input[name='pickTime']").val());
            selectedTime = $("input[name='pickTime']").val();
            elem.val(`${selectedYear}-${selectedMonth}-${selectedDay} ${selectedTime}`);
        });

//        get how many days in this month
        function getHowManyDays(yearSelected, monthSelected) {
            var dayNumber;
            if(monthSelected === "1" || monthSelected === "3" || monthSelected === "5" || monthSelected === "7" || monthSelected === "8" || monthSelected === "10" || monthSelected === "12") {
                dayNumber = 31;
            } else if(monthSelected === "4" || monthSelected === "6" || monthSelected === "9" || monthSelected === "11") {
                dayNumber = 30;
            } else {
                var year = yearSelected;
                var leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
                dayNumber = leap ? 29 : 28;
            }
            return dayNumber;
        }
        function addYears() {
            // 2000-2020
            for (var i = 2000; i < 2021; i++) {
                if (i.toString() === settings.Year) {
                    $("#selectYear").append($("<option selected></option>").val(i).html(i));

                } else {
                    $("#selectYear").append($("<option></option>").val(i).html(i));
                }
            }
        }
        function addMonths() {
            // 1-12
            var monthDetail = {
                01: "January",
                02: "February",
                03: "March",
                04: "April",
                05: "May",
                06: "June",
                07: "July",
                08: "August",
                09: "September",
                10: "October",
                11: "November",
                12: "December"
            }
            $.each(monthDetail,
                function(value, text) {
                    if (value.toString().length < 2) {
                        value = "0" + value.toString();
                    }
                    if (value.toString() === settings.Month) {
                        $("#selectMonth").append($("<option selected></option>").val(value).html(text));
                    }
                    $("#selectMonth").append($("<option></option>").val(value).html(text));
                });
        }
        function addDays() {
            var daysInMonth = getHowManyDays(selectedYear, selectedMonth);
            for (var i = 1; i < daysInMonth + 1; i++) {
                if (i.toString().length < 2) {
                    i = "0" + i.toString();
                }
                if (i.toString() === selectedDay) {
                    $("#selectDay").append($("<option selected></option>").val(i).html(i));
                } else {
                    $("#selectDay").append($("<option></option>").val(i).html(i));
                }
            }
        }

    }
}( jQuery))

