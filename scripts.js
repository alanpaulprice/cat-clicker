const
catPic1 = document.getElementById("cat-pic-1"),
catPic2 = document.getElementById("cat-pic-2"),
clickCountReadout1 = document.getElementById("count-readout-1"),
clickCountReadout2 = document.getElementById("count-readout-2");

let
count1 = 0,
count2 = 0;

catPic1.addEventListener("click", () => {
  count1++;
  clickCountReadout1.textContent = count1;
});

catPic2.addEventListener("click", () => {
  count2++;
  clickCountReadout2.textContent = count2;
});
