/** time: o(mn)  space - o(1)
 * space - This is because we don't use other data structures. 
 * Remember that we don't include the output array in the space complexity. else its o(nm)
 * 
 * Source : https://www.youtube.com/watch?v=0V96RZh5V8A   - (Dev with Jovi)
*/
var spiralOrder = function(matrix) {
    let left = 0;
    let right = matrix[0].length -1
    let top = 0
    let bottom = matrix.length - 1
    let direction = 'right'
    let result = []

    while(left <= right && top <= bottom){
        if(direction === 'right'){

            for(let i = left; i <= right; i++){
                result.push(matrix[top][i])
            }
            top +=1
            direction = 'down'
        }else if(direction === 'down'){
            for(let i = top; i <= bottom; i++){
                result.push(matrix[i][right])
            }
            right -=1
            direction = 'left'
        }else if(direction === 'left'){
            for(let i = right; i>= left; i--){
                result.push(matrix[bottom][i])
            }
            bottom -= 1;
            direction = 'top'
        }else if(direction === 'top'){
            for(let i = bottom; i>= top; i--){
                result.push(matrix[i][left])
            }
            left += 1
            direction = 'right'
        }
    }

    return result
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))