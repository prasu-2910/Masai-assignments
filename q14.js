console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");
//console.log("Begin"); runs synchronously, so "Begin" prints first.
//setTimeout with 0 ms delay schedules the callback to run after the current call stack and microtasks finish, so "Timeout Task" is delayed.
//Promise.resolve().then() queues a microtask, which runs after the current synchronous code but before any setTimeout callbacks.

//console.log("End"); runs synchronously right after scheduling the asynchronous tasks.
//This is why the output order is:
//Begin
//End
//Promise Task
//Timeout Task

//This behavior is due to JavaScript's event loop that prioritizes microtasks (like Promise callbacks) over macrotasks (like setTimeout) after the synchronous code execution completes. The code does not need changes to meet the order you specified.
