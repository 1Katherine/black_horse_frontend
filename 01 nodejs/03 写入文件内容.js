/*
 * @Author: Yang
 * @Date: 2022-03-08 20:04:12
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-08 20:07:29
 * @Description: file content
 */
const fs = require('fs')

fs.writeFile('./files/2.txt', 'abcd', function(err) {
    // 如果文件执行成功，err返回null
    // 如果文件执行失败，err返回错误对象
    // console.log(err)

    if (err) {
        return console.log('文件写入失败！' + err.message)
    } 

    console.log('文件写入成功！')
})