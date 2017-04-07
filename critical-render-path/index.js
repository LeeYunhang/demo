var button = document.getElementById('switch')
var image = document.getElementById('emma')

var _status = 1;

button.onclick = function(e) {
  if (_status === 1) {
    image.src = './emma1.jpg'
    _status = 2
  } else if (_status === 2) {
    image.src = './emm2.jpg'
    _status = 1
  }
}
