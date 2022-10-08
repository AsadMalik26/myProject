// First Class Function
// variable " asad " stored the function " ()=>{ this is function } "
let asad = () => {
  return 'Hello, i am Asad';
};

// now variable asad will behave like a function
console.log('Question: Who are you?');
console.log('Answer: ', asad()); //passing function as argument like a variable

// capabilities of First Class Functions
// 1. use function as a variable
// 2. it can be passed as a parameter
// 3. it can also take arguments

// output
// Question: Who are you?
// Answer: Hello, i am Asad
