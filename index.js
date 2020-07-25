function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const lis=document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML,10)+n
}
}

function deepestChild() {
  let a=document.querySelector('div.grand-node')
  let b = a.children[0]
  while (b)  {
    a = b
    b = a.children[0]
  }
  return a;
}
