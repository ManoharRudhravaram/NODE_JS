let fs=require('fs')
    //synchronous
//  fs.writeFileSync('demo.doc','Welcome to node js');
//  console.log('done');

    //asynchronous
// console.log('dev1');
// fs.writeFile('demo2.doc','welcome again to node js',(err)=>{
//     if(err){
//         return
//     }
//     else{
//         console.log('created file');
//     }
// })
// console.log('dev2');

    //sync
// let data=fs.readFileSync('demo2.doc','utf-8')
// console.log(data);
    //async
// fs.readFile('demo.doc','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// fs.appendFile('demo.doc','i am from MERN stack',(err)=>{
//     if(err){
//         console.log('something wrong while updating');
//     }
//     else{
//         console.log('updated successfully');
//     }
// })

// fs.unlink('demo2.pdf',(err)=>{
//     if(err){
//         console.log('error');
//     }
//     else{
//         console.log('deleted');
//     }
// })

// fs.renameSync('demo.doc','demo.txt')
// fs.rename('demo.txt','demo1.txt',(err)=>{
//     if(err){
//         console.log('error');
//     }
//     else{
//         console.log('renamed');
//     }
// })

// fs.mkdirSync('react')
// fs.rmdirSync('react')