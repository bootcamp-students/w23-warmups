function findOdd(arr) {
    const freq = {};
    for(const num of arr){
        freq[num] = (freq[num] || 0) + 1;
    }
    return +Object.keys(freq).find(num => freq[num] % 2 == 1);
}