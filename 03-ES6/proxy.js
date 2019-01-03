var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
obj.count = 1
++obj.count


var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});

console.log(proxy.time) // 35
console.log(proxy.name) // 35
console.log(proxy.title) // 35

var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'b';
console.log(target.a) // "b"