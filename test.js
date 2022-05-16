/**
 * @param {number} x
 * @return {boolean}
 */

 var isPalindrome = function(x) {
    x=x.toString()
    let strLength = Math.floor(x.length)
     
    for(i=0; i<Math.floor(x.length/2);i++){
        if(x.charCodeAt(i)!=x.charCodeAt(strLength-1-i)){
            return false
        }
    }
    return true
        
        

};

isPalindrome(12)



function ListNode(number){
    console.log(number)
    if(number.toString().length>1 && number!=0)
    {
        let tmp=parseInt(number.toString().charCodeAt(0))
        return {
            val:tmp,
            next:ListNode(number-tmp*Math.pow(10, number.toString().length))
        }  
    }
    else{
        return{
            val:number,
            next:null,
        }
    }

}

function addJumped(l1, l2){
     console.log(l1)
}

addJumped(ListNode(123))

