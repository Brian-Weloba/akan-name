var CC, YY, MM, DD;
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var akanNameMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Koffi", "Kwame"];
var akanNameFemale = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Aufa", "Amma"];


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
    return Math.floor(day % 7);
};

var weekDay = dayOfWeek();
//logic for deciding what name to give
if (weekDay === 0) {}