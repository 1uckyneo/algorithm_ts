import { disorderedNum } from './disorderedNums';
import { bubbleSort } from './bubbleSort';
import { selectionSort } from './selectionSort';
import { insertionSort } from './insertionSort';
import { mergeSort } from './mergeSort';

const run = () => {
  // const ordered = bubbleSort(disorderedNum);
  // const ordered = selectionSort(disorderedNum);
  // const ordered = insertionSort(disorderedNum);
  const ordered = mergeSort(disorderedNum);

  console.log(ordered);
};

const sort = {
  run,
};

export default sort;
