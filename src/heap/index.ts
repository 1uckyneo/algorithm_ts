import { MinHeap } from './minHeap';

const run = () => {
  const h = new MinHeap();
  h.insert(16);
  h.insert(11);
  h.insert(3);
  h.insert(6);
  h.insert(8);
  h.insert(1);
  h.insert(5);
  h.insert(9);
  h.pop();
  h.pop();
  h.pop();
  h.pop();
  h.pop();
  h.pop();
  h.pop();
  h.pop();
  h.pop();
  h.pop();
  h.pop();
};

const heap = {
  run,
};

export default heap;
