// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index.
// In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does.
// If there are no such elements, return -1.
//
// Example
//
// For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.
//
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.
//
// For a = [2, 2], the output should be solution(a) = 2;
//
// For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.

function solution(a) {
    for (var i = 0; i < a.length; i++) {
        var num = a[i];
        if ( a[Math.abs(num) - 1] > 0 ) {
            a[Math.abs(num) - 1] = -1 * a[Math.abs(num) - 1];
        }
        else {
            return Math.abs(num);
        }
    }

    return -1;
}

//______________________________________________________________________________________________________________________________

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//
//     Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.
//
// 7 and 3 produce the largest product.

function solution(inputArray) {
    var prod = inputArray[0] * inputArray[1];

    for (var i = 1; i<inputArray.length - 1;i++) {
        prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
    }

    return prod;
}

//______________________________________________________________________________________________________________________________

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly
// increasing sequence by removing no more than one element from the array.

function solution(sequence) {
    var found = 0;
    for (var i=0;i<sequence.length;i++) {

        if(sequence[i] <= sequence[i-1]) {
            found++;
            // check if more than one nonincreasing found
            if(found > 1) return false;

            // check if second previous number is equal to / bigger than current number
            // and previous number is equalto / bigger than next number
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
        }

    }
    return true;
}

//______________________________________________________________________________________________________________________________
// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost,
// and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious,
// they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
//
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return
// the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
//
// Example
//
// For
//
// matrix = [[0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]]
// the output should be
// solution(matrix) = 9.

function solution(matrix) {
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        const currRow = matrix[row];
        for (let col = 0; col < currRow.length; col++) {
            // they refuse to stay in any of the free rooms
            if (currRow[col] === 0) {
                // or any of the rooms below any of the free rooms.
                if (row + 1 < matrix.length) {
                    matrix[row + 1][col] = 0;
                }
            } else {
                sum += currRow[col];
            }
        }
    }
    return sum;
}

//______________________________________________________________________________________________________________________________

// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it.
// If there is no such character, return '_'.
//     Example
// For s = "abacabad", the output should be
// solution(s) = 'c'.
//There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
//For s = "abacabaabacaba", the output should be
// solution(s) = '_'.
//There are no characters in this string that do not repeat.

function solution(s) {
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
    return "_";
}

//______________________________________________________________________________________________________________________________