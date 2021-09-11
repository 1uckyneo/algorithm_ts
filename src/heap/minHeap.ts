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
    const left = this.heap[leftIndex];
    const right = this.heap[rightIndex];

    /**
     * this.heap[index] 不能用临时变量存起来
     * 因为 swap 有副作用，在与左子节点比较后，this.heap[index] 的值可能与 left 的值 做了交换
     */
    if (left && left < this.heap[index]!) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }

    if (right && right < this.heap[index]!) {
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
