@ECHO OFF

call npm install express
call npm install jest

npm run test --coverage 2>&1