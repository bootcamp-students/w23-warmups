function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}


//determine IF n / x has any remainders AND if n / y has any remainders. IF they do return false. If they don't return true.
