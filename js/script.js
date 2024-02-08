// new year countdown func
function startClock() {
   var dateText = document.getElementById("dateText");
   var hourText = document.getElementById("hourText");
   var minuteText = document.getElementById("minuteText");
   var secondText = document.getElementById("secondText");
   
   var interval = setInterval(function() {
       var now = new Date();
       var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
       var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
       var dayName = days[now.getDay()];
       var monthName = months[now.getMonth()];
       var day = now.getDate();
       var year = now.getFullYear();
       var hours = pad(now.getHours());
       var minutes = pad(now.getMinutes());
       var seconds = pad(now.getSeconds());
       
       var dateString = dayName + ", " + day + " " + monthName + " " + year;
       var timeString = hours;
       var minuteString = minutes;
       var secondString = seconds;
       
       dateText.innerHTML = dateString;
       hourText.innerHTML = "Jam: " + timeString;
       minuteText.innerHTML = "Menit: " + minuteString;
       secondText.innerHTML = "Detik: " + secondString;
       
       var targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 50, 0, 0); // Set target jam 04:00:00
        if (now >= targetTime) {
           clearInterval(interval);
           document.body.style.backgroundColor = "white";
           playBirthdayMusic();
           fireWork();
           startCountdown();
       }
   }, 1000);
}

function pad(number) {
   return (number < 10 ? '0' : '') + number;
}
var audioB = document.getElementById("birthdayAudio");
function playBirthdayMusic() {
   audioB.play();
}
function fireWork() {
   $(".fireWork").fireworks({
      sound: true, // sound effect
      opacity: 0.4,
      width: "100%",
      height: "100%",
   });
}

function startCountdown() {
   var secondsLeft = 10; // Hitung mundur dari 10 detik

   var countdownInterval = setInterval(function() {

       if (secondsLeft === 0) {
           clearInterval(countdownInterval);
           // Lanjut ke halaman berikutnya setelah 10 detik
           setTimeout(function() {
               window.location.href = "index-dua.html";
           }, 10000);
       }

       secondsLeft--;
   }, 1000);
}

