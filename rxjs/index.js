const Rx = require('rxjs')

// var foo = Rx.Observable.create(function (observer) {
//   console.log('Hello');
//   observer.next(42);
//   observer.next(100); // "return" another value
//   observer.next(200); // "return" yet another
// });

// console.log('before');
// foo.subscribe(function (x) {
//   console.log(x);
// });
// console.log('after');

// var foo = Rx.Observable.create((observer) => {
//   var i = 0
//   setInterval(() => {
//     observer.next(i++)
//     console.log('hello')
//   }, 1000)
// })

// const subcription = foo.subscribe((i) => console.log(i))
// subcription.unsubscribe()

var source = Rx.Observable.from([1, 2, 3]);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);
multicasted.connect();
multicasted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
multicasted.subscribe({
  next: (v) => console.log('observerB: ' + v)
});


