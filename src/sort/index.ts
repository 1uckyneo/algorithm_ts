import { disorderedNum } from './disorderedNums';
import { bubbleSort } from './bubbleSort';
import { selectionSort } from './selectionSort';
import { insertionSort } from './insertionSort';

const run = () => {
  // const ordered = bubbleSort(disorderedNum);
  // const ordered = selectionSort(disorderedNum);
  const ordered = insertionSort(disorderedNum);

  console.log(ordered);
};

const sort = {
  run,
};

export default sort;
