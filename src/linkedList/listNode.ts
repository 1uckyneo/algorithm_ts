export class ListNode<T> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }

  forEach(callback: (val: T, next: ListNode<T> | null) => void) {
    let ptr = this as ListNode<T> | null;

    while (ptr) {
      callback(ptr.val, ptr.next);
      ptr = ptr.next;
    }
  }
}
