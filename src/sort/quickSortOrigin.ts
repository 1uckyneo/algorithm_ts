/**
 * 快速排序之原地排序
 */
export function quickSortOrigin(nums: number[]) {
  const quickSort = (arr: number[], l?: number, r?: number) => {
    const left = l ?? 0;
    const right = r ?? arr.length;

    if (left < right) {
      const partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  };

  const partition = (arr: number[], left: number, right: number) => {
    //分区操作
    const pivot = left; //设定基准值（pivot）
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
      if (arr[i]! < arr[pivot]!) {
        swap(arr, i, index);
        index++;
      }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
  };

  const swap = (arr: number[], i: number, j: number) => {
    let temp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = temp;
  };

  return quickSort(nums);
}
