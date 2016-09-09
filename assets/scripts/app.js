'use strict';

const Item = require('./item/model');
const List = require('./list/model');

let list = new List('Todos');

list
  .addItem(new Item('Go to the dentist'))
  .addItem(new Item('Go to the doctor'))
  .addItem(new Item('Pair program with my buddy'));

module.exports = {
  list,
};
