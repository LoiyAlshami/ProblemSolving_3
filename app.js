const getUniqueValues = (arrOfNum) => {
    const uniqueValues = [];

    for (let i = 0; i < arrOfNum.length; i++) {
        let isUnique = true;
        for (let j = 0; j < uniqueValues.length; j++) {
            if (arrOfNum[i] === uniqueValues[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueValues.push(arrOfNum[i]);
        }
    }

    return uniqueValues;
};

const arr = [1, 2, 2, 3, 4];
console.log(getUniqueValues(arr));
