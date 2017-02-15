const ReactDOMServer = require('react-dom/server')
const React = require('react')
const str = ReactDOMServer.renderToString(<h1>Hello world</h1>)

console.log(str)