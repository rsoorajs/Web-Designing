let myarray = [];

const result = (startingNum, endingNum) => {
    for (let i = 0; i <= endingNum; i++) {
        if (i >= startingNum) {
            myarray.push(startingNum);
            startingNum = startingNum + 1;
        }

    }

    return myarray;


}




console.log(result(3, 10));
