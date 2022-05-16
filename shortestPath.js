//Task: https://leetcode.com/problems/shortest-path-in-binary-matrix/

possibleMovement=[]
for(i=-1;i<2;i++){
    for(j=-1;j<2;j++){
        if(i!=0 || j!=0){
            possibleMovement.push([i,j])
        }
    }
}
    

function ListNode(y, x, counter) {
    this.y = y
    this.x = x
    this.counter = counter
 }

 function start(activeListNodes, checkMatrix, grid){
     newActiveListNodes=[]
    activeListNodes.forEach(listNodeElement => {
        checkMatrix[listNodeElement.y][listNodeElement.x]=1
        possibleMovement.forEach(movement => {
            let newY = listNodeElement.y + movement[0]
            let newX = listNodeElement.x + movement[1]
            //checks if the new position is valid && if the grid value is 0
            if(newX >=0&& newY >= 0 && newX < grid[0].length && newY < grid.length && grid[newY][newX]===0){
               //checks if it has already been visited
                if(checkMatrix[newY][newX]===0){
                    //if it hasnt been visited, the current couter +1 will be entered into the checkMatrix
                    listNodeElement.counter++
                    checkMatrix[newY][newX]=listNodeElement.counter
                    //if the goal was not reached, the new position will be added to the activeListNodes
                    if(newY!==grid.length-1 && newX!==grid[0].length-1){
                        newActiveListNodes.push(new ListNode(newY, newX, listNodeElement.counter))
                    }  
                }else{
                    //checks if we reached that node quicker than before
                    if(checkMatrix[newY][newX]>listNodeElement.counter+1){
                        listNodeElement.counter++
                        checkMatrix[newX][newY]=listNodeElement.counter
                        newActiveListNodes.push(new ListNode(newY, newX, listNodeElement.counter))
                    }
                    //if we didn't underscored the node, we won't use it anymore
                }
            }
        })
          
    })
    if(newActiveListNodes.length===0){
        let tmp =checkMatrix[grid.length-1][grid[0].length-1]
        return tmp==0?-1:tmp
    }else{
        return start(newActiveListNodes, checkMatrix, grid)
    }
}


var shortestPathBinaryMatrix = function(grid) {
    
    

    //initialize the checking matrix
    let length=grid.length
    let width=grid[0].length
    let checkMatrix=[]
    for(let i=0;i<length;i++){
        checkMatrix[i]=[]
        for(let j=0;j<width;j++){
            checkMatrix[i][j]=0
        }
    }
    //pretest if start and goal field, if they have valid values
    if(grid[0][0]!==0 || grid[grid.length-1][grid[0].length-1]!==0){
        return -1
    }

    let activeListNodes=[]
    activeListNodes.push(new ListNode(0,0,1))
    checkMatrix[0][0]=1
    let result= start(activeListNodes, checkMatrix, grid)
    console.log(result)
    return result
  
};


shortestPathBinaryMatrix([[0,1],[1,0]])

