onmessage = event => {
  switch(event.data) {
    case 'start':
      postMessage('I\'m started!')
      while(true) {}
      break
  }
}