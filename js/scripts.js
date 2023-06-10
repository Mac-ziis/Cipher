//Business logic

// function cap(input) {
//     let firstLetter = input.charAt(0);
//     return firstLetter
// }


// main(String[] input)
//     {
//         String str = "GeeksforGeeks";
//         int len = str.length();
 
//         // First Element
//         System.out.println("First Element: "
//                            + str.charAt(0));
 
//         // Last Element
//         System.out.println("First Element: "
//                            + str.charAt(len - 1));
//     }
// }
function cap(input) {
    const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1, -1) + input.charAt(input.length - 1).toUpperCase();
    return capitalizedInput;
}



// UI Logic
const input = prompt("Type your message: ");

window.alert(cap(input));


// Create another function that will reverse the order of these two letters and return the result.

// Create a third function that calls the other two functions you've just created. For example, if I enter the sentence "I am a sentence", it should enter your first function (which should output "IE"), then call your second function, passing in the output value from the previous. It would return "EI" to me.

// Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."

// Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence. For example, if "I am a sentence" is my original input, and it has 15 total characters in it. If I divide this by 2, I get 7.5, which rounds down to 7. The letter at the 7th position in the sentence is "s". So my final result is "sI am a sentenceEI".

// Bonus: Take the final result and reverse it: "IEecnetnes a ma ls".
