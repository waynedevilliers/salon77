/**
 * Pure helpers for finding this project's Next.js dev processes.
 * Kept free of side effects so they can be unit tested.
 */

// Anchored to the start of the command line, so a shell that merely mentions
// "npm run dev" in its arguments is not matched.
const DEV_SERVER_PATTERN =
  /^npm run dev\b|^sh -c next dev|^next-server\b|^node\b.*\bnext dev\b|^node\b.*pool_entry|^node\b.*scripts\/dev\.mjs/;

/**
 * @param {{ pid: number, cwd: string | undefined, args: string }[]} processes
 * @param {string} root absolute path of the project
 * @param {number[]} excludePids pids that must never be returned, such as the running script and its npm parent
 * @returns {number[]} pids of this project's dev-server processes
 */
export function findDevProcesses(processes, root, excludePids) {
  return processes
    .filter(
      (proc) =>
        !excludePids.includes(proc.pid) &&
        proc.cwd === root &&
        DEV_SERVER_PATTERN.test(proc.args)
    )
    .map((proc) => proc.pid);
}

/**
 * @param {string} output text from `ps -eo pid=,args=`
 * @returns {{ pid: number, args: string }[]}
 */
export function parsePsOutput(output) {
  return output
    .split('\n')
    .map((line) => line.trim().match(/^(\d+)\s+(.*)$/))
    .filter(Boolean)
    .map(([, pid, args]) => ({ pid: Number(pid), args }));
}
