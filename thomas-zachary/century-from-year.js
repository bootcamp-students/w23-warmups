function century(year) {
    // based off of hundreds return the correct year
    // divide year by 100 ,if the result has a remainder ,it needs to round up
    // else keep the whole number
    return Math.ceil(year / 100);
}