Promise.resolve().then(() => console.log("Promise 1"));
process.nextTick(() => console.log("Next tick 1"));
Promise.resolve().then(() => console.log("Promise 2"));
process.nextTick(() => console.log("Next tick 2"));
