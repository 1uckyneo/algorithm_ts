import type { BinaryTree } from './bt';
/**
 * 前序遍历：
 * 1. 访问根节点
 * 2. 对根节点的左子树进行前序遍历
 * 3. 对根节点的右子树进行前序遍历
 */
const preOrder = <T>(root?: BinaryTree<T>) => {
  console.log('二叉树前序遍历非递归版 start');

  if (!root) {
    return;
  }

  const callStack = [root];

  while (callStack.length) {
    const hd = callStack.pop();

    console.log(hd!.value);

    if (hd?.right) {
      callStack.push(hd.right);
    }

    if (hd?.left) {
      callStack.push(hd.left);
    }
  }

  console.log('二叉树前序遍历非递归版 end');
};

export default preOrder;
