// problem : A list of numbers is given and a target sum, need to find out the
//           combination of two numbers which on adding up matched the target sum

// example :
// list       = [2,4,5,7,9,3]
// target sum = 8
// output     = [5,3]

// My Approach : 
// Create an empty dictonary which will store the number (target_sum - i) where
// i is the number present in list, on iterating over list if you get the target
// sum return the number present in the list and the number matches from the dictonary

// complexity :
// time       : O(nlogn)
// space      : O(1)

function twoNumberSum(listOfNums, targetSum){
    const possible_nums = {};
    for(let i=0; i< listOfNums.length; i++){
        let possible_num = targetSum - listOfNums[i];
        if (Object.values(listOfNums).includes(possible_num)){
            console.log("finally found it!");
            return[listOfNums[i], possible_num];
        }
        else{
            possible_nums[listOfNums[i]] = targetSum - listOfNums[i];
        }
    }
    return "target sum does not exist in the given list";
}


list = [-4, -1, 1, 3, 5, 6, 8, 11, 4]
console.log(twoNumberSum(list, 8))