import type { Tree } from './tree';

/**
 * 树 - 深度优先遍历 = 递归版
 */
const dfs = <T>(root?: Tree<T>) => {
  if (!root) {
    return;
  }

  console.log(root.value);

  root.children.forEach((child) => {
    dfs(child);
  });
};

export default dfs;
