/// <reference types="vitest" />
import { findDevProcesses, parsePsOutput } from './dev-processes.mjs';

const root = '/home/user/salon77';

describe('findDevProcesses', () => {
  it('finds the npm, shell, next and worker processes of a dev server', () => {
    const processes = [
      { pid: 10, cwd: root, args: 'npm run dev' },
      { pid: 11, cwd: root, args: 'sh -c next dev' },
      {
        pid: 12,
        cwd: root,
        args: 'node /home/user/salon77/node_modules/.bin/next dev',
      },
      { pid: 13, cwd: root, args: 'next-server (v16.4.3)' },
      {
        pid: 14,
        cwd: root,
        args: 'node /home/user/salon77/.next/dev/build/chunks/pool_entry-[turbopack-node].js',
      },
    ];
    expect(findDevProcesses(processes, root, [99])).toEqual([
      10, 11, 12, 13, 14,
    ]);
  });

  it('ignores processes from other projects', () => {
    const processes = [
      {
        pid: 20,
        cwd: '/home/user/alegria-band',
        args: 'next-server (v16.2.12)',
      },
    ];
    expect(findDevProcesses(processes, root, [99])).toEqual([]);
  });

  it('ignores shells and editors that only mention the dev command', () => {
    const processes = [
      { pid: 30, cwd: root, args: 'bash' },
      { pid: 31, cwd: root, args: '/bin/bash -c npm run dev' },
      { pid: 32, cwd: root, args: 'code --type=renderer' },
    ];
    expect(findDevProcesses(processes, root, [99])).toEqual([]);
  });

  it('never returns the running script or its npm parent', () => {
    const processes = [
      { pid: 40, cwd: root, args: 'node scripts/dev.mjs' },
      { pid: 41, cwd: root, args: 'npm run dev' },
    ];
    expect(findDevProcesses(processes, root, [40, 41])).toEqual([]);
  });
});

describe('parsePsOutput', () => {
  it('splits pid and arguments, including arguments with spaces', () => {
    const output = '  101 npm run dev\n  102 next-server (v16.4.3)\n';
    expect(parsePsOutput(output)).toEqual([
      { pid: 101, args: 'npm run dev' },
      { pid: 102, args: 'next-server (v16.4.3)' },
    ]);
  });
});
