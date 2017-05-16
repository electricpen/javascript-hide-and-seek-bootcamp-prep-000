function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranked = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < ranked.length; i++) {
  	ranked[i].innerHTML = parseInt(ranked[i].innerHTML)+n;
  }
}

function deepestChild() {
  var start = document.querySelector('div#grand-node');
  var child = start.firstElementChild;
  console.log(child);
  while (child.firstElementChild) {
    child = child.firstElementChild;
  }
  return child;
}
