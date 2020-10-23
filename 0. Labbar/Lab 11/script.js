



//
function timeAndDate() {
    let today = new Date();
    document.getElementById("clock").innerHTML = today.toLocaleTimeString();
    
    let months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
    let days = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = months[today.getMonth()];
    let curYear = today.getFullYear();
    let date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    // Kör funktionen efter 1sec = 1000. setTimeout körs bara 1gång annars men här anroparden funktionen  i sig och blir således en loop
    // metoden setInterval repeterar
    setTimeout (timeAndDate, 1000);
}



timeAndDate();