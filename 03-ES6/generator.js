function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

function* gen() {
  yield  123 + 456;
}
var ge = gen();
console.log(ge.next())
console.log(ge.next())
console.log(ge.next())
console.log(ge.next())

function* f() {
  console.log('执行了！')
}

var generator = f();

setTimeout(function () {
  console.log(generator.next())
}, 2000);

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]

function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

console.log(g.next());
 // { value: 0, done: false }
console.log(g.next());
 // { value: 1, done: false }
 console.log(g.next(true)); // { value: 0, done: false }

