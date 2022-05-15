charCounter = (char) => {
    if (char.toString().length && char.toString()[0] >= 2) {
        console.log('Enter between one to ten');
    } else {
        if (char.toString().length > 2) {
            console.log('Enter between one to ten');

        } else {
            let charArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
            let slicedArray = charArray.slice(0, char);
            // let charCountArray = slicedArray.map(function(num){
            //    return num.length;

            // })

            let charCountArray = slicedArray.map((num) => num.length).reduce((num, acc) => num + acc);

            console.log("The alphabet number sum of the number is : " + charCountArray);
        }
    }

}


charCounter(98);
