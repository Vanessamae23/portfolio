const array = `

# Arrays

## Two Pointers

It involves having two integer variables that both move along an \`iterable\`.

This means we will have two integers, usually named something like \`i\` and \`j\`, or \`left\` and \`right\` which each represent an index of the array or string.

Start the pointers at the edges of the input. Move them towards each other until they meet.

Converting this idea into instructions:

1. Start one pointer at the first index \`0\` and the other pointer at the last index \`input.length - 1\`.
2. Use a while loop until the pointers are equal to each other.
3. At each iteration of the loop, move the pointers towards each other. This means either increment the pointer that started at the first index, decrement the pointer that started at the last index, or both. Deciding which pointers to move will depend on the problem we are trying to solve.

> We will never have more than O(N) iterations for the while loop because the pointers start n away from each other and move at least one step close in every iteration.
> 

### When to Use

1. Have a sorted array and finding a set of element that fulfill certain constraints
2. Set of elements can be a pair, triplet, or subarray

Examples of question

1. Given a string \`s\`, return \`true\` if it is a palindrome, \`false\` otherwise.
2. Given a **sorted** array of unique integers and a target integer, return \`true\` if there exists a pair of numbers that sum to target, \`false\` otherwise. This problem is similar to [Two Sum](https://leetcode.com/problems/two-sum/).

### Simultaneous Two Pointers

Move along both inputs simultaneously until all elements have been checked.

Converting this idea into instructions:

1. Create two pointers, one for each iterable. Each pointer should start at the first index.
2. Use a while loop until one of the pointers reaches the end of its iterable.
3. At each iteration of the loop, move the pointers forward. This means incrementing either one of the pointers or both of the pointers. Deciding which pointers to move will depend on the problem we are trying to solve.
4. Because our while loop will stop when one of the pointers reaches the end, the other pointer will not be at the end of its respective iterable when the loop finishes. Sometimes, we need to iterate through all elements - if this is the case, you will need to write extra code here to make sure both iterables are exhausted.

\`\`\`
function fn(arr1, arr2):
    i = j = 0
    while i < arr1.length AND j < arr2.length:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. i++
            2. j++
            3. Both i++ and j++

    // Step 4: make sure both iterables are exhausted
    // Note that only one of these loops would run
    while i < arr1.length:
        Do some logic here depending on the problem
        i++

    while j < arr2.length:
        Do some logic here depending on the problem
        j++
\`\`\`

> The method will have a linear time of $O(n+m)$ because at every iteration, we move at least one pointer forward, and the pointers cannot be moved forward more than $n+m$ times without the arrays being exhausted
> 

Example

1. Given two sorted integer arrays \`arr1\` and \`arr2\`, return a new array that combines both of them and is also sorted.
2. ****************************Is subsequence :**************************** Given two strings \`s\` and \`t\`, return \`true\` if \`s\` is a subsequence of \`t\`, or \`false\` otherwise.

1. Start the pointers at the first and last index
2. Start the pointers at different indices.
3. Move the two pointers forward along two different inputs
4. Only one input array / string but we have the starting pointers at the first index and move both of them forward
5. Using three pointers instead of two
`;

export default array;
