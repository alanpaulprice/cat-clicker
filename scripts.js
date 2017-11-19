const catPic = document.getElementById("cat-pic");
const countReadout = document.getElementById("count-readout");
let count = 0;

catPic.addEventListener("click", () => {
  count++;
  countReadout.textContent = count;
});
