function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  
}

function deepestChild() { 
  let all = document.getElementById('grand-node')
  let nextNode = all.children[0]

  while (nextNode) {
    all = nextNode
    nextNode = all.children[0]
  }

  return all
}