let modelView = function () {
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

  self.incrementClickCount = () => {
    self.clickCount(self.clickCount() + 1);
  };

  self.catLevel = ko.computed(() => {
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

ko.applyBindings(new modelView);
