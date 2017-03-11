
type Graph = Array<Array<number>>
const MAX_VALUE = Number.MAX_VALUE / 2

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
    return value.map(v => (v === -1? MAX_VALUE / 2 : v))
  })  
  const U = new Set<number>(copyedGraph[0].map((v, i) => i))
  const S = new Set<number>()

  S.add(0)
  U.delete(0)
  while (U.size) {
    let minDistance = MAX_VALUE
    let minIndex = -1

    S.forEach(value => copyedGraph[value].forEach(v => {
      if (copyedGraph[value][v] !== MAX_VALUE / 2 && !S.has(v)) {
        const tmp = copyedGraph[0][value] + copyedGraph[value][v]
        const flag = minDistance < tmp

        minDistance = flag? minDistance : tmp
        minIndex = flag? minIndex : v
        if (tmp < copyedGraph[0][v]) { copyedGraph[0][v] = tmp }
      }
    }))

    S.add(minIndex)
    U.delete(minIndex)
  }

  return copyedGraph[0]
}

console.log(dijkstra(graph))