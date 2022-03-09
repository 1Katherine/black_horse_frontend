const fs = require("fs");
const path = require("path");

const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(
  path.join(__dirname, "./素材/index.html"),
  "utf-8",
  function (err, dataStr) {
    if (err) return console.log("读取文件失败！" + err.message);

    resolveCss(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
  }
);

function resolveCss(htmlStr) {
  // 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr);
  console.log(r1);
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  fs.writeFile(
    path.join(__dirname, "./clock/index.css"),
    newCSS,
    function (err) {
      if (err) return console.log("写入文件失败！" + err.message);
      console.log("写入样式文件成功！");
    }
  );
}

function resolveJS(htmlStr) {
  // 使用正则提取需要的内容
  const r1 = regScript.exec(htmlStr);
  console.log(r1);
  const newCSS = r1[0].replace("<script>", "").replace("</script>", "");
  fs.writeFile(
    path.join(__dirname, "./clock/index.js"),
    newCSS,
    function (err) {
      if (err) return console.log("写入文件失败！" + err.message);
      console.log("写入 JS 文件成功！");
    }
  );
}

function resolveHTML(htmlStr) {
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
    .replace(regScript, '<script src="./index.js"></script>');
  fs.writeFile(
    path.join(__dirname, "./clock/index.html"),
    newHTML,
    function (err) {
      if (err) return console.log("写入html文件失败！" + err.message);
      console.log("写入 HTML 文件成功！");
    }
  );
}
