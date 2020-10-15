module.exports = function toReadable (num) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];

    let numString = num.toString();

    if (num < 0) throw new Error('Negative numbers are not supported.');
    if (num === 0) return 'zero';

    if (num < 20) {
        return ones[num];
    }

    if (numString.length === 2) {
        if (numString[1] === '0')
            return tens[numString[0]];
        else
            return tens[numString[0]] + ' ' + ones[numString[1]];
    }

    if (numString.length === 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return ones[numString[0]] + ' hundred';
        else
            return ones[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]));
    }

    if (numString.length === 4) {
        let end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return ones[numString[0]] + ' thousand';
        if (end < 100) return ones[numString[0]] + ' thousand ' + toReadable(end);
        return ones[numString[0]] + ' thousand ' + toReadable(end);
    }
}
