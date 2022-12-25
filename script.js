// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numericList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharList = ["!", "@", "#", "$", "%", "&", "*", "-", "?", "~"];


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//this fuction will be the generate password function
function generatePassword() {
    var lowercaseAnswer = window.confirm("Do you want lowercase?");
    var uppercaseAnswer = window.confirm("Do you want uppercase?");
    var numericAnswer = window.confirm("Do you want numbers?");
    var specialCharAnswer = window.confirm("Do you want special characters? For example: !, #, $, @");

    if (lowercaseAnswer === false && uppercaseAnswer === false && numericAnswer === false && specialCharAnswer === false) {
        window.alert("You must select at least one password criteria. Please try again.");
        return "";
    }

    var pwLength = window.prompt("Specify how long you want your password. Please type in a number from 8 to 128.");
    console.log("pwLength:", pwLength);

    var pwLengthNumber = parseInt(pwLength);
    console.log("pwLengthNumber:", pwLengthNumber);

    if (isNaN(pwLengthNumber)) {
        window.alert("You must ONLY type in a nunber from 8 to 128. Please try again.");
        return "";
    }

    //if it passes all the check then generate the password
    if (pwLengthNumber >= 8 && pwLengthNumber <= 128) {

        //we need to find out how many options were chosen
        numberOfOptionsChosen = 0;
        //going to keep track of option names that are true
        const chosenOptionNames = [];

        if (lowercaseAnswer === true) {
            numberOfOptionsChosen = numberOfOptionsChosen + 1;
            chosenOptionNames.push("lower");
        }

        if (uppercaseAnswer === true) {
            numberOfOptionsChosen = numberOfOptionsChosen + 1;
            chosenOptionNames.push("upper");
        }

        if (numericAnswer === true) {
            numberOfOptionsChosen = numberOfOptionsChosen + 1;
            chosenOptionNames.push("number");
        }

        if (specialCharAnswer === true) {
            numberOfOptionsChosen = numberOfOptionsChosen + 1;
            chosenOptionNames.push("special");
        }

        //then we need to divide the password length that was chosen by the number of options chosen (watch out for number that don't divide into whole numbers, like when you divide 11 by 2 you get 5.5)
        console.log("the following is the chosenoption names");
        console.log(chosenOptionNames); //the options I choose need to show up only, example: ['lower', 'upper']
        console.log("this is chosenoptionslength", chosenOptionNames.length); //we can use this also to check hwo many options they chose.

        var numberOfLowercaseToPull; //2
        var numberOfUppercaseToPull; //2
        var numberOfNumericToPull; //2
        var numberOfSpecialCharToPull; //5
        var numberOfCharactersLeft = pwLengthNumber;

        //this will iterate through all the choices
        for (let i = 0; i < chosenOptionNames.length; i++) {

            console.log("this is index " + i + " of the chosenOptionNames array :", chosenOptionNames[i]);

            //try to separate out the lower stuff
            if (chosenOptionNames[i] === "lower") {

                if (i === (chosenOptionNames.length - 1)) {
                    //dump the rest in here
                    numberOfLowercaseToPull = numberOfCharactersLeft;
                } else {
                    numberOfLowercaseToPull = Math.floor(pwLengthNumber / chosenOptionNames.length);
                    numberOfCharactersLeft = numberOfCharactersLeft - numberOfLowercaseToPull;
                }

                console.log("numberOfLowercaseToPull: ", numberOfLowercaseToPull);
            }

            //try to separate out the upper stuff
            if (chosenOptionNames[i] === "upper") {

                if (i === (chosenOptionNames.length - 1)) {
                    //dump the rest in here
                    numberOfUppercaseToPull = numberOfCharactersLeft;
                } else {
                    numberOfUppercaseToPull = Math.floor(pwLengthNumber / chosenOptionNames.length);
                    numberOfCharactersLeft = numberOfCharactersLeft - numberOfUppercaseToPull;
                }

                console.log("numberOfUppercaseToPull: ", numberOfUppercaseToPull);
            }

            //try to separate out the number stuff
            if (chosenOptionNames[i] === "number") {

                if (i === (chosenOptionNames.length - 1)) {
                    //dump the rest in here
                    numberOfNumericToPull = numberOfCharactersLeft;
                } else {
                    numberOfNumericToPull = Math.floor(pwLengthNumber / chosenOptionNames.length);
                    numberOfCharactersLeft = numberOfCharactersLeft - numberOfNumericToPull;
                }

                console.log("numberOfNumericToPull: ", numberOfNumericToPull);
            }

            //try to separate out the special stuff
            if (chosenOptionNames[i] === "special") {

                if (i === (chosenOptionNames.length - 1)) {
                    //dump the rest in here
                    numberOfSpecialCharToPull = numberOfCharactersLeft;
                } else {
                    numberOfSpecialCharToPull = Math.floor(pwLengthNumber / chosenOptionNames.length);
                    numberOfCharactersLeft = numberOfCharactersLeft - numberOfSpecialCharToPull;
                }

                console.log("numberOfSpecialCharToPull: ", numberOfSpecialCharToPull);
            }
        }

        //this will hold the future password
        var newPassword = "";

        for (let i = 0; i < numberOfLowercaseToPull; i++) {
            //get random number
            var randomLower = Math.floor(Math.random() * lowerCaseAlphabet.length);
            //use randomNumber to get index from alphabet or list
            var randomChar = lowerCaseAlphabet[randomLower];

            //add the random character to password
            newPassword = newPassword + randomChar;
        }

        for (let i = 0; i < numberOfUppercaseToPull; i++) {
            //get random number
            var randomUpper = Math.floor(Math.random() * upperCaseAlphabet.length);
            //use randomNumber to get index from alphabet or list
            var randomChar = upperCaseAlphabet[randomUpper];

            //add the random character to password
            newPassword = newPassword + randomChar;
        }

        for (let i = 0; i < numberOfNumericToPull; i++) {
            //get random number
            var randomNumber = Math.floor(Math.random() * numericList.length);
            //use randomNumber to get index from alphabet or list
            var randomChar = numericList[randomNumber];

            //add the random character to password
            newPassword = newPassword + randomChar;
        }

        for (let i = 0; i < numberOfSpecialCharToPull; i++) {
            //get random number
            var randomSpecial = Math.floor(Math.random() * specialCharList.length);
            //use randomNumber to get index from alphabet or list
            var randomChar = specialCharList[randomSpecial];

            //add the random character to password
            newPassword = newPassword + randomChar;
        }

        //shuffle
        newPassword = shuffleWord(newPassword);

        //then we need to return the password
        return newPassword;
    } else {
        window.alert("You must ONLY type in a nunber from 8 to 128. Please try again.");
        return "";
    }
}

function shuffleWord(word) {
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
        shuffledWord += word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);