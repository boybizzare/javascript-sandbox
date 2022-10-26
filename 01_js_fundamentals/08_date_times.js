let val;

const today = new Date();

val = today;

let birthday = new Date('9-10-1981');
birthday = new Date('September 10 1981 11:25:22');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMilliseconds();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(20);
birthday.setFullYear(1998);
birthday.setHours(4);
birthday.setMinutes(30);
birthday.setSeconds(25);





console.log(birthday);