const electron = require('electron');
const { app, BrowserWindow } = electron;
const 
    path = require('path'),
    url = require('url');

let mw, dpi, res, menu, icon;
dpi = __dirname + '/src/dpi/';
res = __dirname + '/src/res/';
icon = url.format({
    pathname: path.join(res, 'icon', 'blue_circle.png'),
    protocol: 'file:'
});
// screen = url.format({
//     pathname: path.join(dpi, 'build/index.html'),
//     protocol: 'file:'
// });

app.on('ready', ()=>{
    mw = new BrowserWindow({ minWidth: 800, minHeight: 600, frame:true });
    console.log(mw.getBounds())
    mw.on('closed', ()=>{
        mw = null;
        process.exit();
    });
    mw.on('ready-to-show', ()=>{
        mw.show();
    });
    mw.loadURL('http://localhost:3000');
});
