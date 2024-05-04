


// Set the date we're counting down to
  
var countDownDate = new Date("June 19, 2024 00:00:00").getTime();

// Update the count down every 1 second
var Birthday = false
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Happy birthday to me";
    Birthday = true
  }
}, 1000);
    


// Create an array of the links to choose from:
var links = new Array();
links[0] = "https://www.youtube.com/watch?v=epF_-PmEUoc";
links[1] = "https://www.youtube.com/watch?v=T9Ybj8nrtQw";
links[2] = "https://www.youtube.com/watch?v=Xd5SMgJVEAM";
links[3] = "https://www.youtube.com/watch?v=-9w7A39Ggz0";
links[4] = "https://www.youtube.com/watch?v=77KTJ2qa158";
links[5] = "https://www.youtube.com/watch?v=7hkI43oPIxk";
links[6] = "https://www.youtube.com/watch?v=EETV2JNBhcc";
links[7] = "https://www.youtube.com/watch?v=wtq6FnM3c8U";
links[8] = "https://www.youtube.com/watch?v=9MgjgAjnx6E";
links[9] = "https://www.youtube.com/watch?v=KW-R7_lYtr4";
links[10] = "https://www.youtube.com/watch?v=EneEXjNSLYU";
links[11] = "https://www.youtube.com/watch?v=qH5hM1ILuFQ";
links[12] = "https://www.youtube.com/watch?v=trtYq0vvY5s";
links[13] = "https://www.youtube.com/watch?v=VYxRzB6sxhs";
links[14] = "https://www.youtube.com/watch?v=tKTiTnecbHY";
links[15] = "https://www.youtube.com/watch?v=LYHuxsXZL4c";
links[16] = "https://www.youtube.com/watch?v=2GcKrCnDBf4";
links[17] = "https://www.youtube.com/watch?v=Jrg9KxGNeJY";
links[18] = "https://www.youtube.com/watch?v=s0yTilal3_c";
links[19] = "https://www.youtube.com/watch?v=1xcvWmN0Pe4";
links[20] = "https://www.youtube.com/watch?v=o4M4qssoaWU";
links[21] = "https://www.youtube.com/watch?v=xRzbLQ_WKPs";
links[22] = "https://www.youtube.com/watch?v=229gdKbKcaI";
links[23] = "https://www.youtube.com/watch?v=U-l4ya3ejko";
links[24] = "https://www.youtube.com/watch?v=yC2qh3MANvs";
links[25] = "https://www.youtube.com/watch?v=8McISUEXb9g";
links[26] = "https://www.youtube.com/watch?v=-dYB0xfE7qs";
links[27] = "https://www.youtube.com/watch?v=AqI97zHMoQw";
links[28] = "https://www.youtube.com/watch?v=-gwHf6Uj1UI";
links[29] = "https://www.youtube.com/watch?v=xPyJ2XhSKOI";
links[30] = "https://www.youtube.com/watch?v=fShlVhCfHig";
links[31] = "https://www.youtube.com/watch?v=6GW0wXMt2CQ";
links[32] = "https://www.youtube.com/watch?v=elyXcwunIYA";
links[33] = "https://www.youtube.com/watch?v=qEJ4spdiTxw";
links[34] = "https://www.youtube.com/watch?v=3L-4KvItfdw";
links[35] = "https://www.youtube.com/watch?v=U609b7lOAII";
links[36] = "https://www.youtube.com/watch?v=TcLLpZBWsck";
links[37] = "https://www.youtube.com/watch?v=GTHG8pfG_UM";
links[38] = "https://www.youtube.com/watch?v=PDQ7MUWg92M";
links[39] = "https://www.youtube.com/watch?v=gndkFhYh5Mo";
links[40] = "https://www.youtube.com/watch?v=bqqUvduHONk";
links[41] = "https://www.youtube.com/watch?v=vIBFoBladhg";
links[42] = "https://www.youtube.com/watch?v=lvp4qNbY2qQ";
links[43] = "https://www.youtube.com/watch?v=3nLrkkl6mtU";
links[44] = "https://www.youtube.com/watch?v=eX4de4BH5lM";
links[45] = "https://www.youtube.com/watch?v=xrQtsLVa504";
links[46] = "https://www.youtube.com/watch?v=QHVREB6fdvI";
links[47] = "https://www.youtube.com/watch?v=35GnzyiLwhI";
links[48] = "https://www.youtube.com/watch?v=SRTpXWMOEtM";
links[49] = "https://www.youtube.com/watch?v=bfaBr7EuZCE";
links[50] = "https://www.youtube.com/watch?v=wuJIqmha2Hk";



function openLink() {
  // Chooses a random link:
  var i = Math.floor(Math.random() * links.length);
  // Directs the browser to the chosen target:
  window.location.href = links[i];
  return false;
}

if (Birthday == false) {
  setTimeout(openLink,5000);
}
