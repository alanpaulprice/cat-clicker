let Cat = function () {
  const self = this;

  self.name = ko.observable("Goose");
  self.imgSrc = ko.observable("./cat-pics/goose.JPG");
  self.clickCount = ko.observable(0);
  self.nicknames = ko.observableArray([
    "First Nickname",
    "Second Nickname",
    "Third Nickname",
    "Fourth Nickname",
    "Fifth Nickname"
  ]);

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

  self.currentCat = ko.observable(new Cat());

  self.incrementClickCount = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

};

ko.applyBindings(new modelView);
