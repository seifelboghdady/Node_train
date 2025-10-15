# Node.js Performance & Threadpool Demo

This code demonstrates how **Node.js handles CPU-bound** and **I/O-bound** operations — and how the **event loop**, **thread pool**, and **network I/O** behave differently.

---

## 1. Using `crypto.pbkdf2` (Asynchronous)

```js
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
  console.log('the end .pbkdf2 ms', performance.now() - start);
});
```

* Runs **in the libuv thread pool** (not the main thread).
* Multiple calls run **in parallel**.
* You can control thread pool size using:

```js
process.env.UV_THREADPOOL_SIZE = 10;
```

**Non-blocking** — the event loop can still handle other tasks.

---

## 2. Using `crypto.pbkdf2Sync` (Synchronous)

```js
crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
console.log('the end .pbkdf2 ms', performance.now() - start);
```

* Runs **on the main thread**.
* Each call **blocks** the event loop until it’s finished.
* Multiple calls run **one after another**.

**Blocking** — no other code runs during execution.

---

## 3. Network I/O Test (`fetch`)

```js
fetch('https://dummyjson.com/comments').then(() => {
  console.log('the end Request ms', performance.now() - start);
});
```

* Demonstrates **non-blocking network requests**.
* Even if several `fetch()` calls are made, Node.js handles them **asynchronously** using the **event loop**.

**I/O-bound tasks** are efficient in Node.js.

---

## 4. Simple HTTP Server

```js
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url == '/') res.end('This is Home Page');
  else if (req.url == '/contact') res.end('This is Contact Page');
  else res.end('This is undefined Page');
});

server.listen(3000, () => console.log('Running on port 3000'));
```

* Creates a **basic server** that listens on **port 3000**.
* Handles simple routes:

  * `/` → Home Page
  * `/contact` → Contact Page
  * Anything else → Undefined Page

---

## ⚡ Summary Table

| Operation Type    | Example Function      | Thread Usage | Blocking | Notes                           |
| ----------------- | --------------------- | ------------ | -------- | ------------------------------- |
| CPU-bound (Async) | `crypto.pbkdf2()`     | Thread Pool  | ❌ No     | Runs in background threads      |
| CPU-bound (Sync)  | `crypto.pbkdf2Sync()` | Main Thread  | ✅ Yes    | Blocks event loop               |
| Network I/O       | `fetch()`             | Event Loop   | ❌ No     | Very efficient                  |
| Server            | `http.createServer()` | Event Loop   | ❌ No     | Handles requests asynchronously |
