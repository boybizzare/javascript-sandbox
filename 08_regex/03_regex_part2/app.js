let re;
// literal characters
re = /hello/;
re = /hello/i;

// metacharacters symbols
re = /^h/i; // must begin with "h"
re = /world$/i; // must end with "world"
re = /^hello$/i; // must begin and end with "hello"
re = /h.llo/i; // matches any one character
re = /h*llo/i; // matches any character 0 or more times
re = /gre?a?y/i; // optional characters
re = /gre?a?y\?/i; // escaping characters


// Brackets [] - character sets
re = /gr[ae]y/i; // better option for optional characters
re = /[GF]ray/i; // either a G or an F
re = /[^GF]ray/; // matches anything except G or F
re = /[A-Z]ray/; // matches any uppercase letter
re = /[a-z]ray/; // matches any lowercase letter
re = /[A-Za-z]ray/; // matches any letter
re = /[0-9][0-9]ray/; // matches any digit

// Braces {} - quantifiers
re = /Hel{2}o/i; // must occur exactly {n} amount of times

re = /Hel{2,4}o/i; // can occur 2-4 times 
// String to match against

re = /Hel{2,}o/i; // must occur at least {n} times

re = /^([0-9]x){3}$/;


// Shorthand character classes
re = /\w/; // word character, alphanumeric or underscore(_)
re = /\w+/; // + = one or more characters
re = /\W/; // non-word characters
re = /\W+/; // non-word characters 0 or more times
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non-digit
re = /\D+/; // match any non-digit 0 or more times
re = /\s$/; // match whitespace characters
re = /\s+/; // match whitespace characters 0 or more times
re = /\S/; // match non-whitespace characters
re = /Hell\b/i; // this is a word boundary

// Assertions
re = /x(?=y)/; // match only if followed by y
re = /x(?!y)/; // match if NOT followed by y






const str = 'yjivw uheo uhhv x= yrwu h';

// Log results 
const results = re.exec(str);
console.log(results);


function reTest(re, str) {
  if (re.test(str)) { 
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}


reTest(re, str);