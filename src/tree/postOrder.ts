import type { BinaryTree } from './bt';
/**
 * 二差树 - 非递归版后序遍历：
 * 1. 对根节点的右子树进行后序遍历
 * 2. 对根节点的右子树进行后序遍历
 * 3. 访问根节点
 */
const postOrder = <T>(root?: BinaryTree<T>) => {
  console.log('二叉树后序遍历非递归版 start');

  if (!root) {
    return;
  }

  const callStack = [root];
  const outputStack: BinaryTree<T>[] = [];

  while (callStack.length) {
    const tp = callStack.pop() as BinaryTree<T>;

    outputStack.push(tp);

    if (tp.left) {
      callStack.push(tp.left);
    }

    if (tp.right) {
      callStack.push(tp.right);
    }
  }

  while (outputStack.length) {
    const tp = outputStack.pop();
    console.log(tp!.value);
  }

  console.log('二叉树后序遍历非递归版 end');
};

export default postOrder;
