import { genLinkedListFromArray } from './genLinkedListFromArray';

const run = () => {
  const list = [1, 2, 3];

  const linkedList = genLinkedListFromArray(list);

  console.log(`linkedList : ${linkedList}`);

  linkedList!.forEach((val) => {
    console.log(`val : ${val}`);
  });
};

const linkedList = {
  run,
};

export default linkedList;
