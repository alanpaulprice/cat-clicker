// ===== MODEL =====
let model = {
  cats: {
    goose: {
      pic: "cat-pics/goose.JPG",
      clicks: 0
    },
    kit: {
      pic: "cat-pics/kit.JPG",
      clicks: 0
    },
    fleef: {
      pic: "cat-pics/fleef.JPG",
      clicks: 0
    },
    jimmy: {
      pic: "cat-pics/jimmy.JPG",
      clicks: 0
    },
    molly: {
      pic: "cat-pics/molly.JPG",
      clicks: 0
    }
  },

  currentCat: "",

  changeCurrentCat: (catName) => {
    model.currentCat = catName;
  },

  getCurrentCatInfo: () => {
    return {
      name: model.currentCat,
      pic: model.cats[model.currentCat].pic,
      clicks: model.cats[model.currentCat].clicks,
    };
  },

  incrementClick: () => {
    model.cats[model.currentCat].clicks++;
  }

}; // ===== MODEL =====

// ===== OCTOPUS =====
let octopus = {
  init: () => {
    view.init(Object.keys(model.cats));
  },

  newCurrentCat: (catName) => {
    model.changeCurrentCat(catName);
    view.updateDisplay(model.getCurrentCatInfo());
  },

  registerClick: (name) => {
    model.incrementClick();
    view.updateDisplay(model.getCurrentCatInfo());
  }
}; // ===== OCTOPUS =====

// ===== VIEW =====
let view = {
  init: (catNames) => {
    let catNav = document.getElementById("cat-nav");
    let catImg = document.getElementById("cat-img");

    for (let i = 0; i < catNames.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = catNames[i];

      listItem.addEventListener("click", () => {
        octopus.newCurrentCat(catNames[i]);
      });

      catNav.appendChild(listItem);
    }

    catImg.addEventListener("click", () => {
      octopus.registerClick();
    });
  },

  updateDisplay: (info) => {
    let catTitle = document.getElementById("cat-title");
    let catImg = document.getElementById("cat-img");
    let clickCountReadout = document.getElementById("click-count-readout");

    catTitle.textContent = info.name;
    catImg.src = info.pic;
    clickCountReadout.textContent = info.clicks;
  }
}; // ===== VIEW =====

octopus.init();
