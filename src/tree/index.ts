// 普通树
import { t } from './tree';
import recDfs from './recDfs';
import dfs from './dfs';
import bfs from './bfs';

// 二叉树
import { bt } from './bt';
import recPreorder from './recPreOrder';
import recInOrder from './recInOrder';
import recPostOrder from './recPostOrder';
import preOrder from './preOrder';
import inOrder from './inOrder';
import postOrder from './postOrder';

/**
 * Tree
 */
const run = () => {
  // recDfs(t); // 树 - 深度优先遍历 = 递归版
  // dfs(t); // 树 - 深度优先遍历 = 非递归版
  bfs(t);
  // recPreorder(bt); // 二叉树 - 先序遍历 - 递归版
  // preOrder(bt); // 二叉树 - 先序遍历 - 非递归版
  // recInOrder(bt); // 二叉树 - 中序遍历 - 递归版
  // inOrder(bt); // 二叉树 - 中序遍历 - 非递归版
  // recPostOrder(bt); // 二叉树 - 后序遍历 - 递归版
  // postOrder(bt); // 二叉树 - 后序遍历 - 递归版
};

const tree = {
  run,
};

export default tree;
