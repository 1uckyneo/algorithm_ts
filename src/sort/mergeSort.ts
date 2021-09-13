/**
 * 1. 新建一个数组 res， 用于存放最终排序后的数组
 * 2. 比较两个有序数组的头部，较小者出队并推入 res 中
 * 3. 如果两个数组还有值，就重复第 2 步
 */
export function mergeSort(nums: number[]) {
  if (nums.length < 2) {
    return nums;
  }

  const res: number[] = [];
  const mid = nums.length >> 1;
  const left = nums.slice(0, mid);
  const right = nums.slice(mid, nums.length);
  const orderedLeft = mergeSort(left);
  const orderedRight = mergeSort(right);

  while (orderedLeft.length || orderedRight.length) {
    if (orderedLeft.length && orderedRight.length) {
      res.push(
        orderedLeft[0]! < orderedRight[0]!
          ? (orderedLeft.shift() as number)
          : (orderedRight.shift() as number)
      );
    } else if (orderedLeft.length) {
      res.push(orderedLeft.shift() as number);
    } else {
      res.push(orderedRight.shift() as number);
    }
  }

  return res;
}
