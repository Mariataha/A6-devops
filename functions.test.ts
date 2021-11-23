const {shuffleArray} = require('./utils')
const testerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // CODE HERE. Write at least 2 more tests for the game.

describe('shuffleArray should', () => {
    //Test #1
    test('returns an array of the same length as the argument sent in', () => {

        expect(shuffleArray(testerArray).length).toBe(testerArray.length);

    })

    //Test #2
    test('returns an array containing the same items as the original', () => {

        expect(shuffleArray(testerArray).reduce((a, c) => !testerArray.includes(c)?false: a, true)).toBe(true);

    })
})



