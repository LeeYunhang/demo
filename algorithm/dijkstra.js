var graph = [
    [0, 6, 3, -1, -1, -1],
    [6, 0, 2, 5, -1, -1],
    [3, 2, 0, 3, 4, -1],
    [-1, 5, 3, 0, 2, 3],
    [-1, -1, 4, 2, 0, 5],
    [-1, -1, -1, 3, 5, 0]
];
function dijkstra(graph) {
    var copyedGraph = graph.map(function (value, index) {
        return value.map(function (v) { return (v === -1 ? Number.MAX_VALUE / 2 : v); });
    });
    var shortestPath = copyedGraph[0].slice();
    var activeNodeIndex = 0;
    var U = new Set(shortestPath.map(function (v, i) { return i; }));
    while (U.size) {
        var activeNode = copyedGraph[activeNodeIndex];
        var minObj = activeNode.reduce(function (previous, current, index) {
            var distance = shortestPath[activeNodeIndex];
            var throughActiveNodePath = distance + copyedGraph[activeNodeIndex][current];
            var minDistance = throughActiveNodePath;
            if (throughActiveNodePath < copyedGraph[0][current]) {
                copyedGraph[0][current] = throughActiveNodePath;
            }
            else {
                minDistance = copyedGraph[0][current];
            }
            var tmp = minDistance < previous.value;
            return {
                value: tmp ? previous.value : current,
                index: tmp ? previous.index : index
            };
        }, { value: Number.MAX_VALUE, index: -1 });
        U["delete"](activeNodeIndex);
        activeNodeIndex = minObj.index;
        shortestPath[activeNodeIndex] = minObj.value;
        return shortestPath;
    }
}
console.log(dijkstra(graph));
