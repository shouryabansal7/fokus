//function to display time and greetings
function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var midday;

    hours = updateTime(hours);
    minutes = updateTime(minutes);

    var name = "Shourya";

    //if else condition
    document.getElementById("clock").innerHTML = hours + ":" + minutes;
    var time = setTimeout(function () {
        clock();
    }, 1000);
    var greeting;
    if(hours<12){
        greeting = "Good Morning" + " " + name;
    }else if(hours >= 12 && hours < 18){
        greeting = "Good Afternoon" + " " + name;
    }else if(hours >= 18 && hours <=24){
        greeting = "Good Evening" + " " + name;
    }

    document.getElementById("greeting").innerHTML=greeting;
}

function updateTime(k){
    if(k<10){
        return "0" + k;
    }else {
        return k;
    }
}

//call clock funciton
clock();