console.log(document.head);

console.log(document.body);

console.log(window);

console.log(document.getElementById('text'));

const btn = document.getElementById('btn');

const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
}, 2000);
});