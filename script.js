'use strict';



const answerButton = document.getElementById('answerButton');
const answerText = document.getElementById('answerText');
const nextButton = document.getElementById('nextButton');
const questionText = document.getElementById('questionText');
const returnButton = document.getElementById('returnButton');


answerButton.addEventListener('click', () => {

    if (getComputedStyle(answerText).display === 'none') {
        answerText.style.display = 'block';
        answerButton.textContent = '答えを隠す';
    } else {
        answerText.style.display = 'none';
        answerButton.textContent = '答えを出す';

    }

});


const questions = [
    '日本の首都はどこでしょう？',
    '1 + 1 は？',
    '英語で犬は？'
]

const answers = [
    '東京',
    '2',
    'dog'
]


let i = 0;
// 配列は0から始まるので、最後の番号は length - 1
nextButton.addEventListener('click', () => {
    if (i < questions.length - 1) {
        i++;
        questionText.textContent = questions[i];
        answerText.textContent = answers[i];

        answerText.style.display = 'none';
        answerButton.textContent = '答えを出す';
    }


});

//最初に戻る　ボタンを押したら最初の問題に戻る
returnButton.addEventListener('click', () => {
    i = 0;
    questionText.textContent = questions[i];
    answerText.textContent = answers[i];

    answerText.style.display = 'none';
    answerButton.textContent = '答えを出す';



})