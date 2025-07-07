const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // File operations
  writeFile: (filePath, content) => ipcRenderer.invoke('write-file', filePath, content),
  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),
  ensureDirectory: (dirPath) => ipcRenderer.invoke('ensure-directory', dirPath),
  
  // Dialog operations
  showSaveDialog: () => ipcRenderer.invoke('show-save-dialog'),
  
  // Menu event listeners
  onMenuNewProject: (callback) => ipcRenderer.on('menu-new-project', callback),
  onMenuSaveAll: (callback) => ipcRenderer.on('menu-save-all', callback),
  onMenuToggleFocus: (callback) => ipcRenderer.on('menu-toggle-focus', callback),
  onExportData: (callback) => ipcRenderer.on('export-data', callback),
  
  // App info
  platform: process.platform,
  isElectron: true
});