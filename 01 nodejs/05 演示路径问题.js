/*
 * @Author: Yang
 * @Date: 2022-03-08 20:25:54
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-08 20:45:16
 * @Description: file content
 */
const fs = require('fs')
fs.readFile(__dirname + '/files/1.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败!' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
})

// 当前文件所处目录
// console.log()