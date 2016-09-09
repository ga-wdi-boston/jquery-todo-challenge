'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');

const app = require('./app');
const render = require('./app/render');
const items = require('./item/events');

$(() => {
  render(app);
  items.addHandlers();
});
