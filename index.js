const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1366,
		height: 768,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	win.loadFile('index.html')

	win.isElectron = true
}

app.whenReady().then(() => {
	createWindow()
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})