# @myyrakle/compare-semver

![](https://img.shields.io/badge/language-Javascript-red) ![](https://img.shields.io/badge/version-1.0.1-brightgreen) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/myyrakle/compare-semver/blob/master/LICENSE)

A library that provides functions for comparing semver strings.

It provides the following comparison functions.
Each takes two semver strings as parameters.

```
const {
    compareSemver,
    lessThanSemver,
    lessEqualSemver,
    greaterThanSemver,
    greaterEqualSemver,
    equalSemver,
    notEqualSemver,
} = require('@myyrakle/compare-semver');
```

##

Among these, compareSemver is the core function. Other functions are nothing more than reuse of this function.

Takes two semver strings, and returns -1 if the left is less, 0 if it is equal, and 1 if the left is greater.

```
console.log(compareSemver("1", "1.2.0")); // -1
console.log(compareSemver("3.3.3", "3.3.3")); // 0
console.log(compareSemver("1.0.1", "1.0.0")); // 1
```

##

The rest of the functions return true or false depending on the given condition.

```
const lhs = '1.1.0';
const rhs = '1.1.1';
console.log(lessThanSemver(lhs, rhs)); // true
console.log(lessEqualSemver(lhs, rhs));  // true
console.log(greaterThanSemver(lhs, rhs)); // false
console.log(greaterEqualSemver(lhs, rhs)); // false
console.log(equalSemver(lhs, rhs)); // false
console.log(notEqualSemver(lhs, rhs)); // true
```
