//Task: https://leetcode.com/problems/shortest-path-in-binary-matrix/



var shortestPathBinaryMatrix = function(grid) {
    visited=grid
    for(let i=0; i<grid.length; i++) {
        for(let j=0; i<grid[i].length; j++) {
            visited[[i][j]]=0
        }
    }
    
    let y = 0;
    let x = 0;
    if(grid[y][x]==0){
        console.log("true")
    }
    console.log(visited)
};





shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]])