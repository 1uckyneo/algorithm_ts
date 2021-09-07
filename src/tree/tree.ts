export type Tree<T> = {
  value: T;
  children: Tree<T>[];
};

export const t: Tree<string> = {
  value: 'a',
  children: [
    {
      value: 'b',
      children: [
        { value: 'd', children: [] },
        { value: 'e', children: [] },
      ],
    },
    {
      value: 'c',
      children: [
        { value: 'f', children: [] },
        { value: 'g', children: [] },
      ],
    },
  ],
};
