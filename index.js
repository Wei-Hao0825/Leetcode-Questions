// 1. Running Sum
// Given an array of numbers
// Calculating each element number sums with all its previous numbers
const runningSum = function(nums) {
    // Looping for the argument Array from the second element
    // first element do not need calculate
    for (let i = 1; i < nums.length; i++) {
        // adding the current index with its previous index in each loop
        nums[i] += nums[i - 1]
    }
    return nums
};
console.log(`Problem 1 testing result ${runningSum([1, 1, 1, 1, 1])}`)

// 2. Richest Customer Wealth
// You are given an m x n integer grid accounts 
// where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
// Return the wealth that the richest customer has.
// Functions have use
// a. Math.max() --- finding the largest number of the given numbers
// b. Array.map() --- iterating the array to use function
// c. Array.reduce() --- calculating the sum of the secondary Array elements
// d. use distructur operator('...') to set the mapped Array to be a distinct variable 
const maximumWealth = function(accounts) {
    return Math.max(...accounts.map(
        e => e.reduce(
            (a, b) => a + b
        )
    ))
};
console.log(maximumWealth([[1,2,3],[3,2,1]])) // The result should be 6.

// 3. Kids with the greatest number of candies
// Given the array candies and the integer extraCandies 
// where candies[i] represents the number of candies that the ith kid has.
// Functions have use
// a. Math.max() --- to find the current greatest number of candies
// b. Array.map() --- iterating each element and check the condition
// each kid's current number of candies plus extraCandies is larger or equal to
// the current greatest number, return a boolean value.
const kidsWithCandies = function(candies, extraCandies) {
    const greatestCandies = Math.max(...candies)
    return candies.map(element =>{
        const candiesWithExtraCandies = element + extraCandies
            return candiesWithExtraCandies >= greatestCandies
    })
};
console.log(kidsWithCandies([1, 2, 2, 3], 1)) // [false, true, true, true]

// 4. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Functions have use
// a. String.split() --- Spliting the given string with a specific charactor
// The return value would be an Array of each word in that String.
// b. Array.join() --- Join each element in the array with a charactor.
const defangIPaddr = function(address) {
    let addressNum = address.split('.')
    return addressNum.join('[.]')
};

const ipAddress = '127.0.0.1'

console.log(defangIPaddr(ipAddress))

// 5. Number of Good Pairs
// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.
// Functions have use
// for loop nesting another for loop
const numIdenticalPairs = function(nums) {
    let goodPairs = []
    for (let i = 0; i < nums.length; i++) {
        for(let j = i +1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                goodPairs++
            }
        }
    }
    return goodPairs
};
const goodPair = [1,2,3,1,1,3]
console.log(numIdenticalPairs(goodPair));

// 6. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels 
// and stones representing the stones you have 
// Each character in stones is a type of stone you have 
// You want to know how many of the stones you have are also jewels
// Letters are case sensitive, 
// so "a" is considered a different type of stone from "A".
// Functions have use
// a. String.split() ---
// b. Array.filter() ---
// c. String.includes() ---
const numJewelsInStones = function(jewels, stones) {
    return stones.split('').filter(e => jewels.includes(e)).length
    // returning the length of the founded jewels array as the number
};
const jewelsType = 'abABC'
const stonesType = 'AAAACCBssdaa'
console.log(numJewelsInStones(jewelsType, stonesType))

// 7. Goal Parser Interpretation
// You own a Goal Parser that can interpret a string command.
// The command consists of an alphabet of "G", "()" and/or "(al)" in some order.
// The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al".
// The interpreted strings are then concatenated in the original order.
// Functions have use
// a. String.replace() with an regular expression
// b. A call back function as second argument check the matched part's length
// to determine is '()' or '(al)'
 
const interpret = function(command) {
    return command.replace(/\(.*?\)/g, matched => {
        if (matched.length > 2) {
            return 'al'
        } else {
            return 'o'
        }
    })
};
console.log(interpret('G()(al)'))

// 8. Decode XORed Array
// There is a hidden integer array arr that consists of n non-negative integers.
// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1].
// For example, if arr = [1,0,2,1], then encoded = [1,2,3].
// You are given the encoded array. 
// You are also given an integer first, that is the first element of arr, i.e. arr[0].
// Return the original array arr. It can be proved that the answer exists and is unique.
// 'XOR' written as 'a ^ b'

const decode = function(encoded, first) {
    let result = [first]
    for (let i = 0; i < encoded.length; i++) {
        result.push(result[i] ^ encoded[i])
    }
    return result
};
console.log(decode([6,5,4,8], 2))

// 9. How Many Numbers Are Smaller Than the Current Number
// Given the array nums, 
// for each nums[i] find out how many numbers in the array are smaller than it. 
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.
// Functions use
// a. Array.sort() --- 
// b. Array.map() ---
// c. Array.indexOf --- 
const smallerNumbersThanCurrent = (nums) => {
    const sorted = [...nums].sort((a, b) => a - b)
    return nums.map(n => sorted.indexOf(n))
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

// 10. Shuffle String
// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.
// Functions use
// a. String.split() --- split the given String 's' into an Array.
// b. Array.map() --- create a new array with a callback function
// the function take two parameters 'current value' and 'index'
// the callback function returns the 'result' array and each value of current index in the 'indices' array as its index
// make it equal to the current value of 's'
// c. Array.join() --- Join the returned result array as a string. 

var restoreString = function(s, indices) {
    let result = [];
    s.split("").map((c, i) => result[indices[i]] = c);
    return result.join("");
};

// 11. Number of Steps to Reduce a Number to Zero
// Given a non-negative integer num, return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
// Function use
// a. while loop
// b. if...else condition
var numberOfSteps  = function(num) {
    let result = 0;
    
    while(num > 0) {
        if (num % 2 === 0) {
            num /= 2
            result++
        } else {
            num -= 1
            result++
        }
    }
    return result
};

// 12. Subtract the Product and Sum of Digits of an Integer
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
// Function use
// a. while loop --- looping to find each digit of the given number
// use '%' operator to look up each digit by finding the remainder of the number divide by 10
// resign 'n' after every loop after take out last digit of the number until n is 0.
var subtractProductAndSum = function(n) {
    let digit = 0
    let sum = 0
    let product = 1
    
     while (n != 0) {
         digit = n % 10
         sum += digit
         product *= digit
         
         n = Math.floor(n/10)
     }
    return product - sum
};

// 13. Decompress Run-Length Encoded List
// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
// For each such pair, there are freq elements with value val concatenated in a sublist. 
// Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.
// Functions use
// a. for...loop --- set the starting point to zero, then iterating from every third number to find the 'freq' and 'val'
// b. while...loop --- while 'freq' is larger than 0, push 'val' to the array each time

var decompressRLElist = function(nums) {
    let result = []
    for (let i =0; i < nums.length; i+=2) {
        while(nums[i] > 0) {
            result.push(nums[i+1])
            nums[i]--
        }
    }
    return result
};

// 14. Create Target Array in the Given Order
// Given two arrays of integers nums and index. Your task is to create target array under the following rules:
// --Initially target array is empty.
// --From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// --Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.
// It is guaranteed that the insertion operations will be valid.
// Functions use
// a. for...loop --- iterating two given array 'nums' and 'index'
// b. Array.splice('index where to put', 0(delete item), 'element need to put in') --- put the element into a specific index of an array.

var createTargetArray = function(nums, index) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        result.splice(index[i], 0, nums[i])
    }
    return result
};

// 15. XOR Operation in an Array
// Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.
// bitwise XOR a ^ b ^ c ^ d

var xorOperation = function(n, start) {
    let arr = []
    for (let i =0; i < n; i++) {
        arr.push(start + 2 * i)
    }
   return arr.reduce((a, b) => a ^ b)
};

// 16. Split a String in Balanced Strings
// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.
// Functions use
// a. for...loop --- loop the given string from left to right
// b. if...else and if condition
// first declare a balance number 0 as a variable
// initial the result to 0
// Inside the loop, if the current charactor is 'R' the balance number increase 1, otherwise decrease 1
// When the balance number meet equal to 0 condition, the result count increase 1.

var balancedStringSplit = function(s) {
    let balance = 0
    let count = 0
    for (let i = 0; i < s.length; i++) {
        s[i] === 'R' ? balance-- : balance++
        
        count += balance === 0
    }
    return count
};

// 17. Check If Two String Arrays are Equivalent
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};

// 18. Maximum Nesting Depth of the Parentheses
// A string is a valid parentheses string (denoted VPS) if it meets one of the following:
// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:
// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
// Given a VPS represented as string s, return the nesting depth of s.
// Constraints:
// 1 <= s.length <= 100
// s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
// It is guaranteed that parentheses expression s is a VPS.

var maxDepth = function(s) {
    let count = 0
    let max = 0
    
    for ( let i =0; i < s.length; i++) {
        if(s[i] === '(') {
            count++
        }
        if(s[i] === ')') {
            count--
        }
        max = Math.max(max, count) // compare max with count get the largest number set it be max.
    }
    return max
};

console.log(maxDepth('(2))'))

// 19. Count of Matches in Tournament
// You are given an integer n, the number of teams in a tournament that has strange rules:
// If the current number of teams is even, each team gets paired with another team. 
// A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. 
// A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

// Cheating Solution
// var numberOfMatches = function(n) {
//      return n - 1
// };

var numberOfMatches = function(n) {
    let result = 0
    
    while (n > 1) {
        
        result += Math.floor(n / 2)  // returns the largest integer less than or equal to a given number.
        
        n = Math.round(n / 2) // returns the value of a number rounded to the nearest integer.
    }
    return result
};


// 20. Find the Highest Altitude
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. 
// The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). 
// Return the highest altitude of a point.
// Functions use
// a. for...loop ---
// b. Array.push() ---
// c. Array.reduce ---
// Progress
// -- declare a variable 'altitudes' as an array with one '0' element indicate the start point,
// and another number variable 'temp' to hold the altitude of each point
// -- traverse the given array using for loop
// -- At each loop push the altitude of each point to the altitudes array
// -- set the temp to be the last altitude
// -- find the highest value in the altitudes array using .reduce()

var largestAltitude = function(gain) {
    let altitudes = [0]
    let temp = 0
    
    for (let i = 0; i < gain.length; i++) {
        
        altitudes.push(temp + gain[i])
        
        temp += gain[i]
    }
    
    return a.reduce((prev, current) => (prev > current) ? prev : current)
};

// 21. Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.
// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.
// Internally you can think of this:
// RETURN THE LENGTH OF THE RESULT
// Using two pointer
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0 // if the given array is empty return 0
    let i = 0 // set the slower pointer 0, the start point is index 0
    
    for (let j = 1; j < nums.length; j++) { // a for...loop traversing the given array, set j's starting point to index 1
        if (nums[j] != nums[i]) { // in the condition if index j in the nums is not equal to index i in nums. which means we found the duplication has end
            i++ 
            
            nums[i] = nums[j]
        }
    }
    return nums
};

console.log(removeDuplicates([1,1,2,2,3,3,3,4]))