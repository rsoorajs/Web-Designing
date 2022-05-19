//  Rule no:1
// chaaracter no longer than 9 characters and should be lowercase
const rule1 = (rule1key) => {
    if (rule1key.length > 9) {
        console.log("You entered character length is more thhan niine which is not  allowed");
        return;
    } else {
        const lowerCaseCheck = /^[a-z]+$/g;
        const lowerCaseCheckPassed = lowerCaseCheck.test(rule1key);
        return lowerCaseCheck;

    }

}

// Rule no:2
// split letters in 3 qual parts

const dividefun = (ruleno2key) => {
    // const [firstpart, secondpart, thirdpart] = ruleno2key.match(/[a-z]{1,3}/g);
    const [firstpart, secondpart, thirdpart] = ruleno2key.match(/.{1,3}/g);

    //  Rule no:3
    //  Convert the alphabet to the curresponding english number list(1-26)

    let convertedFirstnum = firstpart.split("");
    const resultArray = [];

    const firstcharnum = convertedFirstnum[0].charCodeAt(0) - 96;
    const middleharnum = convertedFirstnum[1];
    const thirdpartnum = convertedFirstnum[2].charCodeAt(0) - 96;

    resultArray.push(firstcharnum, middleharnum, thirdpartnum);
    console.log(resultArray);

    // Rule no:4

    // reverse letters of second part in the word

    const reversedArray = secondpart.split('');
    const reversedLetters = reversedArray.reverse();

    // let joinedLetters = reversedLetters.join('');
    console.log(reversedLetters);

    // Rile no: 5
    // replace with seventh,eigth and ninenth letter with the next letter

    let thirdpartnumArray = thirdpart.split('');
    let replacedNum = thirdpartnumArray.map((num) => {
        let changedNumbers = num.charCodeAt(0) + 1;
        let reversedNumbers = String.fromCharCode(changedNumbers)
        return reversedNumbers;
    })

    console.log(replacedNum);

    const joinarrays = [...resultArray, ...reversedLetters, ...replacedNum]
    const mergeAllResults = joinarrays.join("");
    return mergeAllResults;
}




// Main function
const secretpassword = (secretWord) => {
    console.log(secretWord);
    if (!rule1(secretWord)) {
        console.log("Bang Bang Bang")
        return;
    } else {
        return dividefun(secretWord);
    }

}



console.log("The final encrypted password is " + secretpassword("mubashirh"));
