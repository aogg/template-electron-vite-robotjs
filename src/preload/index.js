import { ipcRenderer,contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

console.log('preload执行');

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    
  contextBridge.exposeInMainWorld('electronAPI', {
    clickSend: (data) => ipcRenderer.send('clickSend', data)
  })

  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}




ipcRenderer.on('asynchronous-reply', (_event, arg) => {
  console.log(arg) // 在 DevTools 控制台中打印“pong”
})
ipcRenderer.send('asynchronous-message', 'ping')