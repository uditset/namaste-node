import fs from 'fs';
import { performance } from 'perf_hooks';
import dotenv from 'dotenv';
dotenv.config();

console.log("Server running on port:", process.env.PORT);
console.log("Thread pool size:", process.env.UV_THREADPOOL_SIZE);

for (let i = 0; i < 10; i++) {
  const start = performance.now();
  fs.readFile('README.md', () => {
    console.log(`Done ${i} in ${performance.now() - start} ms`);
  });
}
