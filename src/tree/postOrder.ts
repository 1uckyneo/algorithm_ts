import type { BinaryTree } from './bt';
/**
 * 后序遍历：
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
    const hd = callStack.pop() as BinaryTree<T>;

    outputStack.push(hd);

    if (hd.left) {
      callStack.push(hd.left);
    }

    if (hd.right) {
      callStack.push(hd.right);
    }
  }

  while (outputStack.length) {
    const hd = outputStack.pop();
    console.log(hd!.value);
  }

  console.log('二叉树后序遍历非递归版 end');
};

export default postOrder;
