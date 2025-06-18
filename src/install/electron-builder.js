
let rebuild_1 = require("app-builder-lib/out/util/rebuild/rebuild");

console.log('src\install\electron-builder.js修改方法',rebuild_1)
let rebuildFunc = rebuild_1.rebuild;
rebuild_1.rebuild = function (a,b,c){
    console.log('src\install\electron-builder.js修改方法--参数', a,b,c)
    a.ignoreModules = [
        '@jitsi/robotjs'
    ];
    return rebuildFunc.call(this, a)
}
console.log('src\install\electron-builder.js修改方法--开始核心')

// https://github.com/pnpm/pnpm/issues/1801
require("electron-builder/out/cli/cli")
