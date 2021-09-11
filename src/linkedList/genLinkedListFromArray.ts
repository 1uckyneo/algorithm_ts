import { ListNode } from './linkedList';

export function genLinkedListFromArray<T>(arr: T[]) {
  if (arr.length) {
    const list = [...arr];
    const first = list.shift() as T;
    const node = new ListNode(first);
    let ptr = node;

    list.forEach((item) => {
      ptr.next = new ListNode(item);
      ptr = ptr.next;
    });

    return node;
  }

  return undefined;
}
