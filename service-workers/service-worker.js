var version = 'v1::';

/*
  self 指的是 ServiceWorkerGlobalScope 物件，也就是 service worker
*/
self.addEventListener("install", function(event) {
  console.log('WORKER: install event in progress.');
  /*
  waitUtil 接受一个 Promise 对象，直到 resolve 之后才会继续执行。
  */
  event.waitUntil(
    caches
      /* 缓存通过名字进行索引，使用这个名字，我们可以对缓存进行增删改。
      */
      .open(version + 'fundamentals')
      .then(function(cache) {
        /* 打开缓存之后，指定需要缓存的文件路径，SW 会自动发出 HTTP 请求，并缓存。
          这个过程中如果有任意一个文件 请求或缓存失败，那么 SW 不会被安装成功，不会触发 activate 事件。
        */
        return cache.addAll([
          '/index.css'
        ]);
      })
      .then(function() {
        console.log('WORKER: install completed');
      })
  );
});