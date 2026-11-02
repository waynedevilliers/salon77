import { spawn } from 'node:child_process';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { removeStaleLock, stopDevServers } from './dev-stop.mjs';

const port = Number(process.env.DEV_PORT ?? 3001);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function isPortFree(portToCheck) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => server.close(() => resolve(true)));
    server.listen(portToCheck);
  });
}

// Stop servers left over from earlier runs, then start on the fixed port.
await stopDevServers();
removeStaleLock();

if (!(await isPortFree(port))) {
  console.error(
    `Port ${port} is used by another process, not a salon77 dev server.\n` +
      `Find it with: ss -ltnp | grep :${port}\n` +
      'Or set another port: DEV_PORT=3010 npm run dev'
  );
  process.exit(1);
}

const child = spawn('npx', ['next', 'dev', '-p', String(port)], {
  cwd: root,
  stdio: 'inherit',
});

// Closing this terminal (Ctrl+C or a signal) stops the whole dev tree.
let stopping = false;
async function shutdown(signal) {
  if (stopping) return;
  stopping = true;
  if (!child.killed) child.kill(signal);
  await stopDevServers();
  process.exit(0);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
child.on('exit', async (code) => {
  if (!stopping) {
    stopping = true;
    await stopDevServers();
  }
  process.exit(code ?? 0);
});
