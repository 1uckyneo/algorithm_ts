import type { Tree } from './tree';

/**
 * 树 - 广度优先遍历
 * 口诀：
 * 1. 新建一个队列，把根节点入队
 * 2. 把队头出队并访问
 * 3. 把对头的 children 挨个入队
 * 4. 重复 2、3 步知道队列为空
 */
const bfs = <T>(root?: Tree<T>) => {
  console.log('树 - 广度优先遍历 - start');

  if (!root) {
    return;
  }

  const queue = [root];

  while (queue.length) {
    const hd = queue.shift() as Tree<T>;
    const { value, children } = hd;

    console.log(value);

    children.forEach((item) => {
      queue.push(item);
    });
  }

  console.log('树 - 广度优先遍历 - end');
};

export default bfs;
