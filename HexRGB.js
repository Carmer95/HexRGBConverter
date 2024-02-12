// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-detect the formats so that if you enter 
// HEX color format it returns RGB and if you enter RGB color format it returns HEX.
// #0f0f0f
// (redVal, greenVal, blueVal)

const toRGB = (colorStr) => {
    let colorArr = colorStr.split(""); // Sets the hex color string to an array["#", "0", "f", "0", "f", "0", "f"]
    colorArr.shift() // Removes the # -> ["0", "f", "0", "f", "0", "f"]
    colorArr.forEach((num, i) => { //Loops through each value (num) to assign it a number value that works in our RGB calculation.
        if (num < 10) {
            num = Number(num); //Converts str to number type.
        }
        switch(num) {           // Converts the a-f alphabet values to their numeric equivalents, usable in our toRGB algorithm.
            case "a": colorArr[i] = 10;
            break;
            case "b": colorArr[i] = 11;
            break;
            case "c": colorArr[i] = 12;
            break;
            case "d": colorArr[i] = 13;
            break;
            case "e": colorArr[i] = 14;
            break;
            case "f": colorArr[i] = 15;
            break;
            case "A": colorArr[i] = 10;
            break;
            case "B": colorArr[i] = 11;
            break;
            case "C": colorArr[i] = 12;
            break;
            case "D": colorArr[i] = 13;
            break;
            case "E": colorArr[i] = 14;
            break;
            case "F": colorArr[i] = 15;
            break;
            default: 
            break;
        }
    })
    let red = (colorArr[0] * 16) + (parseInt(colorArr[1]));
    let green = (colorArr[2] * 16) + (parseInt(colorArr[3]));
    let blue = (colorArr[4] * 16) + (parseInt(colorArr[5]));
    let RGB = `${red}, ${green}, ${blue}`;

    let hexRegex = /[\g-z]/;                                                // A regexp test to check if the
    let match0 = hexRegex.test(red);                                        // red,
    let match1 = hexRegex.test(green);                                      // green, 
    let match2 = hexRegex.test(blue);                                       // or blue value,
    // console.log(match0, match1, match2);                                 // contains non hex characters.

    if (match0 === false && match1 === false & match2 === false) {          // Condition to return error if a value contains
        return RGB;                                                         // a non hex character.
    }
    return alert('Please enter a valid Hexadecimal value, E.g. 0-9, a-f, or A-F');
};

// toRGB('#AbCdEf');

const toHexU = (red, green, blue) => {
    if (red > 255 || red < 0 || green > 255 || green < 0 || blue > 255 || blue < 0) {
        return alert(`Please input a valid RGB value.`);
    }

    r0 = parseInt(red / 16);            // Divides num by 16 to give our first Hex pair value
    r1 = parseInt(red % 16)             // Returns the remainder of num / 16 to give us our second value of the Hex pair
    g0 = parseInt(green / 16);
    g1 = parseInt(green % 16)
    b0 = parseInt(blue / 16);
    b1 = parseInt(blue % 16)
    let strArr = [r0,r1,g0,g1,b0,b1]    // Creates an arr with the Hex pair values, that can contain our string values as well.

    strArr.forEach((num, i) => {
        // if (num < 10) {
        //     strArr[i] = num.toString(); // Converts the 0-9 number values into string types.
        // }
        switch(num) {                   // Converts the 10-15 numeric values to their uppercase string equivalents.
            case 10: strArr[i] = 'A';
            break;
            case 11: strArr[i] = 'B';
            break;
            case 12: strArr[i] = 'C';
            break;
            case 13: strArr[i] = 'D';
            break;
            case 14: strArr[i] = 'E';
            break;
            case 15: strArr[i] = 'F';
            break;
            default:
            break;
        }
    })
    let hexStr = `#${strArr[0]}${strArr[1]}${strArr[2]}${strArr[3]}${strArr[4]}${strArr[5]}`
    return hexStr;
}

// toHexU(129, 15, 240)

const toHexL = (red, green, blue) => {
if (red > 255 || red < 0 || green > 255 || green < 0 || blue > 255 || blue < 0) {   // Test condition that errors if value is
    return alert(`Please input a valid RGB value.`)                       // not an RGB value.
}

    r0 = parseInt(red / 16);            // Divides num by 16 to give our first Hex pair value
    r1 = parseInt(red % 16)             // Returns the remainder of num / 16 to give us our second value of the Hex pair
    g0 = parseInt(green / 16);
    g1 = parseInt(green % 16)
    b0 = parseInt(blue / 16);
    b1 = parseInt(blue % 16)
    let strArr = [r0,r1,g0,g1,b0,b1]    // Creates an arr with the Hex pair values, that can contain our string values as well.

    strArr.forEach((num, i) => {
        // if (num < 10) {
        //     strArr[i] = num.toString(); // Converts the 0-9 number values into string types.
        // }
        switch(num) {                   // Converts the 10-15 numeric values to their lowercase string equivalents.
            case 10: strArr[i] = 'a';
            break;
            case 11: strArr[i] = 'b';
            break;
            case 12: strArr[i] = 'c';
            break;
            case 13: strArr[i] = 'd';
            break;
            case 14: strArr[i] = 'e';
            break;
            case 15: strArr[i] = 'f';
            break;
            default:
            break;
        }
    })
    let hexStr = `#${strArr[0]}${strArr[1]}${strArr[2]}${strArr[3]}${strArr[4]}${strArr[5]}`
    return hexStr;
}

// toHexL(16, 155, 255);

const hexRGBConverter = ((color, g, b, upper) => {                          //takes a color in the form of hex or color, g, b (RGB) with an uppercase argument. Default lowercase.
    if (typeof color === 'number' && (upper === 'u' || upper === 'U')) {
        return toHexU(color, g, b);
    } else if (typeof color === 'number') {
        return toHexL(color, g, b);
    }
    return toRGB(color);
})

const singleToRGB = ((singleVal) => {
    console.log(singleVal);
    singleVal.toString();
    valArr = singleVal.split();
    return valArr;
});

let convert = document.getElementById("convert");
let colorInput = document.getElementById("color-input");         // 255, 55, 15, "U" || #19afAF
let backgroundColor = document.querySelector(".background-color");
let result = document.getElementById("result");

convert.addEventListener("click", () => {
    console.log("Nailed it!");
    let firstChar = colorInput.value.charAt(0);
    if (firstChar === "#") {
        result.value = hexRGBConverter(colorInput.value);
    } else {
        let colorValArr = colorInput.value.padEnd(colorInput.value.length + 1).split("");           // ['0', ',', ' ', '4', '1', ',', ' ', '2', '4', '7']
        console.log(colorValArr);
        let resultArr = [];
        let tempStr = "";
        colorValArr.forEach((num, i) => {
            if ((num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == 'u' || num == "U") && i !== colorValArr.length - 1) {
                tempStr = tempStr + num;
                console.log(tempStr);
            } else if (num == "," || i == (colorValArr.length - 1)) {
                resultArr.push(tempStr);
                tempStr = "";
                console.log(resultArr);
            } 
        })
        result.value = hexRGBConverter(parseInt(resultArr[0]), parseInt(resultArr[1]), parseInt(resultArr[2]), resultArr[3]);
    }
});

colorInput.addEventListener("keydown", (event) => {
    let firstChar = colorInput.value.charAt(0);
    if (event.key === "Enter") {
        if (firstChar === "#") {
            console.log("Crushed it!");
            result.value = hexRGBConverter(colorInput.value);
        } else {
            let colorValArr = colorInput.value.padEnd(colorInput.value.length + 1).split("");           // ['0', ',', ' ', '4', '1', ',', ' ', '2', '4', '7']
            let resultArr = [];
            let tempStr = "";
            colorValArr.forEach((num, i) => {
                if ((num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == 'u' || num == "U") && i !== colorValArr.length - 1) {
                    tempStr = tempStr + num;
                    console.log(tempStr);
                } else if (num == "," || i == (colorValArr.length - 1)) {
                    resultArr.push(tempStr);
                    tempStr = "";
                    console.log(resultArr);
                } 
            })
            result.value = hexRGBConverter(parseInt(resultArr[0]), parseInt(resultArr[1]), parseInt(resultArr[2]), resultArr[3]);
        }
    }    
});


            // result.value = colorValArr.reduce((acc, val) => {
            //     let hexRegex = /[0-9]uU/;   
            //     let match = hexRegex.test(val);
            //     let resultArr = []
            //     console.log(acc);
            //     // console.log(val);                             // 0|,| |4|1|,| |2|4|7|
            //     if (match !== true) {
            //         resultArr.push(acc);
            //         console.log(acc)
            //         acc = "";
            //     } else {
            //         acc += val;
            //         console.log(acc);
            //     }
            //     return resultArr[0], resultArr[1], resultArr[2], resultArr[3]
            // }, 0);
            // console.log(colorValArr);    

// (x * 16) + y;
// x + (y / 16);


// const toRGB = (colorStr) => {
//     let colorArr = colorStr.split(""); //sets the hex color string to an array["#", "0", "f", "0", "f", "0", "f"]
//     colorArr.shift() //removes the # -> ["0", "f", "0", "f", "0", "f"]
//     for(let i = 0; i < colorArr.length; i++) { //Loops through each value to assign it a number value that works in our RGB calculation.
//         if(colorArr[i] <= 10) {
//             colorArr[i] = Number(colorArr[i]); //Converts str to number type.
//         }
//         switch(colorArr[i]) {           // Converts the 10-15 alphabet values to numeric equivalents, usable in our toRGB algorithm.
//             case "a": colorArr[i] = 10;
//             break;
//             case "b": colorArr[i] = 11;
//             break;
//             case "c": colorArr[i] = 12;
//             break;
//             case "d": colorArr[i] = 13;
//             break;
//             case "e": colorArr[i] = 14;
//             break;
//             case "f": colorArr[i] = 15;
//             break;
//             default:
//             break;
//         }
//         // console.log(colorArr[i]);
//     }
//     let red = (colorArr[0] * 16) + colorArr[1];
//     let blue = (colorArr[2] * 16) + colorArr[3];
//     let green = (colorArr[4] * 16) + colorArr[5];
//     console.log(red, blue, green);

//     let RGB = (red, " ", blue, " ", green);
//     // return console.log(`Your Hexadecimal value in RGB is ${RGB}`);
// }

// toRGB('#abcdef');
