const {shuffleArray} = require('./utils')

    // CODE HERE. Write at least 2 more tests for the game.

describe('shuffleArray should', () => {
    //Test #1
    test('should return array of the same length as the argument sent in', () => {
        const testArray = [2, 4, 6, 8, 10]
        const testVar = shuffleArray(testArray)
        expect(Array.isArray(testVar)).toBe(true)
    });

    //Test #2
    test('should contain all the same items in array ', () => {
        const testArray = [2, 4, 6, 8, 10]
        const testVar = shuffleArray(testArray)
        expect(testArray.length).toEqual(testVar.length);
    })
})



