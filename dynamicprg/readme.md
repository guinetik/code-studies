# Dynamic Programing

## Memoization
- Solve the problem
    - Visualize the problem as a tree
    - Implement the tree using recursion
    - test with known inputs
- Optimize the problem
    - Add a memo object as parameter of a function 
        - set a default so the top level call can omit this param
    - Memo object should be a constant value retrieval (map, key array, etc)
    - Add a base case to return memo values that are already known
    - Compute memo values that are unknown
    - Store and return values from the memo
    