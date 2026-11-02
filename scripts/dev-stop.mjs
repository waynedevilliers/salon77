import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findDevProcesses, parsePsOutput } from './dev-processes.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lockFile = path.join(root, '.next', 'dev', 'lock');

function readProcesses() {
  const output = execFileSync('ps', ['-eo', 'pid=,args='], {
    encoding: 'utf8',
  });
  return parsePsOutput(output).map((proc) => {
    let cwd;
    try {
      cwd = fs.readlinkSync(`/proc/${proc.pid}/cwd`);
    } catch {
      cwd = undefined;
    }
    return { ...proc, cwd };
  });
}

function isAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Stops every dev server started from this project, including child processes. */
export async function stopDevServers() {
  const pids = findDevProcesses(readProcesses(), root, [
    process.pid,
    process.ppid,
  ]);

  for (const pid of pids) {
    try {
      process.kill(pid, 'SIGTERM');
    } catch {
      // Already gone.
    }
  }

  await sleep(1500);

  for (const pid of pids) {
    if (isAlive(pid)) {
      try {
        process.kill(pid, 'SIGKILL');
      } catch {
        // Already gone.
      }
    }
  }

  removeStaleLock();
  return pids;
}

/** Removes the Next.js dev lock when the process it names is no longer running. */
export function removeStaleLock() {
  if (!fs.existsSync(lockFile)) return false;
  try {
    const { pid } = JSON.parse(fs.readFileSync(lockFile, 'utf8'));
    if (pid && isAlive(pid)) return false;
  } catch {
    // Unreadable lock: treat as stale.
  }
  fs.rmSync(lockFile, { force: true });
  return true;
}

const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) {
  const pids = await stopDevServers();
  console.log(
    pids.length
      ? `Stopped ${pids.length} dev process(es): ${pids.join(', ')}`
      : 'No dev servers from this project are running.'
  );
}
