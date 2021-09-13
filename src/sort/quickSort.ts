export function quickSort(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }

  const pivot = nums[0]!;
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! < pivot) {
      left.push(nums[i]!);
    } else {
      right.push(nums[i]!);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
