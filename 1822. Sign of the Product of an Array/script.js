/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let negativeCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negativeCount++;
    } else if (nums[i] === 0) {
      return 0;
    }
  }

  return negativeCount % 2 === 0 ? 1 : -1;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));
