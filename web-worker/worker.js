onmessage = event => {
  let { id, code } = event.data
  postMessage({ id, evaluated: eval(code? code:'1+1') })
}