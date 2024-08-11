const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('IS_WGDASHBOARD_DESKTOP', true)