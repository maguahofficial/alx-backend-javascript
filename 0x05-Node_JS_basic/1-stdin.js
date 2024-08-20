process.stdout.write('Welcome to Holberton School, what is your name?\n');
// Write a message to the console asking for the user's name
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
