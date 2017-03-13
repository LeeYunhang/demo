/**
 * name MaxHeap
 */
class MaxHeap {
  heap: number[] = []
  constructor(...datas: number[]) {
    datas.forEach(value => this.add(value))
  }

  add(data: number): MaxHeap {
    let currentIndex = this.heap.length
    let parentIndex = currentIndex % 2 === 0? 
        (currentIndex - 2) / 2 : (currentIndex - 1) / 2
    
    this.heap.push(data)
    while (parentIndex >= 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      let [a, b] = [this.heap[currentIndex], this.heap[parentIndex]]
      
      this.heap[currentIndex] = b
      this.heap[parentIndex] = a
      currentIndex = parentIndex
      parentIndex = currentIndex % 2 === 0? 
          (currentIndex - 2) / 2 : (currentIndex - 1) / 2
    }

    return this
  }

  get() {
    return this.heap[0]
  }

  delete() {
   let index = 0

   while (index < this.size()) {
     let leftIndex = 2 * index + 1
     let rightIndex = leftIndex + 1
     
     if (this.heap[leftIndex] === undefined) {
       index = leftIndex
       continue
     } else if (this.heap[rightIndex] === undefined) {
       this.heap[index] = this.heap[leftIndex]
       this.heap[leftIndex] = undefined
       index = leftIndex
       continue
     } else {
      let tmp = this.heap[leftIndex] > this.heap[rightIndex]?
          leftIndex : rightIndex

      this.heap[index] = this.heap[leftIndex]
      this.heap[leftIndex] = undefined
      index = leftIndex
      continue
     }
   }

   return this
  }

  contains(data: number): boolean {
    let index = 0

    while (index < this.size()) {
      if (data === this.heap[index]) {
        return true
      } else if (data < this.heap[index]) {
        index = index * 2 + 1
      } else {
        index = index * 2 + 2
      }
    }

    return false
  }

  size() { return this.heap.length }

}
