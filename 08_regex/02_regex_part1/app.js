let re;
re = /hello/;
re = /hello/i; // i =  case insensitive
// re = /hello/g; // g = global search

// console.log(re)
// console.log(re.source);

// exec() - returns result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index)
// console.log(result.input);

// test() - returns true or false
// const result = re.test('hello');
// console.log(result);

//  match() - returns result in an array or null
// const str = 'Hello world';
// const result = str.match(re);

// console.log(result);

// search() - returns index of the first match if not found returns -1
// const str = 'BoHello There';
// const result = str.search(re);
// console.log(result);


// replace() - returns new string with some or all matches of a pattern
// const str = 'Hello world';
// const result = str.replace(re, 'Hi');
// console.log(result);