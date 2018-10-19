# LostTemple
로템 2v2 초보만

## What it is?

LostTemple 은 C언어를 파이썬 처럼 쓰게 도와주는 트랜스파일러 입니다.

![바람직한 코딩스타일 예제](DOCS/img/brace_style.png)

파이썬을 써본 사람이라면 누구나

위의 사진처럼 다른언어에서도 파이썬처럼 { } 와 ; 없이 코드를 짜고 싶어집니다.

LostTemple 을 사용하여 트랜스파일하면

```c
import <stdio.h>

int main():
    printf("hello world")

    return false

```

위의 코드를 아래의

      ↓ ↓ ↓ ↓ ↓ ↓

```
#include <stdio.h>

int main() {
    printf("hello world");

    return 0;
}
```

와 같은 형식으로 변환 시킬 수 있습니다.

## How to use it

### 설치

```
sudo pip3 install lost_temple
```

### 설정 파일 만들기

설정파일 .lost_temple 을 working directory에 만드세요

```json
{
    "source": {
        "./sources"
    },
    "header": {
        "./headers/"
    },
    "target": {
        "./build"
    }
}
```

### 트랜스파일 하기

.lost_temple 설정 파일이 있다면 다음과 같이 간단하게 트랜스파일 할 수 있습니다

```sh

temple

```

.lost_temple 설정 파일이 없다면

```sh

temple --source="./sources" --header="./headers" target="./build"

```

와 같이 실행해야 합니다.
