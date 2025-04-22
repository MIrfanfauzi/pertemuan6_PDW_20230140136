// Tangkap elemen berdasarkan ID
const video = document.getElementById("video");
const audio = document.getElementById("audio");
const gambar1 = document.getElementById("gambar1");
const gambar2 = document.getElementById("gambar2");

// Tambahkan event listener
video.addEventListener("click", function () {
  alert("Ini video Bring Me The Horizon");
});

audio.addEventListener("click", function () {
  alert("Ini audio Bring Me The Horizon");
});

gambar1.addEventListener("click", function () {
  alert("Ini gambar album BMTH - 1");
});

gambar2.addEventListener("click", function () {
  alert("Ini gambar album BMTH - 2");
});
