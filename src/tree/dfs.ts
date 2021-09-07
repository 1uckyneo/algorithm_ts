import type { Tree } from './tree';

/**
 * 树 - 深度优先遍历 = 非递归版
 */
const dfs = <T>(root?: Tree<T>) => {
  console.log('树 - 深度优先遍历 - start');

  if (!root) {
    return;
  }

  const stack = [root];

  while (stack.length) {
    const hd = stack.pop() as Tree<T>;
    const { children, value } = hd;

    console.log(value);

    for (let i = children.length - 1; i >= 0; i--) {
      stack.push(children[i] as Tree<T>);
    }
  }

  console.log('树 - 深度优先遍历 - end');
};

export default dfs;
