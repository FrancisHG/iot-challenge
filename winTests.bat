@ECHO OFF

call npm install express
call npm install jest

call npm run test --coverage

pause