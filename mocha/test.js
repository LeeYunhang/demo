let fs = require('fs')

let getFile = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) { reject(err) }
      else {
        resolve()
      } 
    })
  })
}

describe('File', () => {
  describe('Get a file\' content', () => {
    it('should return the content of specified file', function(done){
      getFile('./test.js').then(done)
    })
  })
})