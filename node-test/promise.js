const { promisify } = require('util')
const fs = require('fs')

const readFile = promisify(fs.readFile)

async function test() {
  try {
    let file = await readFile('./promise.js', 'utf-8')
    console.log(file)
  } catch (e) {
    console.error(e)
  }
}

test()
console.log('我是异步')