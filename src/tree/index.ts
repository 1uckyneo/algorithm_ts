import { bt } from './bt';
import recPreorder from './recPreOrder';
import recInOrder from './recInOrder';
import recPostOrder from './recPostOrder';

/**
 * Tree
 */
const run = () => {
  /**
   * 二叉树
   * 先序遍历
   * 递归版
   */
  // recPreorder(bt);
  /**
   * 二叉树
   * 中序遍历
   * 递归版
   */
  // recInOrder(bt);
  /**
   * 二叉树
   * 后序遍历
   * 递归版
   */
  recPostOrder(bt);
};

const tree = {
  run,
};

export default tree;
