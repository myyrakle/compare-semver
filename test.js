const {
    compareSemver,
    lessThanSemver,
    lessEqualSemver,
    greaterThanSemver, 
    greaterEqualSemver,
    equalSemver,
    notEqualSemver,
} = require('./index');

const lhs = '1.1.0';
const rhs = '1.1.1';

console.log(compareSemver(lhs, rhs));
console.log(compareSemver("1", "1.2.0")); // -1
console.log(compareSemver("3.3.3", "3.3.3")); // 0
console.log(compareSemver("1.0.1", "1.0.0")); // 1

const lhs = '1.1.0';
const rhs = '1.1.1';
console.log(lessThanSemver(lhs, rhs)); // true 
console.log(lessEqualSemver(lhs, rhs));  // true 
console.log(greaterThanSemver(lhs, rhs)); // false 
console.log(greaterEqualSemver(lhs, rhs)); // false 
console.log(equalSemver(lhs, rhs)); // false 
console.log(notEqualSemver(lhs, rhs)); // true