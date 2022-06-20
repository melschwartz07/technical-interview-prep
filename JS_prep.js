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
    for (i = 0; i < a.length; i++) {
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









