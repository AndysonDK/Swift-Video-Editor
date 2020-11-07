#include <stdio.h>
#include <emscripten.h>


EMSCRIPTEN_KEEPALIVE
int add(int x, int y) {
  printf("looool");

  return x + y;
}
