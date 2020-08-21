var CC, YY, MM, DD;
var dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var akanNameMale = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Koffi", "Kwame", "Kwasi"];
var akanNameFemale = ["Adwoa", "Abena", "Akua", "Yaa", "Aufa", "Amma", "Akosua"];



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
    console.log(CC, YY, MM, DD);
    var day = DD + ((13 * MM - 1) / 5) + YY + (YY / 4) + (CC / 4) - 2 * CC;
    return Math.floor(day % 7);
};