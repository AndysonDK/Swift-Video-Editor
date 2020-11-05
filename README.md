# Swift-Video-Editor
A web app that can edit video files, like splicing them together, cutting them, and exporting a final version. All that done very efficiently in C (webassembly)

### How to run

From inside of the src directory run the following comamnd 
if you are using Linux to compile the main.c file to webassembly with some JavaScript "glue" code

 **emcc -O3 main.c -o ../bin/main.js**
