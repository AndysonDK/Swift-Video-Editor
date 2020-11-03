#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int main() {
  printf("loooool");

  return 0;
}

EMSCRIPTEN_KEEPALIVE
int add(int x, int y) {
  return x + y;
}
