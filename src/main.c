//#include <stdio.h>
#include <emscripten.h>


//int main() {
//  //printf("lool");
//
//  return 0;
//}

EMSCRIPTEN_KEEPALIVE
int add(int x, int y) {
  //printf("looool");

  return x + y;
}
