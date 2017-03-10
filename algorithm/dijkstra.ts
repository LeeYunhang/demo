
type Graph = Array<Array<number>>

let graph: Graph = [
  [0, 6, 3, -1, -1, -1],
  [6, 0, 2, 5, -1, -1],
  [3, 2, 0, 3, 4, -1],
  [-1, 5, 3, 0, 2, 3],
  [-1, -1, 4, 2, 0, 5],
  [-1, -1, -1, 3, 5, 0]
]

function dijkstra(graph: Graph) {
  let copyedGraph :Graph = graph.map((value, index) => {
    return value.map(v => (v === -1? Number.MAX_VALUE / 2 : v))
  })  
  let shortestPath = copyedGraph[0].slice()
  let activeNodeIndex = 0
  const U = new Set<number>(shortestPath.map((v, i) => i))

  while (U.size) {
    let activeNode = copyedGraph[activeNodeIndex]
    let minObj = activeNode.reduce((previous, current, index) => {
      let distance = shortestPath[activeNodeIndex]
      let throughActiveNodePath = distance + copyedGraph[activeNodeIndex][current]
      let minDistance = throughActiveNodePath

      if (throughActiveNodePath < copyedGraph[0][current]) {
        copyedGraph[0][current] = throughActiveNodePath
      } else {
        minDistance = copyedGraph[0][current]
      }

      const tmp = minDistance < previous.value
      return {
        value: tmp? previous.value : current,
        index: tmp? previous.index : index
      } 
    }, { value: Number.MAX_VALUE, index: -1 })

    U.delete(activeNodeIndex)
    activeNodeIndex = minObj.index
    shortestPath[activeNodeIndex] = minObj.value

    return shortestPath
  }
}

console.log(dijkstra(graph))