export type BinaryTree<T> = {
  value: T;
  left?: BinaryTree<T>;
  right?: BinaryTree<T>;
};

export const bt: BinaryTree<number> = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
    },
    right: {
      value: 7,
    },
  },
};
