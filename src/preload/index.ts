import { contextBridge } from 'electron';

if (!process.contextIsolated) {
  throw new Error('Preload must be run in contextIsolation');
}

try {
  contextBridge.exposeInMainWorld('context', {});
} catch (error) {
  console.error(error);
}
