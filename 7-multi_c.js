const arg = process.argv[2];
const n = parseInt(arg);

if (isNaN(n)) {
  console.log("Missing number of occurrences");
} else if (n > 0) {
  for (let i = 0; i < n; i++) {
    console.log("C is fun");
  }
}
