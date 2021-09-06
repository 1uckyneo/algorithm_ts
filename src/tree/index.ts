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
  /**
   * 二叉树
   * 先序遍历
   * 递归版
   */
  // recPreorder(bt);
  /**
   * 二叉树
   * 先序遍历
   * 非递归版
   */
  // preOrder(bt);
  /**
   * 二叉树
   * 中序遍历
   * 递归版
   */
  // recInOrder(bt);
  /**
   * 二叉树
   * 中序遍历
   * 非递归版
   */
  // inOrder(bt);
  /**
   * 二叉树
   * 后序遍历
   * 递归版
   */
  recPostOrder(bt);
  /**
   * 二叉树
   * 后序遍历
   * 非递归版
   */
  postOrder(bt);
};

const tree = {
  run,
};

export default tree;
