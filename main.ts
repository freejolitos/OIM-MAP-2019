import { app, BrowserWindow, Menu, Tray } from 'electron';

import * as path from 'path';
import * as url from 'url';

let mainWindow: BrowserWindow = null;

// detect serve mode
const args = process.argv.slice(1);
let serve: boolean = args.some(val => val === '--serve');



function createWindow() {

    mainWindow = new BrowserWindow({
        titleBarStyle: "hidden",
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            plugins: true,
            webviewTag: true
        },
        // backgroundColor: '#312450',
        show: false
        // frame: false // Ocultar el marco de la ventana
    });


      mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        mainWindow.maximize();
      });


    if (serve) {
        // get dynamic version from localhost:4200
        require('electron-reload')(__dirname, {
            electron: require(`${__dirname}/node_modules/electron`)
        });
        mainWindow.loadURL('http://localhost:4200');

        // The following is optional and will open the DevTools:
        mainWindow.webContents.openDevTools();
    } else {
        // load the dist folder from Angular
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, `/dist/index.html`),
                protocol: "file:",
                slashes: true,
                //icon: path.join(__dirname, 'assets/icons/favicon.png')
            })
        );
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

try {

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on('ready', createWindow);

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    // initialize the app's main window
    app.on("activate", () => {
        if (mainWindow === null) {
            createWindow();
        }
    });

} catch (e) {
    // Catch Error
    // throw e;
}
