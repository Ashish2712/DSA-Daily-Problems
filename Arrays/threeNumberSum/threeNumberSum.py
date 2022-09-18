"""
    Given a list of nums, find the sum of triplets which matches the target sum
    if it's not present then return an empty list

    time complexity : O(n*n)
    space           : O(n)
    ex: 
    list_of_nums = [1,4,5,7,8, 10, 11]
    target_sum   = 10
    result       = [1,4,5]

    Approach:
    Will sort the array and then traverse form left to right if the target sum
    is not there then will increase the left and decrease the right based on
    the condition.

"""


def threeNumberSum(array, targetSum):
    array.sort()
    triplets = []

    for i in range(len(array) -2):
        left = i+1
        right = len(array) -1
        while left < right:
            currentSum = array[i] + array[left] + array[right]
            if currentSum == targetSum:
                triplets.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
            elif currentSum < targetSum:
                left += 1
            elif currentSum > targetSum:
                right -= 1
    return triplets

listOfNums = [1,4,5,7,8, 10, 21]
targetSum = 90
print(threeNumberSum(listOfNums, targetSum))