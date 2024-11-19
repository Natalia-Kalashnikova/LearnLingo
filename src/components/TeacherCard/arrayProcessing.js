export const joinArrayWithComma = (arr) => {
    if (arr.length > 1) {
        return arr.map((item) => item.toString()).join(', ');
    } else {
        return arr[0];
    }
};

export const joinArrayWithSpace = (arr) => {
    if (arr.length > 1) {
        return arr.map((item) => item.toString()).join(' ');
    } else {
        return arr[0];
    }
};