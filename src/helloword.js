const vscode = require('vscode');
module.exports = function (context) {
    // 注册HelloWord命令
    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello2', () => {
        // vscode.window.showInformationMessage('Hello World！朱鹏飞！');
        console.log("sayHello2");
        vscode.commands.executeCommand('extension.demo.showWelcome');
    }));
};