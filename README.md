# LostTemple

로템 2v2 초보만@@ c언어와 함께

![마스코트](DOCS/img/cat_wearing_hat.jpeg)

## 이게 뭐죠?

LostTemple 은 C언어를 파이썬 처럼 쓰게 도와주는 트랜스파일러 입니다.

![바람직한 코딩스타일 예제](DOCS/img/brace_style.png)

파이썬을 써본 사람이라면 누구나

위의 사진처럼 다른언어에서도 파이썬처럼 { } 와 ; 없이 코드를 짜고 싶어집니다.

```c
#include <stdio.h>

int main():
    printf("hello world")

    return false

```

LostTemple 을 사용하여 트랜스파일하면 아래와 같이 변합니다!
      ↓ ↓ ↓ ↓ ↓ ↓

```c
#include <stdio.h>

int main() {
    printf("hello world");

    return 0;
}
```

와 같은 형식으로 변환 시킬 수 있습니다.

## 사용법 (아직 완성되지 않음)

### 설치

```
sudo pip3 install lost_temple
```

### 설정 파일 만들기

설정파일 .lost_temple 을 working directory에 만드세요

아래와 같은 구조를 가져야 합니다.
```json
{
    "source": [
        "./sources",
        "./sources2"
    ],
    "header": [
        "./headers",
        "./headers2",
    ],
    "target": [
        "./build"
    ]
}
```

### 트랜스파일 하기

.lost_temple 설정 파일이 있다면 다음과 같이 간단하게 트랜스파일 할 수 있습니다

```sh

lost-temple

```

.lost_temple 설정 파일이 없다면

```sh

lost-temple -o ./build   ./sources ./headers

```

와 같이 실행해야 합니다.

```sh
.
├── headers
│   └── actuator.hat
├── headers2
│   ├── protocol.hat
│   └── sensor.hat
├── sources
│   ├── actuator.cat
│   ├── protocol.cat
│   ├── sensor.cat
│   └── subdir
│       ├── deep_directory
│       │   └── deep.cat
│       └── sub.cat
└── sources2
    └── actuator.cat
```

      ↓ ↓ ↓ ↓ ↓ ↓

```sh
.
├── build
│   ├── headers
│   │   └── actuator.h
│   ├── headers2
│   │   ├── protocol.h
│   │   └── sensor.h
│   ├── sources
│   │   ├── actuator.c
│   │   ├── protocol.c
│   │   ├── sensor.c
│   │   └── subdir
│   │       ├── deep_directory
│   │       │   └── deep.c
│   │       └── sub.c
│   └── sources2
│       └── actuator.c
├── headers
│   └── actuator.hat
├── headers2
│   ├── protocol.hat
│   └── sensor.hat
├── sources
│   ├── actuator.cat
│   ├── protocol.cat
│   ├── sensor.cat
│   └── subdir
│       ├── deep_directory
│       │   └── deep.hat
│       └── sub.cat
└── sources2
    └── actuator.cat
```