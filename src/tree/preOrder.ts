import type { BinaryTree } from './bt';
/**
 * 二差树 - 非递归版前序遍历：
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
    const tp = callStack.pop();

    console.log(tp!.value);

    if (tp?.right) {
      callStack.push(tp.right);
    }

    if (tp?.left) {
      callStack.push(tp.left);
    }
  }

  console.log('二叉树前序遍历非递归版 end');
};

export default preOrder;
