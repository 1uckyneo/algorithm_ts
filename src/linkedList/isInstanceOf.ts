type PrototypeStruct = {
  prototype: Object;
};

export function isInstanceOf<T extends PrototypeStruct = ObjectConstructor>(
  a: object,
  b: T
) {
  let ptr: object | null = a;

  while (ptr) {
    if (ptr === b.prototype) {
      return true;
    }

    ptr = Reflect.getPrototypeOf(ptr);
  }

  return false;
}
