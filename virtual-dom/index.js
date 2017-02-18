import el from './element'
import diff from './diff'
import patch from './patch'

var ul1 = el('ul', {id: 'list'}, [
  el('li', {class: 'item'}, ['Item 1']),
  el('li', {class: 'item'}, ['Item 2']),
  el('li', {class: 'item'}, ['Item 3'])
])

var ul2 = el('ul', {id: 'list'}, [
  el('li', {class: 'item'}, ['Item 1']),
  el('li', {class: 'item'}, ['Item 2']),
  el('li', {class: 'item1'}, ['Item 4'])  
])


var root = document.getElementById('root')
root.appendChild(ul1.render())

document.addEventListener('click', () => {
  console.log('ok')
  patch(document.getElementById('list'), diff(ul1, ul2))
  
})