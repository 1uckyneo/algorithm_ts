import { MinHeap } from './minHeap';

const run = () => {
  const nums = [
    3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
    5, 6,
  ];
  const k = 20;

  const minHeap = new MinHeap();

  nums.forEach((item) => {
    minHeap.insert(item);
  });

  while (minHeap.size() > k) {
    minHeap.pop();
  }

  console.log(minHeap.peak());
};

const heap = {
  run,
};

export default heap;
