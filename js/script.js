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
    var day = (DD + MM + YY + CC) % 7;
    console.log(year, CC, YY, MM, DD);
    return (Math.floor(day));
};