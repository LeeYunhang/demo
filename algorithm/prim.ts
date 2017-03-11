type Graph = Array<Array<number>>

let graph: Graph = [
  [0, 6, 3, -1, -1, -1],
  [6, 0, 2, 5, -1, -1],
  [3, 2, 0, 3, 4, -1],
  [-1, 5, 3, 0, 2, 3],
  [-1, -1, 4, 2, 0, 5],
  [-1, -1, -1, 3, 5, 0]
]

class Edge {
  constructor(public src: number, public dest: number, public dist: number) 
  {

  }
  
  equal(edge: Edge) {
    return edge.dest === this.dest && edge.src === this.src
  }
}

function prim(graph: Graph) {
  let tree :Graph = new Array(graph.length).map((v, i) => [i])
  const V = new Set<number>(new Array(graph.length).map((v, i) => i))
  const U = new Set<number>([0])
  let selectedEdges: Array<Edge> = []
  let currentNode = 0
  V.delete(0)

  while (V.size) {
    let currentEdge = graph[currentNode]
        .filter((v, i) => v !== -1 && !U.has(i))
        .map((v, i) => new Edge(currentNode, i, v))
    selectedEdges.push(...currentEdge)

    let shortestEdge = selectedEdges.reduce((pre, cur, index) => {
      return cur.dist < pre.dist? cur : pre
    }, selectedEdges[0])

    const { src, dest } = shortestEdge
    tree[src].push(dest)
    U.add(shortestEdge.dest)
    V.delete(shortestEdge.dest)
  }

  return tree
}