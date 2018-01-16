let initialCats = [{
  name: "Goose",
  imgSrc: "./cat-pics/goose.JPG",
  nicknames: ["Big Fucker", "Mink", "Dinnymink"],
  clickCount: 0
},
{
  name: "Kit",
  imgSrc: "./cat-pics/kit.JPG",
  nicknames: ["Piss", "Squirrel", "Strutter"],
  clickCount: 0
},
{
  name: "Fleef",
  imgSrc: "./cat-pics/fleef.JPG",
  nicknames: ["Beef", "Roast Beef", "Freef"],
  clickCount: 0
},
{
  name: "Jimmy",
  imgSrc: "./cat-pics/jimmy.JPG",
  nicknames: ["Slug", "Spring Jim", "Fruit Bat"],
  clickCount: 0
},
{
  name: "Molly",
  imgSrc: "./cat-pics/molly.JPG",
  nicknames: ["Mein Kritler", "Crab", "Chittin"],
  clickCount: 0
}];

// ===== CAT =====
let Cat = function (data) {
  const self = this;

  self.name = ko.observable(data.name);
  self.imgSrc = ko.observable(data.imgSrc);
  self.nicknames = ko.observableArray(data.nicknames);
  self.clickCount = ko.observable(data.clickCount);

  self.catLevel = ko.computed(function () {
    if (self.clickCount() < 5) {
      return "Newborn";
    } else if (self.clickCount() < 10) {
      return "Infant";
    } else if (self.clickCount() < 15) {
      return "Teen";
    } else if (self.clickCount() < 20) {
      return "Adult";
    } else {
      return "Elderly";
    }
  });
}; // CAT

// ===== VIEWMODEL =====
let modelView = function () {
  const self = this;

  self.catList = ko.observableArray([]);

  initialCats.forEach(function (info) {
    self.catList.push(new Cat(info));
  });

  self.currentCat = ko.observable(self.catList()[0]);

  self.changeCurrentCat = function () {
    let thing = this;
    self.catList().forEach(function (item, index) {
      if (item.name() === thing.name()) {
        self.currentCat(self.catList()[index]);
        return;
      }
    });
  };

  self.incrementClickCount = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

}; // VIEWMODEL

ko.applyBindings(new modelView());
