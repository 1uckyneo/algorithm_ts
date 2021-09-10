/**
 * 最小堆类
 */
export class MinHeap<T extends number = number> {
  heap: T[];

  constructor() {
    this.heap = [];
  }

  getParentIndex(index: number) {
    return (index - 1) >> 1;
  }

  getLeftIndex(index: number) {
    return index * 2 + 1;
  }

  getRightIndex(index: number) {
    return index * 2 + 2;
  }

  swap(xIndex: number, yIndex: number) {
    const temp = this.heap[xIndex]!;
    this.heap[xIndex] = this.heap[yIndex]!;
    this.heap[yIndex] = temp;
  }

  shiftUp(index: number) {
    if (index === 0) {
      return;
    }

    const parentIndex = this.getParentIndex(index);

    if (this.heap[parentIndex]! > this.heap[index]!) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(index: number) {
    if (this.heap.length <= 1) {
      return;
    }

    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    // this.heap[index] 这些不要用临时变量存起来，因为swap有副作用，可能会导致数组的顺序变化
    if (this.heap[leftIndex] && this.heap[leftIndex]! < this.heap[index]!) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }

    if (this.heap[rightIndex] && this.heap[rightIndex]! < this.heap[index]!) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  /**
   * 插入元素
   */
  insert(value: T) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  /**
   * 删除栈顶元素
   */
  pop() {
    const last = this.heap.pop();

    if (this.heap.length >= 1) {
      this.heap[0] = last!;
      this.shiftDown(0);
    }
  }

  peak() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  print() {
    console.log(this.heap);
  }
}
