'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const wrapper = document.createElement('ul');

document.body.prepend(wrapper);
wrapper.setAttribute('id', 'tree');

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  element.append(ul);п

  for (const key in data) {
    const values = data[key];

    if (Object.keys(values).length !== 0) {
      createTree(element, values);
    } else {
      const li = document.createElement('li');

      li.innerHTML = key;
      ul.append(li);
    }
  }
}
createTree(tree, food);

// if(data) {
//   createTree(element, data);
// } else {
//   const ul = document.createElement('ul')
//   document.body.prepend(ul);

//   for (let key in data) {
//     const li = document.createElement('li');
//     li.innerHTML = key;
//     wrapper.append(li)
//   }
// }
