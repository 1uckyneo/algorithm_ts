export function insertionSort(numbers: number[]) {
  const nums = [...numbers];

  for (let i = 1; i < nums.length; i++) {
    const temp = nums[i]!;
    let j = i;

    while (j > 0) {
      if (nums[j - 1]! > temp) {
        nums[j] = nums[j - 1]!;
      } else {
        break;
      }

      j--;
    }

    nums[j] = temp;
  }

  return nums;
}
