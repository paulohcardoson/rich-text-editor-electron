const { join } = require('path');
const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1300,
    altura: 700,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile(join(__dirname, 'layout', 'index.html'))
}

app.whenReady().then(createWindow)