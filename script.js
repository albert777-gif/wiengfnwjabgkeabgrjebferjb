
const arr = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango', 'orange'];

const aWords = [];
const nonAWords = [];

arr.forEach((element) => {
    if (element.includes('a')) {
        aWords.push(element);
    } else {
        nonAWords.push(element);
    }
});

console.log('A harfi bor so\'zlar:',);
console.log('A harfi yo\'q so\'zlar:', );


