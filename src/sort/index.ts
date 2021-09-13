import { disorderedNum } from './disorderedNums';
import { bubbleSort } from './bubbleSort';
import { selectionSort } from './selectionSort';

const run = () => {
  // const ordered = bubbleSort(disorderedNum);
  const ordered = selectionSort(disorderedNum);

  console.log(ordered);
};

const sort = {
  run,
};

export default sort;
