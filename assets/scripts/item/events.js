'use strict';

const app = require('../app');
const render = require('../app/render');

const clickItem = function (event) {
  let id = $(event.target).data('id');

  app.list.items[id].done = true;
  app.list.items[id].text = "DONE!";

  render(app);
};

const addHandlers = function () {
  $('body').on('click', 'li', clickItem);
};

module.exports = {
  addHandlers,
};
