const fs = require("fs");
const path = require("path");
const vscode = require("vscode");

function activate(context) {
  const disposable = vscode.commands.registerCommand("misrosoftVsCode.startGuardian", () => {
    const panel = vscode.window.createWebviewPanel(
      "misrosoftVsCodeGuardian",
      "微软大战代码：守护你的代码文件",
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [
          vscode.Uri.joinPath(context.extensionUri, "微软大战代码_HTML原型"),
          vscode.Uri.joinPath(context.extensionUri, "微软大战代码_素材库")
        ]
      }
    );

    panel.iconPath = vscode.Uri.joinPath(
      context.extensionUri,
      "微软大战代码_素材库",
      "图片资源",
      "战斗地点_VSCode",
      "devicon_vscode_original.svg"
    );
    panel.webview.html = getWebviewHtml(context, panel.webview);
  });

  context.subscriptions.push(disposable);
}

function getWebviewHtml(context, webview) {
  const htmlPath = path.join(context.extensionPath, "微软大战代码_HTML原型", "index.html");
  const assetsRoot = webview.asWebviewUri(
    vscode.Uri.joinPath(context.extensionUri, "微软大战代码_素材库", "图片资源")
  ).toString();

  return fs
    .readFileSync(htmlPath, "utf8")
    .replaceAll("../微软大战代码_素材库/图片资源/", `${assetsRoot}/`);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
