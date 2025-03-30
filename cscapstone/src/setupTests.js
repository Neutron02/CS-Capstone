const { exec } = require('child_process');
const fs = require('fs');

let server;

beforeAll((done) => {
  server = exec('npm run start-server', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }
    console.log(`Server stdout: ${stdout}`);
    console.error(`Server stderr: ${stderr}`);
  });

  // Wait for the server to start
  setTimeout(done, 5000); // Adjust the timeout as needed
});

afterAll(() => {
  if (server) {
    server.kill();
  }
});