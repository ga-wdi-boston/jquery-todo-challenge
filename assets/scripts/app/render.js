'use strict';

const renderList = (list) => {
  $('.content').html(`
    <h1>${list.title}</h1>
    <ul>
    </ul>
  `);
};

const renderItem = (item, id) => {
  $('.content > ul').append(
    `<li data-id=${id}>${item.text}</li>`
  );
};

const render = (data) => {
  renderList(data.list);
  data.list.items.forEach((item, index) => {
    renderItem(item, index);
  });
};

module.exports = render;
