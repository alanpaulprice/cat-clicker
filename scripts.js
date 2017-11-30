// ===== MODEL =====
let model = {

  adminMode: true,
  currentCat: "",

  cats: [
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
  ],

  getCurrentCatInfo: () => {
    return {
      name: model.cats[model.currentCat].name,
      pic: model.cats[model.currentCat].pic,
      clicks: model.cats[model.currentCat].clicks,
    };
  },

}; // ===== MODEL =====
// ===== ===== ===== ===== =====
// ===== OCTOPUS =====
let octopus = {
  init: () => {
    model.currentCat = 0;

    let catNamesArr = model.cats.map((cat) => cat.name);
    view.init(catNamesArr, model.adminMode);

    view.updateDisplay(model.getCurrentCatInfo());
  },

  newCurrentCat: (catIndex) => {
    model.currentCat = catIndex;
    view.updateDisplay(model.getCurrentCatInfo());
    view.updateAdminPanel(model.getCurrentCatInfo());
  },

  registerClick: (name) => {
    model.cats[model.currentCat].clicks++;
    view.updateDisplay(model.getCurrentCatInfo());
  },

  updateAdminPanel: () => {
    view.updateAdminPanel(model.getCurrentCatInfo());
  },

  saveEditedCatInfo: (newName, newPic, newClicks, navLiList) => {
    model.cats[model.currentCat].name = newName;
    model.cats[model.currentCat].pic = newPic;
    model.cats[model.currentCat].clicks = newClicks;
    navLiList[model.currentCat].textContent = newName;
    view.updateDisplay(model.getCurrentCatInfo());
  }
}; // ===== OCTOPUS =====
// ===== ===== ===== ===== =====
// ===== VIEW =====
let view = {
  init: (catNames, adminMode) => {
    // ===== NAV / DISPLAY DOM OBJECTS =====
    this.catNav = document.getElementById("cat-nav");
    this.catTitle = document.getElementById("cat-title");
    this.catImg = document.getElementById("cat-img");
    this.clickCountReadout = document.getElementById("click-count-readout");
    // ===== ADMIN PANEL DOM OBJECTS =====
    this.adminPanelParent = document.getElementById("admin-panel-parent");
    this.adminPanel = document.getElementById("admin-panel");
    this.adminShowHideBtn = document.getElementById("admin-show-hide-btn");
    this.adminInputName = document.getElementById("admin-input-name")
    this.adminInputPic = document.getElementById("admin-input-pic");
    this.adminInputClicks = document.getElementById("admin-input-clicks");
    this.adminCancelBtn = document.getElementById("admin-cancel-btn");
    this.adminSaveBtn = document.getElementById("admin-save-btn");

    // ===== CREATE NAV LI ELEMENTS =====
    for (let i = 0; i < catNames.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = catNames[i];
      // ===== NAV LI CLICK EVENTS =====
      listItem.addEventListener("click", () => {
        octopus.newCurrentCat(i);
      });
      catNav.appendChild(listItem);
    }
    // ===== IMG ELEMENT CLICK EVENT =====
    catImg.addEventListener("click", () => {
      octopus.registerClick();
    });

    // ===== ADMIN PANEL =====
    if (!adminMode) { this.adminPanelParent.innerHTML = ""; }
    // ===== SHOW HIDE BTN =====
    this.adminShowHideBtn.addEventListener("click", () => {
      octopus.updateAdminPanel();
      this.adminPanel.classList.toggle("hide");
    });
    // ===== CANCEL BTN =====
    this.adminCancelBtn.addEventListener("click", () => {
      this.adminPanel.classList.toggle("hide");
    });
    // ===== SAVE BTN =====
    this.adminSaveBtn.addEventListener("click", () => {
      octopus.saveEditedCatInfo(
        this.adminInputName.value,
        this.adminInputPic.value,
        this.adminInputClicks.value,
        this.catNav.childNodes
      );
      this.adminPanel.classList.toggle("hide");
    });
  },

  updateDisplay: (info) => {
    this.catTitle.textContent = info.name;
    this.catImg.src = info.pic;
    this.clickCountReadout.textContent = info.clicks;
  },

  updateAdminPanel: (info) => {
    this.adminInputName.value = info.name;
    this.adminInputPic.value = info.pic;
    this.adminInputClicks.value = info.clicks;
  }
}; // ===== VIEW =====

octopus.init();
