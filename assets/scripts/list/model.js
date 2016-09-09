'use strict';

const List = function (title) {
  this.title = title;
  this.items = [];
};

List.prototype.addItem = function (item) {
  this.items.push(item);
  return this;
};

module.exports = List;
