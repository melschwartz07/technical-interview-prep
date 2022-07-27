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

//another way

function solution(inputArray){
    var highest = inputArray[0] * inputArray[1];

    for (var i = 1; i < inputArray.length, i++){
        highest = Math.max(highest, inputArray[i] * inputArray[i-1]);
    }

    return highest;
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

// Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
    let longest = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longest) {
            longest = inputArray[i].length
        }
    }

    return inputArray.filter(el => el.length === longest);
}

//______________________________________________________________________________________________________________________________

// Given two strings, find the number of common characters between them.

function solution(s1, s2) {
    var count = 0;
    for(var i = 0; i < s1.length; i++) {
        var j = s2.indexOf(s1[i]);
        if(j>=0){
            count++;
            s2 = s2.replace(s1[i],'');
        }
    }
    return count;
}

//______________________________________________________________________________________________________________________________
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the
// first half of the digits is equal to the sum of the second half.

    // Given a ticket number n, determine if it's lucky or not.

function solution(n) {
    stringN = n.toString()
    var first = stringN.substring(0, stringN.length / 2).split("");
    var second = stringN.substring((stringN.length / 2), stringN.length).split("");

    var firstSum = 0;
    var secondSum = 0;

    var i = 0;

    for (i = 0; i < first.length; i++) {
        firstSum += parseInt(first[i]);

        secondSum += parseInt(second[i]);
    }

    if (firstSum === secondSum) {
        return true;
    } else {
        return false;
    }
}

//______________________________________________________________________________________________________________________________

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
//
//     Example
//
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function solution(a) {
    var people = a.filter((el) => el != -1);
    people.sort((a, b) => b - a);
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a[i] = people.pop();
        }
    }
    return a;
}

//______________________________________________________________________________________________________________________________

// Write a function that reverses characters in (possibly nested) parentheses in the input string.
//
//     Input strings will always be well-formed with matching ()s.
//
//     Example
//
// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
//     Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".


function solution(s) {
    while (true) {
        let c = s.indexOf(")");

        if (c === -1) {
            break;
        }

        let o = s.substring(0, c).lastIndexOf("(");

        let start = s.substring(0, o);
        let middle = s.substring(o + 1, c).split("").reverse().join("");
        let end = s.substring(c + 1, s.length);

        s = start + middle + end;
    }

    return s;
}

//______________________________________________________________________________________________________________________________


// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1,
// the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people.
// Return an array of two integers, where the first element is the total weight of team 1, and the second element
// is the total weight of team 2 after the division is complete.

function solution(a) {
    var team1 = 0;
    var team2 = 0;

    for (var i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            team1 += a[i];
        } else {
            team2 += a[i];
        }
    }

    return [team1, team2];
}

//______________________________________________________________________________________________________________________________

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function solution(picture) {
    var linelength = picture[0].length + 2;
    var topline = "*".repeat(linelength);
    var bottomline = "*".repeat(linelength);
    var result = [];
    result.push(topline);
    for (var i = 0; i < picture.length; i++) {
        var newline = "*" + picture[i] + "*";
        result.push(newline);
    }
    result.push(bottomline);
    return result;
}

//______________________________________________________________________________________________________________________________

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.

function solution(a, b) {
    sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {sum++}
    }
    a.sort(); b.sort();
    return a.toString() == b.toString() && sum < 3}

//______________________________________________________________________________________________________________________________

// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one.
// Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function solution(series) {
    var moves = 0;

    for (var i = 1; i < series.length; i++) {
        if (series[i] <= series[i - 1]) {
            diff = series[i - 1] - series[i] + 1;
            series[i] += diff;
            moves += diff;
        }
    }

    return moves;
}

//______________________________________________________________________________________________________________________________

// Given a string, find out if its characters can be rearranged to form a palindrome.
//Example
//
// For inputString = "aabb", the output should be
// solution(inputString) = true.
//
// We can rearrange "aabb" to make "abba", which is a palindrome.

function solution(inputString) {
    const isEven = inputString.length % 2 === 0;

    let foundSingleChar = false;
    while (inputString.length > 0) {
        const newStr = inputString.replace(new RegExp(inputString.charAt(0), 'g'), '');
        const charCount = inputString.length - newStr.length;
        if (charCount % 2 !== 0) {
            if (isEven || foundSingleChar) { return(false); }
            foundSingleChar = true;
        }
        inputString = newStr;
    }

    return(true);
}

//another way

function solution(inputString){
    var reversed = inputString.split("").reverse().join("");

    if (reversed === inputString){
        return true;
    } else {
        return false;
    }
}

//______________________________________________________________________________________________________________________________

// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
//
//     Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
//
//     Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {

    return yourLeft == friendsLeft && yourRight == friendsRight || yourLeft == friendsRight && yourRight == friendsLeft;
}

//______________________________________________________________________________________________________________________________

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
//
//     Example
//
// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

function solution(nums) {
    var max = 0;

    for (var i = 1; i < nums.length; i++) {
        var diff = Math.abs(nums[i] - nums[i - 1]);
        max = (diff > max) ? diff : max;
    }

    return max;
}
//______________________________________________________________________________________________________________________________

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function solution(nums) {
    var max = 0;

    for (var i = 1; i < nums.length; i++) {
        var diff = Math.abs(nums[i] - nums[i - 1]);
        max = (diff > max) ? diff : max;
    }

    return max;
}

//______________________________________________________________________________________________________________________________

//How do you create a private variable in JavaScript?

function secretVariable(){
    var private = "hidden message";
    retrun function(){
        return private;
    }
}
var getPrivateVariable = secretVariable();
console.log(getPrivateVariable());

//______________________________________________________________________________________________________________________________

//What is the output?

var num = 4;
function outer(){
    var num = 2;
    function inner(){
        num++;
        var num = 2;
        console.log(num);
    }
    inner();
}
outer();

//______________________________________________________________________________________________________________________________

//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
//If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
//If no two numbers sum up to the target sum, the function should return an empty array.

function twoNumberSum(array, targetSum) {
    // iterate over the array
    // Set is used so you can check if a given has been seen
    const seen = new Set();

    for (let num of array){
        //complement is the number that will sum up to target when added to the current number we are considering

        const complement = targetSum - num;

        //If complement is seen before then we have a paid of numbers summing up to the target
        if(seen.has(complement)){
            return [num, complement];
        }
        seen.add(num);
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

//______________________________________________________________________________________________________________________________

function Book(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
}

Book.prototype.getAvailability = function(){
    if (this.numCopies === 0) {
        return "Out of stock";
    } else if (this.numCopies < 10){
        return "Low stock";
    }
    return "In stock";
}

Book.prototype = function(numCopiesSold = 1){
    this.numCopies -= numCopiesSold;
}

Book.prototype.restock = function(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123445, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());

//______________________________________________________________________________________________________________________________

function Movie(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function(){
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
}

const Spiderman = new Movie("Spiderman", "Sam Rami", "Action", 2002, 87);
const Batman = new Movie("The Dark Knight", "Christopher Nolan", "Action", 2008, 83);

console.log(Spiderman);
console.log(Batman);

//______________________________________________________________________________________________________________________________

// You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits(n){
    //Take the number and convert it to  a string

    let str = n.toString();
    //Create and array where each string in str is an array element
    let arr= str.split('');

    let arr0 = arr[0];
    let arr1 = arr[1];

    return +arr[0] + +arr[1];
}

//______________________________________________________________________________________________________________________________

//Given an integer n, return the largest number that contains exactly n digits.

function solution(n){
    let number = "9";
    for (let i = 1; i < n; i++){
        number += "9";
    }
    return parseInt(number);
}

//______________________________________________________________________________________________________________________________

// Fizzbuzz solution for moktek interview

function fizzBuzz(){
    for (var i = 1; i <= 100; i++){
        if (i % 3 === 0 || i % 5 === 0){
            console.log("FizzBuzz");
        } else if (i % 3 ===0) {
            console.log("Fizz")
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
//______________________________________________________________________________________________________________________________

// Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.
//
//     example input: [1, 7, 7]
// expected output: true
//
// example input: [1, 7, 1, 7]
// expected output: true
//
// example input: [2,7,8]
// expected output: false

//______________________________________________________________________________________________________________________________

// Staircase detail.
// this is a staircase of size n =4
//              #
//             ##
//            ###
//           ####

// Write a program that prints a staircase of the size of n

function staircase(n){
    for (var i = 1; i <= n; i++){
        console.log("".repeat(n-1) + "#".repeat(i));
    }
}
//______________________________________________________________________________________________________________________________
// Fizzbuzz solution for moktek interview

function fizzBuzz(){
    for (var i = 1; i <= 100; i++){
        if (i % 3 === 0 || i % 5 === 0){
            console.log("FizzBuzz");
        } else if (i % 3 ===0) {
            console.log("Fizz")
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
//______________________________________________________________________________________________________________________________

//______________________________________________________________________________________________________________________________

//What is the output?

var num = 4;
function outer(){
    var num = 2;
    function inner(){
        num++;
        var num = 2;
        console.log(num);
    }
    inner();
}
outer();

//______________________________________________________________________________________________________________________________

// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
//
//     The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

function getTotalX(a, b) {
    a.sort((a,b) => a-b)
    b.sort((a,b) => a-b)
    let sol = []
    let factor = a[a.length-1]
    while(true){
        let flag = true;
        for(let i = 0; i<a.length; i++){
            console.log(factor);
            if(factor % a[i] !== 0){
                flag = false;
                break;
            }
            if(b.filter(num => num%factor === 0).length !== b.length){
                flag = false;
                break;
            }
        }
        if(flag) sol.push(factor);
        factor += a[a.length-1];
        if(factor>b[0]) break;
    }
    return sol.length;

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

//another way

function solution(inputArray){
    var highest = inputArray[0] * inputArray[1];

    for (var i = 1; i < inputArray.length, i++){
        highest = Math.max(highest, inputArray[i] * inputArray[i-1]);
    }

    return highest;
}

//______________________________________________________________________________________________________________________________

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
function solution(inputArray) {
    let maxDiff = 0;

    for (let i = 1; i < inputArray.length; i++) {
        const currentDiff = Math.abs(inputArray[i - 1] - inputArray[i]);

        if (maxDiff < currentDiff) {
            maxDiff = currentDiff;
        }
    }

    return maxDiff;
}

//______________________________________________________________________________________________________________________________
// You are given an array of integers representing coordinates of obstacles situated on a straight line.
//
//     Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
//
//     Find the minimal length of the jump enough to avoid all the obstacles.

function solution(arr) {
    arr.sort((a, b) => a - b);
    let result = arr[arr.length-1]+1;
    for (let i = 2; i < arr[arr.length - 1]; i++) {
        if (arr.includes(i)) continue;
        let check = "N";
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % i == 0) {
                check = "Y";
                break;
            }
        }
        if (check == "Y") continue;
        result = i;
        break;
    }
    return result;
}


//______________________________________________________________________________________________________________________________

// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
//
// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.
function solution(image) {
    var blured = [];
    for (var i = 1; i < image.length - 1; i++){
        var row = [];
        for (var j = 1; j < image[i].length - 1; j++) {
            var average = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1];
            average+= image[i][j - 1] + image[i][j] + image[i][j + 1];
            average+= image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
            row.push(Math.floor(average / 9));
        }
        blured.push(row);
    }
    return blured;
}

//______________________________________________________________________________________________________________________________

// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it
// that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.
function solution(matrix) {
    let board = [];

    for (let y = 0; y < matrix.length; y++) {

        board.push([]);

        for(let x = 0; x < matrix[y].length; x++) {
            board[y][x] = 0;

            // Above
            if (  matrix[y][x - 1] !== undefined) {
                if (matrix[y][x - 1] === true) {
                    board[y][x]++;
                }
            }
            // Below
            if ( matrix[y][x + 1] !== undefined) {
                if (matrix[y][x + 1] === true) {
                    board[y][x]++;
                }
            }
            // Left
            if ( matrix[y - 1] !== undefined) {
                if (matrix[y - 1][x] === true) {
                    board[y][x]++;
                }
            }
            // Right
            if ( matrix[y + 1] !== undefined) {
                if (matrix[y + 1][x] === true) {
                    board[y][x]++
                }
            }
            // Down Right
            if ( matrix[y + 1] !== undefined) {
                if (matrix[y + 1][x + 1] === true) {
                    board[y][x]++;
                }
            }
            // Down Left
            if (matrix[y + 1] !== undefined) {
                if (matrix[y + 1][x - 1] === true) {
                    board[y][x]++;
                }
            }
            // Top Right
            if ( matrix[y - 1] !== undefined) {
                if (matrix[y - 1][x + 1] === true) {
                    board[y][x]++;
                }
            }
            // Top Left
            if ( matrix[y -  1] !== undefined) {
                if (matrix[y - 1][x - 1] === true) {
                    board[y][x]++;
                }
            }

        }
    }

    return board;

}
//______________________________________________________________________________________________________________________________
// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function solution(inputArray, elemToReplace, substitutionElem) {
    for(var i = 0; i < inputArray.length; i++){
        if (inputArray[i] == elemToReplace)
            inputArray[i] = substitutionElem
    }
    return inputArray
}
//______________________________________________________________________________________________________________________________
// Check if all digits of the given integer are even.
function solution(n) {
    while(n > 0){
        if((n%10)%2==1){
            return false
        }
        n = Math.floor(n/10)
    }
    return true
}
//______________________________________________________________________________________________________________________________

// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
//
// Check if the given string is a correct variable name.
function solution(name) {

    for (let i = 0; i < name.length; i++){

        var x = name.charCodeAt(i);

        console.log(x);

        switch (true) {
            case (x < 48): {return false; break;}
            case ((x > 57) && (x < 65)): {return false; break;}
            case ((x > 90) && (x < 95)): {return false; break;}
            case (x == 96): {return false; break;}
            case (x > 122): {return false; break;}
        }
    }

    var firstLetterCode = name.charCodeAt(0);

    if ((firstLetterCode > 47) && (firstLetterCode < 57)){
        return false;
    }

    return true;

}
//______________________________________________________________________________________________________________________________

// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b,
//     replace b with c, etc (z would be replaced by a).

function solution(input) {
    let result = '';
    for(let i=0; i<input.length; i++){
        let num = input[i].charCodeAt(0);
        if( num == 122){
            num = 97
        }else{
            num++;
        }

        result += String.fromCharCode(num);
    }
    return result;
}

//______________________________________________________________________________________________________________________________

// Given two cells on the standard chess board, determine whether they have the same color or not.
function solution(cell1, cell2) {
    var a = cell1.charCodeAt(0) + cell1.charCodeAt(1);
    var b = cell2.charCodeAt(0) + cell2.charCodeAt(1);
    return a % 2 == b % 2;
}

//______________________________________________________________________________________________________________________________

// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring
// numbers is equal (note that 0 and n - 1 are neighboring, too).
//
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

function solution(n, firstNumber) {
    return (firstNumber + n/2)%n;
}
//______________________________________________________________________________________________________________________________
// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate.
//     With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

function solution(d, r, t) {
    return Math.ceil(Math.log(t/d)/Math.log(r/100+1));
}

//______________________________________________________________________________________________________________________________

// Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a.
// In other words, find the element x in a, which minimizes the following sum:
//
//     abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// (where abs denotes the absolute value)
//
// If there are several possible answers, output the smallest one.

function solution(a) {
    return a[Math.ceil(a.length/2)-1];
}

//______________________________________________________________________________________________________________________________
// Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each
// consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

function solution(inputArray) {
    var bruteForce = function(depth, inputArray) {
        var swap = function(i, j) {
            tmp = inputArray[i];
            inputArray[i] = inputArray[j];
            inputArray[j] = tmp;
        };
        if (depth === inputArray.length) {
            var correct = true;
            for (var i = 0; i < inputArray.length - 1; i++) {
                var differences = 0;
                for (var j = 0; j < inputArray[i].length; j++) {
                    if (inputArray[i][j] !== inputArray[i + 1][j]) {
                        differences++;
                    }
                }
                if (differences !== 1) {
                    correct = false;
                }
            }
            if (correct) {
                return true;
            }
            return false;
        }
        for (var i = depth; i < inputArray.length; i++) {
            swap(depth, i);
            if (bruteForce(depth + 1, inputArray)) {
                return true;
            }
            swap(depth, i);
        }
        return false;
    };
    if (bruteForce(0, inputArray)) {
        return true;
    }
    return false;
}

//______________________________________________________________________________________________________________________________

// Given array of integers, remove each kth element from it.
function solution(inputArray, k) {
    var cont = 1;
    for (var i = 0; i < inputArray.length; ) {
        if  ((i+cont) % k == 0) {
            inputArray.splice(i,1);
            cont++
        } else {
            i++
        }
    }
    return inputArray;
}

//______________________________________________________________________________________________________________________________
// Find the leftmost digit that occurs in a given string.
function solution(inputString) {
    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    inputString = inputString.split("");

    for (let i = 0; i < inputString.length; i++) {
        if (digits.includes(inputString[i])) {
            return inputString[i];
        }
    }
}

//______________________________________________________________________________________________________________________________

// Given a string, find the number of different characters in it.
function solution(s) {
    s = s.split('').sort();
    var char = s[0];
    var num = 1;
    for(var i = 1; i < s.length; i++){
        if(s[i] != char){
            char = s[i];
            num++;
        }
    }
    return num;
}

//______________________________________________________________________________________________________________________________

// Given array of integers, find the maximal possible sum of some of its k consecutive elements.
function solution(inputArray, k) {
    var s0 = 0;
    for(var i = 0;i < k;i++)
        s0 += inputArray[i];
    var s1 = s0;
    for(var i = 1; i <= inputArray.length - k;i++){
        s1 = s1 - inputArray[i-1] + inputArray[i+k-1];
        if(s1 > s0) s0 = s1;
    }
    return s0;
}

//______________________________________________________________________________________________________________________________
// Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently.
// Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in
// height every night, by an amount represented by downSpeed.
//
//     Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how
//     many days it'll take for the plant to reach this height.

function solution(upSpeed, downSpeed, desiredHeight) {
    var daySpeed = upSpeed - downSpeed;
    var height = 0;
    var days = 0
    while( height < desiredHeight) {
        days++;
        height += upSpeed;
        if (height < desiredHeight)
            height -= downSpeed;
        else
            return days;
    }
    return days;
}
//______________________________________________________________________________________________________________________________
// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2.
// What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

function solution(value1, weight1, value2, weight2, maxW) {
    let weights = [weight1, weight2];
    let values = [value1, value2];
    let weightOfMaxValue = weights[values.indexOf(Math.max(value1, value2))];
    let weightOfMinValue = weights[values.indexOf(Math.min(value1, value2))];

    if(maxW >= (weight1 + weight2)){return value1 + value2;}
    else if(maxW >= weightOfMaxValue){return Math.max(value1, value2)}
    else if(maxW >= weightOfMinValue){return Math.min(value1, value2)}
    else {return 0;}
}
//______________________________________________________________________________________________________________________________

// Given a string, output its longest prefix which contains only digits.
function solution(inputString) {
    let digits = [];
    for (d = 0; d < 10; d++) digits.push(d+'');

    inputString = inputString.split('');
    let prefix = [];
    for (c of inputString) {
        if (digits.indexOf(c) !== -1) {
            prefix.push(c);
        } else {
            break;
        }
    }

    return prefix.join('');
}
//______________________________________________________________________________________________________________________________

// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its
// digits until we get to a one digit number.
//
// Given an integer, find its digit degree.
function solution(n) {
    var x = n.toString();
    var t = 0;
    while(x.length > 1) {
        t++;
        var y = 0;
        for(var i = 0; i < x.length; i++) {
            y+=Number(x[i]);
        }
        x = y.toString();
    }
    return t;
}
//______________________________________________________________________________________________________________________________
// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
function solution(cell1, cell2) {
    var getX = function(pos) {
        return pos.charCodeAt() - 'A'.charCodeAt();
    }
    var getY = function(pos) {
        return pos.charCodeAt() - '1'.charCodeAt();
    }
    var x1 = getX(cell1[0]),
        y1 = getY(cell1[1]),
        x2 = getX(cell2[0]),
        y2 = getY(cell2[1]);
    if (x1 + y1 === x2 + y2 || x1 - y1 === x2 - y2) {
        return true;
    }
    return false;
}
//______________________________________________________________________________________________________________________________
// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the
// alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.
//
//     Given a string, check whether it is beautiful.

function solution(inputString) {
    letterCount = [];
    for(i = 0 ; i < inputString.length ; i++){
        inputNum = charToNum(inputString[i]);
        if( typeof letterCount[inputNum] !== "undefined"){
            letterCount[inputNum] += 1;
        }
        else{
            letterCount[inputNum] = 1;
        }
    }

    for(i = 0 ; i < letterCount.length - 1; i++){
        if(typeof letterCount[i] === 'undefined' ||
            typeof letterCount[i+1] === 'undefined' ||
            letterCount[i] < letterCount[i+1]){
            return false;
        }

    }
    return true;
}

function charToNum(c){
    return parseInt(c.charCodeAt(0) - 97);
}

//______________________________________________________________________________________________________________________________
// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").
//
//     The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a
//     lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.
//
//     Given a valid email address, find its domain part.

function solution(address) {
    return address.substr(address.lastIndexOf("@") + 1)
}

//______________________________________________________________________________________________________________________________
// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
function solution(st) {
    checkPalindrome=(inputString)=>{
        return inputString==inputString.split('').reverse().join('')
    }
    let popped=[];
    let i=0;
    while(i<st.length){
        let s=st.slice(i);
        if(checkPalindrome(s)===true) return st+popped.reverse().join('')
        else popped.push(st.charAt(i))
        i++

    }
}

//______________________________________________________________________________________________________________________________
// Elections are in progress!
//
//     Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters
//     who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.
//
// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum)
// number of votes, assume there is no winner at all.
function solution(votes, k) {

    let count = 0
    //votes = votes.sort(function(a,b){return b - a});
    let max = Math.max.apply(null,votes);

    console.log('max',max);


    for (let i = 0; i < votes.length; i++){
        if ((votes[i] + k) > max){
            count++;
            console.log('i',i);
        }

    }

    if ((count === 0) && (votes.indexOf(max) === votes.lastIndexOf(max))){
        count++
    }

    return count;
}
//______________________________________________________________________________________________________________________________
// A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.
//
//     The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F),
//     separated by hyphens (e.g. 01-23-45-67-89-AB).
//
// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

function solution(inputString) {
    if(inputString.length !== 17){
        return false;
    }
    for(a = 0 ; a < inputString.length ; a++){
        if((a+1) % 3 == 0 ){
            if(inputString[a] != "-"){
                return false;
            }
        }
        else if(!isCharOfMac(inputString[a])){
            return false;
        }
    }
    return true;
}

function isCharOfMac(c){
    macAdress = "0123456789ABCDEF".split("");
    for(i = 0 ; i < macAdress.length ; i++){
        if(c == macAdress[i]){
            return true;
        }
    }
    return false;
}
//______________________________________________________________________________________________________________________________

// Determine if the given character is a digit or not.
function solution(symbol) {
    return !isNaN(symbol)}

//______________________________________________________________________________________________________________________________
//
// Given a string, return its encoding defined as follows:
//
//     First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
function solution(s) {

    let pre ="";
    let count = 0;
    let res = "";
    for (var i=0; i<s.length+1;i++) {
        if (s[i] != pre) {
            if (count == 1) {
                res += pre;
            } else if (count > 1) {
                res += count.toString() + pre;
            }
            pre = s[i];
            count=1;
        } else {
            count++;
        }
    }
    return res;
}
//______________________________________________________________________________________________________________________________
// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
//
//     The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L.
//     Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
function solution(cell) {
    let possibilies = 0;
    let lines = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let positions = [[2,1], [1,2], [-2,1], [-1,2], [2,-1], [1,-2], [-2,-1], [-1,-2]];
    let location = [lines.indexOf(cell[0])+1, parseInt(cell[1])];

    positions.map(i=>{
        let result = [i[0]+location[0], i[1]+location[1]];
        if(result[0] > 0 && result[0] < 9 && result[1] > 0 && result[1] < 9) possibilies++;
    });

    return possibilies;
}

//______________________________________________________________________________________________________________________________
// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

function solution(n) {
    let m = 0;
    for(let d = 1;d <= n; d *= 10){
        let t = n%d + (Math.floor(Math.floor(n/d)/10)*d)
        m = Math.max(m,t);
    }
    return m;
}

//______________________________________________________________________________________________________________________________
// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

function solution(text) {
    let res = text.match(/([a-z]+)/ig);
    let max = "";
    for(let i=0;i<res.length;i++)
        if(res[i].length>max.length)
            max = res[i];
    return max;
}
//______________________________________________________________________________________________________________________________
// Check if the given string is a correct time representation of the 24-hour clock.
function solution(time) {
    let realTime = time.split(':');

    if(parseInt(realTime[0])>24 || parseInt(realTime[0])<0 || parseInt(realTime[1])>=60 || parseInt(realTime[1])<0){ return false;
    }
    if(parseInt(realTime[0])>=24 && parseInt(realTime[1])>=0){ return false;}
    return true;
}
//______________________________________________________________________________________________________________________________
// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to
// Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.
//
//     Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

function solution(inputString) {
    var r = 0;
    for(var i=0;i<inputString.length;i++){
        var tmp = "0"
        while("0" <= inputString[i] && inputString[i] <= "9" && i < inputString.length){
            tmp += inputString[i].toString()
            i++
        }
        r += parseInt(tmp)
    }
    return r
}
//______________________________________________________________________________________________________________________________
// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.
function solution(matrix) {
    let s = new Set();
    for(let i = 0;i < matrix.length - 1;i++){
        for(let j = 0;j < matrix[0].length - 1;j++){
            s.add('' + matrix[i][j] + matrix[i+1][j] + matrix[i][j+1] + matrix[i+1][j+1]);
        }
    }
    return s.size;
}
//______________________________________________________________________________________________________________________________
// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product.
//     If there is no such integer, return -1 instead.
function solution(product) {
    if (product == 0) {return 10}
    for (i = 0; i < 3600; i++) {
        a = 1
        for (j of i.toString()) {a *= Number(j)}
        if (a == product) {return i}}
    return -1}

//______________________________________________________________________________________________________________________________

// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names,
// the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer
// such that the obtained name is not used yet.
//
//     Return an array of names that will be given to the files.

function solution(names) {
    var tab = [];
    for (var value of names) {
        var counter = 0;
        var name = value;
        while (tab.indexOf(value) != -1)
            value = `${name}(${++counter})`;
        tab.push(value);
    }
    return tab;
}
//______________________________________________________________________________________________________________________________
// You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue,
// you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message.
// After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.
//
// Assuming that your hunch is correct, decode the message.

function solution(code) {
    let result = "";

    while (code !== "") {
        let eightBits = code.substring(0, 8);
        let number = parseInt(eightBits, 2);

        result += String.fromCharCode(number);
        code = code.substring(8);
    }

    return result;
}

//______________________________________________________________________________________________________________________________

// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.


//jraghon solution
function solution(n) {
    var mat = [...Array(n)].map(e=>[]);
    var v,r,c,dir;
    for(v=r=c=dir=0; v++<n*n; ) {

        //enter the new value
        mat[r][c] = v;

        if(dir==0) { //move right?
            if(c+1<n && !mat[r][c+1])
                ++c
            else {
                dir=1
                ++r
            }
        } else if(dir==1) { //move down?
            if(r+1<n && !mat[r+1][c])
                ++r
            else {
                dir=2
                --c
            }
        } else if(dir==2) { //move left?
            if(c>0 && !mat[r][c-1])
                --c
            else {
                dir=3
                --r
            }
        } else { //move up?
            if(!mat[r-1][c])
                --r
            else {
                dir=0
                ++c
            }
        }
    }
    return mat;
}

//______________________________________________________________________________________________________________________________

// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.
//
// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

const solution = grid => {

    const checkBlock = block => {
        let sample = '123456789';
        block.sort();

        if (block.join('') === sample) {
            return true;
        }

        return false;
    }

    let subgrids = [];

    for (let i = 0; i < 3; i++) {
        subgrids.push([]);

        for (let j = 0; j < 3; j++) {
            subgrids[i].push([]);
        }

    }

    for (let i = 0; i < 9; i++) {
        let horizontal = [];
        let vertical = [];
        for (let j = 0; j < 9; j++) {
            horizontal.push(grid[i][j]);
            vertical.push(grid[j][i]);
            subgrids[Math.floor(i / 3)][Math.floor(j / 3)].push(grid[i][j]);
        }

        if (!checkBlock(horizontal)) {
            return false;
        }

        if (!checkBlock(vertical)) {
            return false;
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!checkBlock(subgrids[i][j]))
                return false;
        }
    }

    return true;
}

// ______________________________________________________________________________________________________________________________


// n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount
// of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

function solution(n, m) {
    return m - m % n;
}


//______________________________________________________________________________________________________________________________
//
// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good,
// but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the
// exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.
//
// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people
// who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see
// if you can possibly make it to the exit without disturbing too many people.
//
//     Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in,
//     return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

function solution(nCols, nRows, col, row) {
    return (nCols - col + 1)*(nRows - row);
}
//______________________________________________________________________________________________________________________________
//
// Given a divisor and a bound, find the largest integer N such that:
//
//     N is divisible by divisor.
//     N is less than or equal to bound.
//     N is greater than 0.
// It is guaranteed that such a number exists.
function solution(divisor, bound) {
    return bound-bound%divisor;
}

//______________________________________________________________________________________________________________________________

// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any
// two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
//
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

function solution(n, firstNumber) {
    return ((n / 2) + firstNumber) % n;
}

//______________________________________________________________________________________________________________________________
//
// Number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
//     An island is surrounded by water and is formed by connecting adjacent lands
// horizontally or vertically. You may assume all four edges of the grid are all
// surrounded by water.
//     Example 1:
// 11110
// 11010
// 11000
// 00000
//

const numIslands = (grid) => {
    const isIsland = (i, j) =>
        i >= 0 &&
        i < grid.length &&
        j >= 0 &&
        j < grid[i].length &&
        grid[i][j] === '1';

    const bfs = (i, j) => {
        const queue = [[i, j]];

        while (queue.length) {
            const [i, j] = queue.shift();

            grid[i][j] = '0';

            if (isIsland(i + 1, j)) queue.push([i + 1, j]);
            if (isIsland(i, j + 1)) queue.push([i, j + 1]);
            if (isIsland(i - 1, j)) queue.push([i - 1, j]);
            if (isIsland(i, j - 1)) queue.push([i, j - 1]);
        }
    };

    let counter = 0;
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            if (grid[i][j] === '1') {
                counter += 1;
                bfs(i, j);
            }
        }
    }
    return counter;
};

