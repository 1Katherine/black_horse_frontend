// 定义转义 html 字符的函数
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, (match) => {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&qout";
      case "&":
        return "&amp;";
    }
  });
}

// 定义还原html字符串的函数
function htmlUnEscape(htmlStr) {
  return htmlStr.replace(/&lt;|&gt;|&qout|&amp;/g, (match) => {
    switch (match) {
      case "&lt;":
        return "<";
      case "&gt;":
        return ">";
      case "&qout":
        return '"';
      case "&amp;":
        return "&";
    }
  });
}

module.exports = {
  htmlEscape,
  htmlUnEscape,
};
