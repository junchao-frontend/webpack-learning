import hello from "./hello";
// import imgsrc from '../assets/sun.png'
import exampleTxt from '../assets/test.txt'
import './style.css'
import './style.less'
import Data from '../assets/data.csv'
import Note from '../assets/data.xml'
hello()
// console.log(imgsrc);
// 运行webpack npx webpack
// npx webpack --help
// npx webpack --entry ./src/index.js --mode development  指定入口文件

// const img = document.createElement('img')
// img.src = imgsrc
// document.body.appendChild(img)

// document.body.classList.add('box')
const block = document.createElement('div')
block.style.cssText = 'width:200px;height:200px;background:skyblue'
block.classList.add('block-bg')
block.textContent = exampleTxt
document.body.appendChild(block)
console.log(Data);
console.log(Note);