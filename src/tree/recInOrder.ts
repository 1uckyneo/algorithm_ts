import type { BinaryTree } from './bt';
/**
 * 二差树 - 递归版中序遍历：
 * 1. 对根节点的右子树进行中序遍历
 * 2. 访问根节点
 * 3. 对根节点的右子树进行中序遍历
 */
const inOrder = <T>(root?: BinaryTree<T>) => {
  if (!root) {
    return;
  }

  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
};

export default inOrder;
