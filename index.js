// task 1
function receivesAFunction(aFunction) {
  return aFunction();
}

// task 2
function returnsANamedFunction() {
  return function namedFunction() {};
}

// task 3
function returnsAnAnonymousFunction() {
  return (num) => num * 2;
}
