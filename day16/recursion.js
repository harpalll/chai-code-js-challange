// basic recursion
// const factorial = (num) => {
//     if(!num) return new Error("Please Provide A Number.")
//     if (num <=1) return 1;
//     return num * factorial(num-1)
// }

// console.log(factorial(4));
// console.log(factorial());

// function fibonacci(n) {
// if (!n) return new Error("Please Provide A  Number")
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5));

// Recursion with arrays
// const sumOfAllElements = (arr) => {
//     if(!Array.isArray(arr) || arr.length === 0) throw new Error("Please provide an array with elements");

//     const helper = (arr, idx) => {
//         if (idx<0) return 0;

//         return arr[idx] + helper(arr,idx-1)
//     }

//     return helper(arr,arr.length - 1)
// }

// console.log(sumOfAllElements([1,2,3]));

// const findMaximumElement = (arr) => {
//     if(!Array.isArray(arr) || arr.length === 0) throw new Error("Please Provide an array with elements.")

//     const helper = (arr,idx) => {
//         if(idx<0) return arr[0];
//         return Math.max(arr[idx], helper(arr,idx-1))        
//     }

//     return helper(arr, arr.length - 1)
// }

// console.log(findMaximumElement([1,2,3,4]));


// String Manipulation With Recursion
// const reverseStr = (str) => {
//     if (typeof str !== "string" || str.length === 0) {
//         throw new Error("Please provide a non-empty string");
//     }

//     if (str.length <= 1) return str;

//     return str[str.length - 1] + reverseStr(str.slice(0, -1));
// };
// console.log(reverseStr("hello"));

// const checkPalindrom = (str) => {
//     // Ensure the input is a valid non-empty string
//     if (typeof str !== "string" || str.length === 0) {
//         throw new Error("Please provide a non-empty string");
//     }

//     // Helper function to check palindrome recursively
//     const isPalindrome = (s, start, end) => {
//         if (start >= end) {
//             return true; // Base case: If we have checked all characters
//         }
//         if (s[start] !== s[end]) {
//             return false; // Characters at start and end don't match
//         }
//         return isPalindrome(s, start + 1, end - 1); // Recursive case
//     };

//     // Check if the string is a palindrome
//     if (isPalindrome(str, 0, str.length - 1)) {
//         return `${str} is a palindrome`;
//     } else {
//         return `${str} is not a palindrome`;
//     }
// }

// console.log(checkPalindrom("ooo"));

// recursive search

// binary search
// const binarySearch = (sortedArr, searchElement, start = 0, end = sortedArr.length - 1) => {
//     if(start > end) return -1;

//     const mid = Math.floor((start + end) / 2);

//     if(sortedArr[mid] === searchElement) return mid;

//     if(sortedArr[mid] > searchElement) {
//         return binarySearch(sortedArr,searchElement, start, mid - 1)
//     }

//     return binarySearch(sortedArr,searchElement, mid + 1, end);
// }

// console.log(`Element Found at (index): ${binarySearch([1,2,3,4,5],2)}`);
// write a recursive function to count occurences of a target element in an array.log the result for a few test cases.
// normal
// const findDuplicateCount = (arr, target) => {
//     let counter = 0;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (element === target) counter++;
//     }

//     return counter;
// }

// recursive
// const findDuplicateCount = (arr, target, index= 0) => {
//     if(index > arr.length) return 0; 
//     const count = arr[index] === target ? 1:0;
//     return count + findDuplicateCount(arr,target,index+1)
// }

// console.log(findDuplicateCount([1,22,22,2,22,22,33,333], 22));

// tree traversal 
// write a recursive function to perform an in-order traversal of a binary tree.log the nodes as they are visited.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// const inOrderTraversal = (node) => {
//     if (node === null) {
//         return;
//     }

//     inOrderTraversal(node.left);
//     console.log(node.value);
//     inOrderTraversal(node.right);
// };

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// console.log("In-Order Traversal:");
// inOrderTraversal(root);

// write a recursive function to calculate the depth of a binary tree,log the result for a few test cases.
// const calculateDepth = (node) => {
//     if (node === null) {
//         return 0;
//     }

//     const leftDepth = calculateDepth(node.left);
//     const rightDepth = calculateDepth(node.right);

//     return Math.max(leftDepth, rightDepth) + 1;
// };

// // Example usage:
// const root2 = new TreeNode(1);
// root2.left = new TreeNode(2);
// root2.right = new TreeNode(3);
// root2.left.left = new TreeNode(4);
// root2.left.right = new TreeNode(5);

// console.log("Depth of the tree:", calculateDepth(root2)); // Output: 3

// const root3 = new TreeNode(1);
// root3.left = new TreeNode(2);
// root3.right = new TreeNode(3);
// root3.left.left = new TreeNode(4);

// console.log("Depth of the tree:", calculateDepth(root3)); // Output: 3

// const root4 = new TreeNode(1);

// console.log("Depth of the tree:", calculateDepth(root4)); // Output: 1

// const root5 = null;

// console.log("Depth of the tree:", calculateDepth(root5)); // Output: 0
