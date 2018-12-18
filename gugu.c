#include <stdio.h>
#include <stdlib.h>
int main() {
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            print("%d times %d is %d \n", i, j, i * j);
        }
    }
}
