## 安装

```
npm install itheima-tools-yangbak
```

# 导入

```js
const itheima = require("itheima-tools-yangbak");
```

## 格式化时间

```js
// 调用 dateFormat 对时间进行格式化
const dtStr = itheima.dataFormat(new Date());
// 结果 2022-03-10 14:29:54
console.log(dtStr);
```

## 转义 HTML 中的特殊字符

```js
// 待转义的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>23&nbsp;</spam></h1>';
// 调用 htmlEscape 方法进行转换
const str = itheima.htmlEscape(htmlStr);
// 转换的结果 &lt;h1 title=&qoutabc&qout&gt;这是h1标签&lt;span&gt;23&amp;nbsp;&lt;/spam&gt;&lt;/h1&gt;
console.log(str);
```

## 还原 HTML 中的特殊字符

```js
// 待还原的 HTML 字符串
const str = &lt;h1 title=&qoutabc&qout&gt;这是h1标签&lt;span&gt;23&amp;nbsp;&lt;/spam&gt;&lt;/h1&gt;
// 调用 htmlUnEscape 进行还原
const str2 = itheima.htmlUnEscape(str);
// 还原结果 <h1 title="abc">这是h1标签<span>23&nbsp;</spam></h1>
console.log(str2);
```

## 开源协议

ISC
