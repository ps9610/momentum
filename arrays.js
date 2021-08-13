/* 배열을 이용하지 않은 경우 */
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thur = "thur";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thur + fri + sat + sun;

console.log(daysOfWeek);
/////////////////////////////////////////////////////////////////

/* 배열을 이용한 경우 */
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thur = "thur";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thur, fri, sat, sun];

const nonSense = [1, 2, "hello", false, null, true, undefined, "javascript"];

console.log(daysOfWeek, nonSense);
/////////////////////////////////////////////////////////////////

/* 배열 안 데이터 접근 방법 */
const daysOfWeek = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

console.log(daysOfWeek[5]); //not fri, sat
console.log(daysOfWeek[4]); // fri !!
/////////////////////////////////////////////////////////////////
