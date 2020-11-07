# Swift-Video-Editor
A web app that can edit video files, like splicing them together, cutting them, and exporting a final version. All that done very efficiently in C (webassembly)

### How to run

From inside of the src directory run the following comamnd 
if you are using Linux to compile the main.c file to webassembly with some JavaScript "glue" code

`emcc -O2 ../src/main.c -o main.js`

### TODO:
* Find out about how to preserve function names from C code in JavaScript code while still having `-O3` optimisations!
* Can one use `printf()` in C code and get it to print in the browser console??
* Set up TypeScript Github actions tests since Next.js doesn't catch TypeScript errors anymore in development, only in build phase 😔
* Try to make use of **make** files for C compilation to webassembly!
* Read about video editing in C and make sure that one can pass a video from the browser into the C code for processing!
