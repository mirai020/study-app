# JavaScript 学習メモ

## 配列の最後を超えないようにする

問題が3個あるとき、

questions.length は 3

でも配列の番号は

0
1
2

なので、最後の番号は

questions.length - 1

になる。

### 今回のコード

if (i < questions.length - 1) {
    i++;
    questionText.textContent = questions[i];
}

### 覚え方

配列の個数 = length
最後の番号 = length - 1

-------------------------------------------------------------------------------------------------------------------------------------------





次の問題に切り替えるときは、
問題文だけでなく「表示状態」も初期化する。

例：
answerText.style.display = 'none';
answerButton.textContent = '答えを出す';