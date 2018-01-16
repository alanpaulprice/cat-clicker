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
};

let modelView = function () {
  const self = this;

  self.currentCat = ko.observable(new Cat({
    name: "Goose",
    imgSrc: "./cat-pics/goose.JPG",
    nicknames: ["Goosey", "Goose Roast Beef", "Goosety Goose Goose", "Goose Goosington", "Colonel Goosetard"],
    clickCount: 0
  }));

  self.incrementClickCount = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

};

ko.applyBindings(new modelView);
