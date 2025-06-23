// import {clipboard, ipcMain, Menu, MenuItem} from "electron";

const {clipboard, ipcMain} = require('electron');
// const { windowManager } = require("node-window-manager");
const robot = require('@jitsi/robotjs');

import {sleep} from '@main/helper'


let mainWindow = null;

function getContentItemFullText(contentItem){

    switch(contentItem.type){
        case 'text':
            return contentItem.text;
    }
    
    return '';
}

export function run(){
    ipcMain.on('clickSend', (event, data) => {
        // console.log(event, data);
        console.log('data=', data);

        // 获取系统剪贴板中的内容
        // const text = clipboard.readText()

        // console.log('黏贴text=', text);

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
        
        async function runFor() {
            
            for (let contentItem of data.content) { 
                let text = getContentItemFullText(contentItem)
                console.log('send-text=', text);
                clipboard.writeText(text)
                // navigator.clipboard.writeText(text)

                await sleep(100)
                robot.keyTap("v", "control");
                    
                robot.keyTap("enter");
            }
        }

        runFor()
// clipboard.writeText(text)
        //
        //
        // 执行回车操作

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