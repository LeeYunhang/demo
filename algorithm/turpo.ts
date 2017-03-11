type Graph = Array<Array<number>>


function topoSort(graph: Graph) : number[] | undefined {
  let topoOrder: Array<number> = []
  let copyedGraph = graph.map(value => value.slice())
  let indegree: Array<number> = new Array(graph.length).map(() => 0)
  
  while (indegree.length < copyedGraph.length) {
    
    copyedGraph.forEach(value => value.forEach((v, i) => {
      if (v !== -1) { indegree[i]++ }
    }))
    let finded = indegree.findIndex(value => !!value)
    
    if (finded === -1) { return }
    copyedGraph.forEach((value, index) => value.forEach((v, i) => {
      if (index === finded || i === finded) {
        copyedGraph[index][i] = -1
      }
    }))
    indegree.push(finded)
  }

  return indegree
}