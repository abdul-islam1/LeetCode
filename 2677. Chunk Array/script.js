const chunk = function (arr, size) {
  const mainArr = [];

  const count = Math.floor(arr.length / size);
  const countDecimal = arr.length - arr.length / size;

  for (let i = 0; i < count; i++) {
    const chunkArr = [];

    for (let j = 0; j < size; j++) {
      chunkArr.push(arr.shift());
    }
    mainArr.push(chunkArr);
  }

  if (arr.length > 0) {
    mainArr.push(arr);
  }

  return mainArr;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
console.log(chunk([8, 5, 3, 2, 6], 6));
console.log(chunk([], 1));
