/*
 * @Author: Yang
 * @Date: 2022-03-08 19:47:18
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-08 19:50:34
 * @Description: file content
 */
const fs = require('fs')

fs.readFile('./files/11.txt', 'utf-8', function(err, dataStr) {
    console.log(err)

    console.log('--------------')

    console.log(dataStr)
})