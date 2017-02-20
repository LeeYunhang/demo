/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const REPLACE = Symbol('replace');
/* harmony export (immutable) */ __webpack_exports__["a"] = REPLACE;

const PROPS = Symbol('props');
/* harmony export (immutable) */ __webpack_exports__["b"] = PROPS;

const TEXT = Symbol('text');
/* harmony export (immutable) */ __webpack_exports__["c"] = TEXT;

const REORDER = Symbol('reorder');
/* harmony export (immutable) */ __webpack_exports__["d"] = REORDER;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_list_diff2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_list_diff2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_list_diff2__);
/* unused harmony export default */



let patches = {};
let externalCount = 0;

function diff(oldTree, newTree) {
  let index = 0;
  externalCount = 0;
  patches = {};
  dfsWalk(oldTree, newTree, index);

  return patches;
}

function dfsWalk(oldNode, newNode, index) {
  let currentPatches = patches[index] = [];

  if (!newNode) {} else if (typeof newNode === 'string' && typeof oldNode === 'string') {
    if (newNode !== oldNode) {
      currentPatches.push({ type: __WEBPACK_IMPORTED_MODULE_0__util__["c" /* TEXT */], node: newNode });
    }
  } else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
    const diffPatches = diffProps(oldNode, newNode);

    if (diffPatches) {
      currentPatches.push({ type: __WEBPACK_IMPORTED_MODULE_0__util__["b" /* PROPS */], props: diffPatches });
    }

    if (!isIgnoreChildren(newNode)) {
      diffChildren(oldNode.children, newNode.children, currentPatches, index);
    }
  } else {
    currentPatches.push({ type: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* REPLACE */], node: newNode });
  }

  patches[index] = currentPatches.length ? currentPatches : [];
}

function diffChildren(oldChildren, newChildren, currentPatches, index) {
  let moves = __WEBPACK_IMPORTED_MODULE_1_list_diff2___default()(oldChildren, newChildren, 'key');

  if (moves.length) {
    currentPatches.push({ type: __WEBPACK_IMPORTED_MODULE_0__util__["d" /* REORDER */], moves });
  }

  oldChildren.forEach((oldChild, i) => {
    const newChild = newChildren[i];
    index = ++externalCount;
    dfsWalk(oldChild, newChild, index);
  });
}

function diffProps(oldNode, newNode) {
  let isDiff = false;
  let propsPatches = {};
  let oldProps = oldNode.props,
      newProps = newNode.props;
  let total = Object.assign({}, oldProps, newProps);

  for (let key in total) {
    if (total[key] !== oldNode.props[key]) {
      propsPatches[key] = total[key];
      isDiff = true;
    }
  }

  return isDiff ? propsPatches : null;
}

function isIgnoreChildren(node) {
  return node.props && node.props.hasOwnProperty('ignore');
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let Element = class Element {
  constructor(tagName, props, children) {
    if (typeof tagName !== 'string') throw new TypeError('Tag name must be a string');

    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }

  render() {
    const element = document.createElement(this.tagName);

    for (let propName in this.props) {
      element.setAttribute(propName, this.props[propName]);
    }

    this.children.forEach((child, index) => {
      const _child = child instanceof Element ? child.render() : document.createTextNode(child);

      element.appendChild(_child);
    });

    return element;
  }
};


/* harmony default export */ __webpack_exports__["a"] = function (tagName, props = {}, children = []) {
  return new Element(tagName, props, children);
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* unused harmony export default */


let index = 0;
let patches = null;

function patch(node, _patches) {
  patches = _patches;
  index = 0;

  dfsWalk(node);
}

function dfsWalk(node) {
  const currentPatch = patches[index];
  const childNodes = Array.from(node.childNodes);

  childNodes.forEach((child, i) => {
    index++;
    dfsWalk(child);
  });

  applyPatches(node, currentPatch);
}

function applyPatches(node, currentPatches) {
  currentPatches.forEach((patch, i) => {
    switch (patch.type) {
      case __WEBPACK_IMPORTED_MODULE_0__util__["a" /* REPLACE */]:
        let newNode = typeof patch.node === 'string' ? document.createTextNode(patch.node) : patch.node.render();
        break;
      case __WEBPACK_IMPORTED_MODULE_0__util__["b" /* PROPS */]:
        setProps(node, patch.props);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__util__["c" /* TEXT */]:
        node.textContent = patch.node;
        break;
      case __WEBPACK_IMPORTED_MODULE_0__util__["d" /* REORDER */]:
        reorderChildren(node, patch.moves);
        break;
      default:
        throw new TypeError('Unknown patch type ' + patch.type);
    }
  });
}

function reorderChildren(node, moves) {
  let childNodes = Array.from(node.childNodes);
  let maps = {};

  childNodes.filter(c => c.nodeType === 1 && c.getAttribute('key')).forEach((c, i) => maps[key] = c.getAttribute('key'));

  moves.forEach((move, i) => {
    let _index = move.index;

    // remove item
    if (move.type === 0) {
      if (childNodes[_index] === node.childNodes[_index]) {
        node.removeChild(node.childNodes[_index]);
      }
      childNodes.splice(_index, 1);
    } else if (move.type === 1) {
      let tmp = maps[move.item.key];
      let insertedNode = tmp ? tmp : typeof move.item === 'object' ? move.item.render() : document.createTextNode(move.item);
      childNodes.splice(_index, 0, insertedNode);
      node.insertBefore(insertedNode, node.childNodes[_index] || null);
    }
  });
}

function setProps(node, props) {
  for (let propName in props) {
    if (propName) {
      node.setAttribute(propName, props[propName]);
    } else {
      node.removeAttribute(propName);
    }
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5).diff


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Diff two list in O(N).
 * @param {Array} oldList - Original List
 * @param {Array} newList - List After certain insertions, removes, or moves
 * @return {Object} - {moves: <Array>}
 *                  - moves is a list of actions that telling how to remove and insert
 */
function diff (oldList, newList, key) {
  var oldMap = makeKeyIndexAndFree(oldList, key)
  var newMap = makeKeyIndexAndFree(newList, key)

  var newFree = newMap.free

  var oldKeyIndex = oldMap.keyIndex
  var newKeyIndex = newMap.keyIndex

  var moves = []

  // a simulate list to manipulate
  var children = []
  var i = 0
  var item
  var itemKey
  var freeIndex = 0

  // fist pass to check item in old list: if it's removed or not
  while (i < oldList.length) {
    item = oldList[i]
    itemKey = getItemKey(item, key)
    if (itemKey) {
      if (!newKeyIndex.hasOwnProperty(itemKey)) {
        children.push(null)
      } else {
        var newItemIndex = newKeyIndex[itemKey]
        children.push(newList[newItemIndex])
      }
    } else {
      var freeItem = newFree[freeIndex++]
      children.push(freeItem || null)
    }
    i++
  }

  var simulateList = children.slice(0)

  // remove items no longer exist
  i = 0
  while (i < simulateList.length) {
    if (simulateList[i] === null) {
      remove(i)
      removeSimulate(i)
    } else {
      i++
    }
  }

  // i is cursor pointing to a item in new list
  // j is cursor pointing to a item in simulateList
  var j = i = 0
  while (i < newList.length) {
    item = newList[i]
    itemKey = getItemKey(item, key)

    var simulateItem = simulateList[j]
    var simulateItemKey = getItemKey(simulateItem, key)

    if (simulateItem) {
      if (itemKey === simulateItemKey) {
        j++
      } else {
        // new item, just inesrt it
        if (!oldKeyIndex.hasOwnProperty(itemKey)) {
          insert(i, item)
        } else {
          // if remove current simulateItem make item in right place
          // then just remove it
          var nextItemKey = getItemKey(simulateList[j + 1], key)
          if (nextItemKey === itemKey) {
            remove(i)
            removeSimulate(j)
            j++ // after removing, current j is right, just jump to next one
          } else {
            // else insert item
            insert(i, item)
          }
        }
      }
    } else {
      insert(i, item)
    }

    i++
  }

  function remove (index) {
    var move = {index: index, type: 0}
    moves.push(move)
  }

  function insert (index, item) {
    var move = {index: index, item: item, type: 1}
    moves.push(move)
  }

  function removeSimulate (index) {
    simulateList.splice(index, 1)
  }

  return {
    moves: moves,
    children: children
  }
}

/**
 * Convert list to key-item keyIndex object.
 * @param {Array} list
 * @param {String|Function} key
 */
function makeKeyIndexAndFree (list, key) {
  var keyIndex = {}
  var free = []
  for (var i = 0, len = list.length; i < len; i++) {
    var item = list[i]
    var itemKey = getItemKey(item, key)
    if (itemKey) {
      keyIndex[itemKey] = i
    } else {
      free.push(item)
    }
  }
  return {
    keyIndex: keyIndex,
    free: free
  }
}

function getItemKey (item, key) {
  if (!item || !key) return void 666
  return typeof key === 'string'
    ? item[key]
    : key(item)
}

exports.makeKeyIndexAndFree = makeKeyIndexAndFree // exports for test
exports.diff = diff


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__diff__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patch__ = __webpack_require__(3);




let lis = [];
var ul = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* default */])('ul', { id: 'list' }, lis);
var root = document.getElementById('root');

for (let i = 0; i < 10000; ++i) {
  lis.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__element__["a" /* default */])('li', { class: 'item' }, ['Item ' + i]));
}

root.appendChild(ul.render());

/***/ })
/******/ ]);