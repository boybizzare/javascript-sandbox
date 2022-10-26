const user = { email: 'animashaunjamal700@gmail.com' };


try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Produce a SyntaxError\
  // console.log(eval('Hello world!'));

  // Produce a URIError
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name!';

    throw new SyntaxError('User has no name!');
  }

} catch (err) {
  // console.log('it\'s null stupid')
  // console.log(err)
  console.log(`User Error: ${err.message}`);
  // console.log(`${err.name}: it's null stupid`);
  // console.log(err);
  // console.log(err.name)
  // console.log(err.message);
  // console.log(err instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of results')
}

console.log('Program continues...')