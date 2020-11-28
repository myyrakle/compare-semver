// 왼쪽이 작으면 -1
// 같으면 0
// 오른쪽이 크면 1
function compareSemver(lhs, rhs) {
    const l = lhs.split('.').map(Number);
    const r = rhs.split('.').map(Number);

    const len = l.length > r.length ? l.length : r.length;

    for(let i = 0; i<len; i++) {
        let lversion = l[i] || 0;
        let rversion = r[i] || 0;

        if(lversion < rversion) {
            return -1;
        }
        if(lversion > rversion) {
            return 1;
        }
    }
    return 0;
}

// 왼쪽이 작으면 true
function lessThanSemver(lhs, rhs) {
    return compareSemver(lhs, rhs) == -1;
}

// 왼쪽이 작거나 같으면 true
function lessEqualSemver(lhs, rhs) {
    return compareSemver(lhs, rhs) <= 0;
}

// 왼쪽이 크면 true
function greaterThanSemver(lhs, rhs) {
    return compareSemver(lhs, rhs) == 1;
}

// 왼쪽이 크거나 같으면 true
function greaterEqualSemver(lhs, rhs) {
    return compareSemver(lhs, rhs) >= 0;
}

// 같으면 true
function equalSemver(lhs, rhs) {
    return compareSemver(lhs, rhs) == 0;
}

// 다르면 true
function notEqualSemver(lhs, rhs) {
    return compareSemver(lhs, rhs) != 0;
}

module.exports = {
    compareSemver,
    lessThanSemver,
    lessEqualSemver,
    greaterThanSemver, 
    greaterEqualSemver,
    equalSemver,
    notEqualSemver,
}

// example
// compareSemver("1.2.0", "1.2.1"); // -1
// lessThanSemver("1.3", "1.2.1"); // false
//