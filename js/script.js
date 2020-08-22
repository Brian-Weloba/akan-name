var CC, YY, MM, DD, weekDay;
var dayInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var akanNameMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Koffi", "Kwame"];
var akanNameFemale = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Aufa", "Amma"];
var info = ["associated with the universe", "associated with peace", "associated with the ocean", "associated with spider/Ananse", "associated with the earth", "associated with fertility", "associated with God"];

//is the value valid
var yearValid = false;
var monthValid = false;
var dayValid = false;

//set gender
/*function getComboA(selectObject) {
    var value = selectObject.value;  
    console.log(value);
  }
var gender = document.getElementById("sel1").selectedIndex;
gender.addEventListener('change', function() {
    var gender = document.getElementById("sel1").selectedIndex;
});

document.getElementById("sel1").onchange = function() {
    var value = document.getElementById("sel1").selectedIndex;
};*/

// a function to get the day of the week
var dayOfWeek = function() {
    var year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("dob").value);
    if (MM === 1) {
        MM = 11;
        YY--;
    } else if (MM === 2) {
        MM = 12;
        YY--;
    } else {
        MM -= 2;
    }
    var day = DD + Math.floor((13 * MM - 1) / 5) + YY + Math.floor(YY / 4) + Math.floor(CC / 4) - (2 * CC);
    console.log(CC, YY, MM, DD, day);
    var dow = Math.floor(day % 7);
    return dow;
};



const form = document.getElementById("form");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("dob");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
    weekDay = setDay();
    getAkan(weekDay);
});

function work() {

}


//validate input
function checkInputs() {
    //get values
    const yearValue = year.value.trim();
    const monthValue = month.value.trim();
    const dayValue = day.value.trim();

    if (yearValue === "") {
        setErrorFor(year, "Year cannot be empty");
    } else if (yearValue < 1582) {
        setErrorFor(year, "Input a date after 1582");
    } else if (yearValue.toString().length != 4) {
        setErrorFor(year, "Not a valid year");
    } else {
        setSuccessFor(year);
        yearValid = true;
    }

    if (monthValue === "") {
        setErrorFor(month, "Month cannot be empty");
    } else if (monthValue <= 0 || monthValue >= 13) {
        setErrorFor(month, "Not a valid month");
    } else {
        setSuccessFor(month);
        monthValid = true;
    }

    if (dayValue === "" || dayValue > 31) {
        setErrorFor(day, "Day cannot be empty");
    } else {
        if (monthValue == 4 || monthValue == 6 || monthValue == 9 || monthValue == 11) {
            if (dayValue < 1 || dayValue > 30) {
                setErrorFor(day, "Not a valid day");
            } else {
                setSuccessFor(day);
                dayValid = true;
            }
        } else if (monthValue == 1 || monthValue == 3 || monthValue == 5 || monthValue == 7 || monthValue == 8 || monthValue == 10 || monthValue == 12) {
            if (dayValue < 1 || dayValue > 31) {
                setErrorFor(day, "Not a valid day");
            } else {
                setSuccessFor(day);
                dayValid = true;
            }
        } else if (monthValue == 2) {
            if (yearValue % 4 != 0) {
                if (dayValue < 1 || dayValue > 28) {
                    setErrorFor(day, "Not a valid day");
                } else {
                    setSuccessFor(day);
                    dayValid = true;
                }
            } else {
                if (dayValue < 1 || dayValue >= 30) {
                    setErrorFor(day, "Not a valid day");
                } else {
                    setSuccessFor(day);
                    dayValid = true;
                }
            }

        }
    }
}

//set day of week [0-6]
function setDay() {
    if (dayValid == true && monthValid == true && yearValid == true) {
        var dd = dayOfWeek();
        return dd;
    } else {}
}

//invalid input message
function setErrorFor(input, message) {
    const formControl = input.parentElement; //formcontrol
    const small = formControl.querySelector("small");


    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
}

//valid input message
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//set akan name to html span
function getAkan(y) {
    var gender = document.getElementById("sel1").selectedIndex;
    for (let i = 0; i < 7; i++) {
        if (gender == 0) {
            if (y == i) {
                document.getElementById("dayb").innerHTML = dayInWeek[i];
                document.getElementById("akanN").innerHTML = akanNameMale[i];
                document.getElementById("meaning").innerHTML = info[i];
            }
        } else if (gender == 1) {
            if (y == i) {
                document.getElementById("dayb").innerHTML = dayInWeek[i];
                document.getElementById("akanN").innerHTML = akanNameFemale[i];
                document.getElementById("meaning").innerHTML = info[i];
            }
        }
    }
}