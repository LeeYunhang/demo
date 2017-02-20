import el from './element'
import diff from './diff'
import patch from './patch'


let lis = []
var ul = el('ul', {id: 'list'}, lis)
var root = document.getElementById('root')


for(let i = 0; i < 10000; ++i) {
  lis.push(el('li', {class: 'item'}, ['Item ' + i]))
  
}

root.appendChild(ul.render())