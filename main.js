const electron = require('electron');
const { app, BrowserWindow } = electron;
const 
    path = require('path'),
    url = require('url');

let mw, dpi, sw, loader;
dpi = __dirname + '/src/build/index.html';
loader = __dirname + '/src/plan/loader.html';

app.on('ready', ()=>{
   
    mw = new BrowserWindow({ 
        minWidth: 800,
        show:false,
        frame:false, 
        minHeight: 600, 
        titleBarStyle: 'hidden',
        icon: path.join(__dirname + '/assets/icons/', 'icon.png')
    });
    sw = new BrowserWindow({
        height: 400,
        width: 400,
        show: true,
        frame: false,
        parent: mw
    });
    sw.loadFile(loader);
    mw.on('closed', ()=>{
        mw = null;
        sw = null;
        process.exit();
    });
    mw.on('ready-to-show', ()=>{
        sw.close();
        sw = null;
        mw.show();
    });
    // mw.loadFile(dpi);
    mw.loadURL('http://localhost:3000')
});
