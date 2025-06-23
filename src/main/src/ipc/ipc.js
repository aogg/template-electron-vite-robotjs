// import {clipboard, ipcMain, Menu, MenuItem} from "electron";

const {clipboard, ipcMain} = require('electron');
// const { windowManager } = require("node-window-manager");
const robot = require('@jitsi/robotjs');

let mainWindow = null;

export function run(){
    ipcMain.on('clickSend', (event, data) => {
        // console.log(event, data);

        // 获取系统剪贴板中的内容
        const text = clipboard.readText()

        console.log('text=', text);

        // 隐藏当前窗口
        // minimize
        // 失去焦点
        mainWindow.blur();

        // mainWindow.webContents.paste();



        // console.log( windowManager.getActiveWindow());

        // 获取当前正在活动的窗口句柄
        // const activeWindowHandle = require("@electron/remote")
        //     .getCurrentWindow().getNativeWindowHandle();
        //
        // console.log(activeWindowHandle);

        // 切换到上一个用户操作的窗口
        // require("node-windows").window.switchTo(activeWindowHandle);
        // windowManager.window.switchTo(activeWindowHandle);

        // 执行黏贴操作
        // const text = 'hello i am a bit of text!'
        
// clipboard.writeText(text)
        robot.keyTap("v", "control");
        //
        //
        // // 执行回车操作
        robot.keyTap("enter");

        // 执行黏贴操作

        // 模拟键盘事件来输入回车符
        // const { Menu, MenuItem } = require('electron')
        // const menu = new Menu()
        // menu.append(new MenuItem({
        //     role: 'undo'
        // }))
        // menu.popup()
        // menu.closePopup()
    })
}

export function setInit(mainWindowMain){
    mainWindow = mainWindowMain
}

// module.exports ={
//     run,
//     setInit,
// }