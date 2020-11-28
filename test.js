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
console.log(lessThanSemver(lhs, rhs));
console.log(lessEqualSemver(lhs, rhs));
console.log(greaterThanSemver(lhs, rhs));
console.log(greaterEqualSemver(lhs, rhs));
console.log(equalSemver(lhs, rhs));
console.log(notEqualSemver(lhs, rhs));