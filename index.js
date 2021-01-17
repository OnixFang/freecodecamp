const { HOST, PORT } = process.env;

if (!HOST && !PORT) {
  console.log('WARNING: No environment variables set. Please set up HOST and PORT variables.');
  process.exit();
}

require('./server/server');
