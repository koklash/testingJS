//Task: https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */

 var isPalindrome = function(x) {
    x=x.toString()
    let strLength = Math.floor(x.length)
     
    for(i=0; i<Math.floor(x.length/2);i++){
        if(x.charCodeAt(i)!=x.charCodeAt(strLength-1-i)){
            console.log("false")
            return false
        }
    }
    console.log("true")
    return true
        
        

};

isPalindrome(9991)

