// Save as thread-pool-demo.js
import { pbkdf2 } from 'crypto';

const start = Date.now();

const performHash = (label) => {
  pbkdf2('password', 'salt', 100_000, 64, 'sha512', () => {
    console.log(`${label} Done in:`, Date.now() - start, 'ms');
  });
};

// Let's try 6 hash operations
for (let i = 1; i <= 6; i++) {
  performHash(`Task ${i}`);
}
