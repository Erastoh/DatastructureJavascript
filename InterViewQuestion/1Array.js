//Question

// Given an intenger array nums, return an array such that answer[i] is equal to the product of all the elements of nums except nums[i]
// Solution
// function arraySolution(arr){

//   const answer = [];
//   for(let i = 0; i<arr.length; i++){
//   // let product = 1;
//   if(arr[i] != 0){
//   answer[i] = arr[i] * arr[i]+1
    
//   }
//     return answer
  
// }
  
// }

// const nums = [1,2,3,4,5]

//   arraySolution(nums)
// console.log(arraySolution(nums))

function productExceptSelf(nums) {
  const n = nums.length;
  const output = new Array(n);

  // Calculate the prefix products
  let product = 1;
  for (let i = 0; i < n; i++) {
    output[i] = product;
    product *= nums[i];
  }
  // Calculate the suffix products and multiply with prefix products
  product = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= product;
    product *= nums[i];
  }
  return output;
}

// Example usage:
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);  // Output: [24, 12, 8, 6]
