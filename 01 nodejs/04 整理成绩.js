/*
 * @Author: Yang
 * @Date: 2022-03-08 20:12:23
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-08 20:20:30
 * @Description: file content
 */

const fs = require('fs')

fs.readFile('./素材/成绩.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)

    // 把成绩数据按照空格进行分割, 得到一个数组
    const arrOld = dataStr.split(' ')
    
    // 循环数组，将数组中的=替换成：
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })

    // 将数据中的数据合并成一个str，中间插入换行符
    const newStr = arrNew.join('\r\n')

    // 把处理完毕的str写入到新文件中
    fs.writeFile('./files/成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('写入文件失败！' + err.message)
        }
        console.log('写入文件成功')
    })


})


