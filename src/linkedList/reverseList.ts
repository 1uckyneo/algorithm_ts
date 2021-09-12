import { ListNode } from './listNode';

export function reverseList<T>(root: ListNode<T> | null): ListNode<T> | null {
  let prevPtr = null;
  let currPtr = root;

  while (currPtr) {
    const nextNode = currPtr.next;
    currPtr.next = prevPtr;
    prevPtr = currPtr;
    currPtr = nextNode;
  }

  return prevPtr;
}
