let modelView = function () {

  this.name = ko.observable("Goose");
  this.imgSrc = ko.observable("./cat-pics/goose.JPG");
  this.clickCount = ko.observable(0);
  this.incrementClickCount = function () {
    this.clickCount(this.clickCount() + 1);
  };

};

ko.applyBindings(new modelView);
