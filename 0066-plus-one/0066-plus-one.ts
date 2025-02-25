function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;
    while (i >= 0) {
        if (digits[i] === 9) {
            digits[i] = 0;
            if (i === 0) {
                digits = [1, ...digits]
            }
        } else {
            digits[i]++;
            break;
        }
        i--;
    }
    return digits;
};