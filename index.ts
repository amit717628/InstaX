import { Terminal, terminal } from 'terminal-kit';
import { Main } from './src/base/Main';


function setupSignalHandlers() {
  process.on('SIGINT', () => {
  
    terminal.red('Interrupt signal received. Exiting...\n');
    process.exit(0);
  });

  process.on('SIGTSTP', () => {
 
    terminal.red('Pause signal received. Exiting...\n');
    process.exit(0);
  });

  process.on('uncaughtException', (err) => {
    terminal.red(`Uncaught Exception: ${err.message}\n`);
    process.exit(1);
  });

  process.on('unhandledRejection', (reason) => {
    terminal.red(`Unhandled Rejection: ${reason}\n`);
    process.exit(1);
  });
}


function startInstaX() {
  setupSignalHandlers();
  Main.start();
}


startInstaX();
