var i = 0;
var y = 0;
var txt = 'Welcome to Overlake FTC 7330';
var txt2 = 'View Our Stuff:';
var speed = 75;
function typeText() {
    if (i < txt.length) {
        document.getElementById("titleText").innerHTML =
            document.getElementById("titleText").innerHTML.substring(0, i) + txt.charAt(i) + "_";
        i++;
        setTimeout(typeText, speed);
    } else {
        typeText2();
        document.getElementById("titleText").innerHTML =
            document.getElementById("titleText").innerHTML.substring(0, i);
    }
}
function typeText2() {
    if (y < txt2.length) {
        document.getElementById("desc").innerHTML =
            document.getElementById("desc").innerHTML.substring(0, y) + txt2.charAt(y) + "_";
        y++;
        setTimeout(typeText2, speed);
    } else {
        document.getElementById("desc").innerHTML =
            document.getElementById("desc").innerHTML.substring(0, y);
    }
}