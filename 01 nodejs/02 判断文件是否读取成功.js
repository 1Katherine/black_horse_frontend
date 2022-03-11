/*
 * @Author: Yang
 * @Date: 2022-03-08 19:53:09
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-08 20:05:40
 * @Description: file content
 */
const fs = require('fs')

fs.readFile('./files/1.txt', 'utf-8', function(err, dataStr) {
    // err为null，执行成功
    if (err) {
        return console.log('读取文件失败！ '  + err.message);
    }
    console.log('读取文件成功！' + dataStr)
})