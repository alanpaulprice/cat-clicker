const cats = [
  {
    name: "goose",
    pic: "cat-pics/goose.JPG",
    clicks: 0
  },
  {
    name: "kit",
    pic: "cat-pics/kit.JPG",
    clicks: 0
  },
  {
    name: "fleef",
    pic: "cat-pics/fleef.JPG",
    clicks: 0
  },
  {
    name: "jimmy",
    pic: "cat-pics/jimmy.JPG",
    clicks: 0
  },
  {
    name: "molly",
    pic: "cat-pics/molly.JPG",
    clicks: 0
  }
];
// ===== CREATE WRAPPER =====
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.appendChild(wrapper);

// ===== HIDE ALL CATS =====
function hideAllCats () {
  for (let i = 0; i < allCatContainers.length; i++) {
    allCatContainers[i].classList.remove("show");
  }
}

// ===== CREATE CAT NAV =====
const catNav = document.createElement("ul");
catNav.id = "cat-nav"
wrapper.appendChild(catNav);

// ===== CREATE CAT INFO CONTAINERS PARENT =====
const catInfoContainersParent = document.createElement("div");
catInfoContainersParent.id = "cat-info-containers-parent";
wrapper.appendChild(catInfoContainersParent);

// ===== TARGETS ALL CAT INFO CONTAINERS =====
const allCatContainers = catInfoContainersParent.childNodes;

for (let i = 0; i < cats.length; i++) {

  let cat = cats[i];

  // ===== GENERATE CAT NAV LI =====
  let li = document.createElement("li");
  li.id = "li-" + cat.name;
  li.textContent = cat.name.toUpperCase();
  li.addEventListener("click", () => {
    hideAllCats();
    catInfoContainer.classList.add("show");
  });
  catNav.appendChild(li);

  // ===== CREATE CAT INFO CONTAINER =====
  let catInfoContainer = document.createElement("div");
  catInfoContainer.id = "cat-info-container-" + cat.name;
  catInfoContainer.classList.add("cat-info-containers");
  catInfoContainersParent.appendChild(catInfoContainer);

  // ===== GENERATE TITLE =====
  let catTitle = document.createElement("h1");
  catTitle.classList.add("cat-title");
  catTitle.textContent = cat.name.toUpperCase();
  catInfoContainer.appendChild(catTitle);

  // ===== GENERATE PIC =====
  let catPic = document.createElement("img");
  catPic.id = "cat-pic-" + cat.name;
  catPic.src = cat.pic;
  catPic.alt = "A picture of a cat called " + cat.name + ".";
  catPic.addEventListener("click", () => {
    cat.clicks++;
    clicksCount.textContent = cat.clicks;
  });
  catInfoContainer.appendChild(catPic);

  // ===== GENERATE CLICK COUNT =====
  let clicksCount = document.createElement("h1");
  clicksCount.id = "clicks-count-" + cat.name;
  clicksCount.classList.add("clicks-counts");
  clicksCount.textContent = "0";
  catInfoContainer.appendChild(clicksCount);
}
