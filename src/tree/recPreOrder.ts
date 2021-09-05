import type { BinaryTree } from './bt';
/**
 * 前序遍历：
 * 1. 访问根节点
 * 2. 对根节点的左子树进行前序遍历
 * 3. 对根节点的右子树进行前序遍历
 */
const preOrder = <T>(root?: BinaryTree<T>) => {
  if (!root) {
    return;
  }

  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
};

export default preOrder;
