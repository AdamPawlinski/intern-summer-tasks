let riddleSolver = board => {
    // checking if the board meets requirements, otherwise throws error
    if (
        board.length < 3 || board.length > 50 || 
        board.some(
            item => item.length < 3 || item.length > 50
        ) ||
        board.some(
            item => item.some(number => number < 1 || number > 1000 || typeof number != "number")
        )
    ) {
        console.log("Board doesn't meet requirements. ");
        alert('false board. Please provide board filled only with numbers from range 1 to 1000, consisting of 3 to 50 rows and columns.')
    } else 
    {
        // declaring new board to prevent mutability and function that makes deep copy of array 
        let newBoard = [];
        let arrayCopy = items => items.map(item => Array.isArray(item) ? arrayCopy(item) : item);
        newBoard = arrayCopy(board);         
        let oldBoard = [];
        // function checks if array after looping has changed 
        let arrayEqual = (oldBoard, newBoard) => {
            return JSON.stringify(oldBoard) !== JSON.stringify(newBoard);
        }
        // looping till the array isn't changed 
        while (arrayEqual(oldBoard, newBoard)) {
            // looping through array to find common numbers in rows
            oldBoard = arrayCopy(newBoard);
            newBoard.map(
                (numberArray, indexArray) => {
                    numberArray.map(
                        (number, index) => { 
                            // filling the array with indexes of common numbers in rows 
                            let  rowAdjacentNumbers = [];                  
                            for (index; number === numberArray[index+1]; index++) {
                                if (rowAdjacentNumbers.length === 0)
                                rowAdjacentNumbers.push(index);
                                rowAdjacentNumbers.push(index+1);
                            }
                            // when array has above or equal 3 elements it changes the elements in board to 0
                            if (rowAdjacentNumbers.length >= 3) {
                                newBoard[indexArray].splice(rowAdjacentNumbers[0], rowAdjacentNumbers.length, 
                                    ...rowAdjacentNumbers.map(x => 0)
                                )
                                return newBoard;
                            }                    
                        }
                    );                    
                }
            )
            // looping through array to find common numbers in columns
            newBoard.map(
                (numberArray, indexArray) => {
                    numberArray.map(
                        (number, index) => {  
                            let columnAdjacentNumbers = []; 
                            // function to check if iterating doesn't exceed the numbers of rows in the array
                            let indexInArray = (number, indexArray, newBoard) => {
                                if( indexArray+1 < newBoard.length) {
                                    if(number === newBoard[indexArray+1][index]) {
                                        return true
                                    } else {
                                        return false
                                    }
                                } else {
                                    return false
                                }           
                            }
                            // filing the array with indexes of common numbers in columns   
                            while (indexInArray(number, indexArray, newBoard)) {
                                if (columnAdjacentNumbers.length === 0)
                                columnAdjacentNumbers.push(indexArray);
                                columnAdjacentNumbers.push(indexArray+1); 
                                indexArray++;
                            }   
                            // when array has above or equal 3 elements it changes the elements in board to 0  
                            if (columnAdjacentNumbers.length >= 3) { 
                                columnAdjacentNumbers.forEach(
                                    item => {
                                        newBoard[item].splice(index, 1, 0);
                                    }
                                )
                                return newBoard;
                            }                    
                        }
                    );
                }
            )
            // looping through array to find zero values and move positive values down the array
            newBoard.map(
                (numberArray, indexArray) => {
                    numberArray.map(
                        (number, index) => {
                            // function to check if iterating doesn't exceed the numbers of rows in the array
                            let indexInArray = (indexArray, newBoard) => {                            
                                if( indexArray+1 < newBoard.length) {
                                    if(newBoard[indexArray+1][index] === 0) {
                                        return true
                                    } else {
                                        return false
                                    }
                                } else {
                                    return false
                                }           
                            }
                            // removing the positive numbers and adding them to the row below
                            for (indexArray; indexInArray(indexArray, newBoard); indexArray++) {
                                newBoard[indexArray].splice(index, 1, 0);
                                newBoard[indexArray+1].splice(index, 1, number);
                                return newBoard;
                            }
                        }   
                    );
                }
            )    
        }
        console.log('result', newBoard);
        return newBoard;
    }    
}

export default riddleSolver;