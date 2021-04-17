# LostTemple

로템 2v2 초보만@@ c언어와 함께

![마스코트](DOCS/img/cat_wearing_hat.jpeg)

## 이게 뭐죠?

LostTemple 은 Javascript를 파이썬 처럼 쓰게 도와주는 트랜스파일러 입니다.

![바람직한 코딩스타일 예제](DOCS/img/brace_style.png)

파이썬을 써본 사람이라면 누구나

위의 사진처럼 다른언어에서도 파이썬처럼 { } 와 ; 없이 코드를 짜고 싶어집니다.

```js

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

```

LostTemple 을 사용하여 트랜스파일하면 아래와 같이 변합니다!
      ↓ ↓ ↓ ↓ ↓ ↓

```js
for (let i = 0; i < 10; i++)               {
  for (let j = 0; j < 10; j++)             {
    console.log(`${i} * ${j} = ${i * j}`)  ;}}

```

## 사용법

### 설치

```
npm install lost-temple -g
```

### 트랜스파일 하기

아래의 3가지 방법으로 hello.js를 트랜스파일 할 수 있습니다.

```sh

lost hello.js

lost hello.js -o hello.py.js

lost hello.js --output hello.py.js

```
