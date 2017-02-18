

class Element {
  constructor(tagName, props, children) {
    if (typeof tagName !== 'string')
      throw new TypeError('Tag name must be a string')
    
    this.tagName = tagName
    this.props = props
    this.children = children
  }
  
  render() {
    const element = document.createElement(this.tagName)

    for(let propName in this.props) {
      element.setAttribute(propName, this.props[propName])
    }

    this.children.forEach((child, index) => {
      const _child = child instanceof Element? 
        child.render() : document.createTextNode(child)
      
      element.appendChild(_child)
    })

    return element
  }
}

export default function (tagName, props = {}, children = []) {
  return new Element(tagName, props, children)
}