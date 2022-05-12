// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
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

// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
//
//     Example
// For s = "abacabad", the output should be
// solution(s) = 'c'.
//There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
//For s = "abacabaabacaba", the output should be
// solution(s) = '_'.
//There are no characters in this string that do not repeat.

function solution(s) {

}