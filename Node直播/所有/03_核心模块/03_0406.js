var fs = require("fs/promises");
console.log(fs)
var path = require("path");


/*
    fs.readFile() 读取文件
    fs.appendFile() 创建新文件，或将数据添加到已有文件中
    fs.mkdir() 创建目录
    fs.rmdir() 删除目录
    fs.rm() 删除文件
    fs.rename() 重命名 (剪切)
    fs.copyFile() 复制文件（复制）
*/

//1
// fs.mkdir(path.resolve(__dirname, "./hello/abc")).then(r => {
//
//     console.log("success")
// }).catch(err => {
//     console.log("fail")
// })


//2
// fs.rmdir(path.resolve(__dirname, "./hello/abc"))
//     .then(r => {
//             console.log("success")
//         }
//     )


fs.mkdir(path.resolve(__dirname, "./hello/abc"),
    {recursive: true})
    .then(r => {
        console.log("success")
    }).catch(err => {
    console.log("fail")
})
