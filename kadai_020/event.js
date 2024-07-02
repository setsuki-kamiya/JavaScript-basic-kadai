// HTML要素をidで取得し、中身を出力する
const text =document.getElementById('text');
const btn =document.getElementById('btn');
btn.addEventListener('click',()=>{
  text.textContent ='ボタンをクリックしました'
});

console.log(text);
console.log('btn');



