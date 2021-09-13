export function selectionSort(numbers: number[]) {
  const nums = [...numbers];

  for (let i = 0; i < nums.length - 1; i++) {
    let iMin = i;

    for (let j = i; j < nums.length; j++) {
      if (nums[j]! < nums[iMin]!) {
        iMin = j;
      }
    }

    if (iMin !== i) {
      const temp = nums[i]!;
      nums[i] = nums[iMin]!;
      nums[iMin] = temp;
    }
  }

  return nums;
}
