//Task: https://leetcode.com/problems/add-two-numbers/


 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

 //converts an integer to
 function numberToListNodeConverter(val){
     if(val<0) {
         throw new TypeError('no negative number allowed')
        }
     val=val.toString()
     if(val.length>1)
      return new ListNode(parseInt(val.charAt(val.length-1)),numberToListNodeConverter(parseInt(val.substring(0,val.length-1))))
     else
      return new ListNode(parseInt(val))
 }


//a function that gets a seccessor and also returns a seccessor
function overflowed(listElement){
    let tmp= listElement.val +1;
    if(tmp>=10){
        listElement.val=tmp-10;
           if(listElement.next===null){
            listElement.next=new ListNode(1);
               return listElement;
           }else{
            listElement.next=overflowed(listElement.next);
               return listElement;
           }
       }else{
        listElement.val=tmp;
           return listElement;
       }
}


var addTwoNumbers = function(l1, l2) {
   let overflow = false;
   let tmp = l1.val + l2.val;
   if(tmp>=10){
       l1.val=tmp-10;
       overflow=true;
   }else{
       l1.val=tmp;
   }
   if(l1.next!==null){
       //l1 has a successor
       if(overflow){
           l1.next=overflowed(l1.next);
       }
       
       if(l2.next!==null){
           //l2 has a successor
           l1.next=addTwoNumbers(l1.next, l2.next);
           return l1;
       }
       else{
           //l2 has no successor
           return l1;   
       }
   }else{
       //l1 has no successor
       if(l2.next!==null){
           //l2 has a successor
           if(overflow){
               l1.next=overflowed(l2.next);
               return l1;
           }else{
               l1.next=l2.next;
               return l1;
           }
           
           
       }
       else{
           //l2 has no successor
           if(overflow){
               l1.next=new ListNode(1);
               return l1;
           }else{
               return l1;
           }
           
           
       }
   }
   
}

module.exports =  {numberToListNodeConverter, addTwoNumbers, overflowed}