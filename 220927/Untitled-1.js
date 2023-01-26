//전역변수
var txt1 = 1;
function test1() { document.write(txt1) };
function test2() { document.write(txt1) };
document.write(txt1);
test1();
test2();


//지역변수

function test1() { var txt1 = 1; document.write(txt1) };
function test2() { document.write(txt1) };
document.write(txt1);
test1();
test2();
