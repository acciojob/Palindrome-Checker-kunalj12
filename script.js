// complete the given function

function palindrome(str){
	// Remove non-alphanumeric characters and convert to lowercase
        str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // Check if the reversed string is equal to the original string
        return str === str.split('').reverse().join('');
      }

      let input = prompt("Enter a string to check if it's a palindrome:");
      let result = isPalindrome(input);
      alert(`"${input}" is ${result ? '' : 'not '}a palindrome.`);
}
module.exports = palindrome

