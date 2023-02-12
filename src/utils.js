/**
 * 
 * @param {number} boardSize Even number representing grid size
 * @returns {Array} 2D Array holding randomly assorted letters
 */
export function generateShuffledCards(boardSize){
    if (boardSize % 2 != 0) throw Error(`Even board size expected. Instead got: ${boardSize}`);
    if (boardSize > 6) throw Error(`Board size cannot exceed 6. Recieved: ${boardSize}`);

    //Generate the list of letter pairs to pull from
    const charactersCount = boardSize**2/2;
    let charCode = 'A'.charCodeAt(0);
    const characters = new Array(charactersCount);
    for (let i = 0; i < charactersCount; i++){
        const character = String.fromCharCode(charCode++);
        characters[i*2] = character;
        characters[i*2+1] = character;
    }
    // console.log("Characters:", characters);

    //Create a 2D Array with empty arrays. 
    //Careful with .fill([]). That inserts a reference to the same array each time
    //Which is why we use .map instead
    let generatedArr = new Array(boardSize).fill(0).map(x => []);

    for (let i = 0; i < boardSize; i++){
        for (let j = 0; j < boardSize; j++){
            const rand = Math.floor(Math.random() * characters.length);
            generatedArr[i][j] = characters.splice(rand, 1)[0];
        }
    }
    // console.log("Shuffled Array", generatedArr);
    return generatedArr;
}