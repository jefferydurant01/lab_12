const pac12_data = [];

function TeamObject(college, conference, overall, last, next) {
  let obj = {
    name: college,
    conference: conference,
    overall: overall,
    last_game: last,
    next_game: next,
  };
  return obj;
}

pac12_data.push(TeamObject("OREGON", "7-2", "10-4", "L 32-47", "OKLA"));
pac12_data.push(TeamObject("WASHINGTON STATE", "6-3", "7-6", "L 21-24", "CMU"));
pac12_data.push(TeamObject("OREGON STATE", "5-4", "7-6", "L 13-24", "USU"));
pac12_data.push(TeamObject("CALIFORNIA", "4-5", "5-7", "W 24-14", "USC"));
pac12_data.push(TeamObject("WASHINGTON", "3-6", "4-8", "L 13-40", "WSU"));
pac12_data.push(TeamObject("STANFORD", "2-7", "3-9", "L 14-45", "ND"));

function Logo(name, url, id) {
  const myLogo = {
    name: name,
    url: url,
    id: id,
  };
  return myLogo;
}

const logos = [];

logos.push(
  Logo(
    "Oregon",
    "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-color-2019.png",
    "or"
  )
);
logos.push(
  Logo(
    "Washington State",
    "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/washington-state-logo-color-out_2.png", 
    "ws"
  )
);
logos.push(
    Logo(
        "Oregon State", 
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-state-color-2019.png", 
        "os"
    )
); 
logos.push(
    Logo(
        "California", 
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-california-color-2019.png", 
        "ca"
    )
); 
logos.push(
    Logo(
        "Washington", 
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-washington-color-2019.png", 
        "wa"
    )
); 
logos.push(
    Logo(
        "Stanford", 
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-stanford-color-2019.png", 
        "st"
    )
)
//college 1
var img = document.createElement("img"); 
img.src = "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-color-2019.png"; 
var block = document.getElementById("logo1"); 
block.appendChild (img); 
document.getElementById("college1").innerHTML = logos[0].name;
document.getElementById("conferenceA").innerHTML = pac12_data[0].conference;
document.getElementById("overallA").innerHTML = pac12_data[0].overall; 
document.getElementById("lastgameA").innerHTML = pac12_data[0].last_game + " " + pac12_data[0].next_game; 

//college 2
var img = document.createElement("img"); 
img.src = "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/washington-state-logo-color-out_2.png"; 
var block = document.getElementById("logo2"); 
block.appendChild (img); 
document.getElementById("college2").innerHTML = logos[1].name;
document.getElementById("conferenceB").innerHTML = pac12_data[1].conference;
document.getElementById("overallB").innerHTML = pac12_data[1].overall; 
document.getElementById("lastgameB").innerHTML = pac12_data[1].last_game + " " + pac12_data[1].next_game; 

//college 3
var img = document.createElement("img"); 
img.src =  "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-state-color-2019.png"; 
var block = document.getElementById("logo3"); 
block.appendChild (img); 
document.getElementById("college3").innerHTML = logos[2].name;
document.getElementById("conferenceC").innerHTML = pac12_data[2].conference;
document.getElementById("overallC").innerHTML = pac12_data[2].overall; 
document.getElementById("lastgameC").innerHTML = pac12_data[2].last_game + " " + pac12_data[2].next_game; 

//college 4
var img = document.createElement("img"); 
img.src =  "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-california-color-2019.png";
var block = document.getElementById("logo4"); 
block.appendChild (img); 
document.getElementById("college4").innerHTML = logos[3].name;
document.getElementById("conferenceD").innerHTML = pac12_data[3].conference;
document.getElementById("overallD").innerHTML = pac12_data[3].overall; 
document.getElementById("lastgameD").innerHTML = pac12_data[3].last_game + " " + pac12_data[3].next_game; 

//college 5
var img = document.createElement("img"); 
img.src =  "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-washington-color-2019.png";
var block = document.getElementById("logo5"); 
block.appendChild (img); 
document.getElementById("college5").innerHTML = logos[4].name;
document.getElementById("conferenceE").innerHTML = pac12_data[4].conference;
document.getElementById("overallE").innerHTML = pac12_data[4].overall; 
document.getElementById("lastgameE").innerHTML = pac12_data[4].last_game + " " + pac12_data[4].next_game; 

var img = document.createElement("img"); 
img.src = "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-stanford-color-2019.png";
var block = document.getElementById("logo6"); 
block.appendChild (img); 
document.getElementById("college6").innerHTML = logos[5].name;
document.getElementById("conferenceF").innerHTML = pac12_data[5].conference;
document.getElementById("overallF").innerHTML = pac12_data[5].overall; 
document.getElementById("lastgameF").innerHTML = pac12_data[5].last_game + " " + pac12_data[5].next_game; 