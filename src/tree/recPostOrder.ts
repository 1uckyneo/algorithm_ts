import type { BinaryTree } from './bt';
/**
 * 二差树 - 递归版后序遍历：
 * 1. 对根节点的右子树进行后序遍历
 * 2. 对根节点的右子树进行后序遍历
 * 3. 访问根节点
 */
const postOrder = <T>(root?: BinaryTree<T>) => {
  if (!root) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
};

export default postOrder;
