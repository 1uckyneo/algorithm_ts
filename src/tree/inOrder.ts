import type { BinaryTree } from './bt';
/**
 * 二差树 - 非递归版中序遍历：
 * 1. 对根节点的右子树进行中序遍历
 * 2. 访问根节点
 * 3. 对根节点的右子树进行中序遍历
 */
const inOrder = <T>(root?: BinaryTree<T>) => {
  console.log('二叉树中序遍历非递归版 start');

  if (!root) {
    return;
  }

  const callStack: BinaryTree<T>[] = [];
  let ptr: BinaryTree<T> | undefined = root;

  while (callStack.length || ptr) {
    while (ptr) {
      callStack.push(ptr);
      ptr = ptr.left;
    }

    const tp = callStack.pop();

    console.log(tp!.value);

    ptr = tp?.right;
  }

  console.log('二叉树中序遍历非递归版 end');
};

export default inOrder;
