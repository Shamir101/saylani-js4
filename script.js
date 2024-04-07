var originalText = "I love my country pakistan.<br>I like my city Faisalabad.<br>I love my Homeland"

var cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhupura', 'Kashmir'];

// console.log(cities[1])

document.getElementById('originalTextBox').innerHTML = originalText;
function showOutput(output) {
    document.getElementById("output").innerHTML = output;
}
document.getElementById("clearOutput").addEventListener("click", function() {
    document.getElementById("output").innerText = "";
});
const clearInput = () => {
    document.getElementById("inputText").value = "";
}
const inputValue = () => {
    return document.getElementById("inputText").value;
}

//clear output button
function clearOutput (){
    document.getElementById("output").innerHTML = ""
}
// convert to lowercase
function convertToLower() {
    let inputText = document.getElementById("original-string").innerText.toLowerCase();
    document.getElementById("output").innerHTML = inputText;
}
function printAllCities() {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ") " + cities[i] + "<br />";
    }
}

// convert to uppercase
function convertToUpper() {
    let inputText = document.getElementById("original-string").innerText.toUpperCase();
    document.getElementById("output").innerHTML = inputText;
}

// convert to capitalize
function convertToCapitalize() {
    let inputText = document.getElementById("original-string").innerText;
    let capitalizedText = inputText.toLowerCase().replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
    document.getElementById("output").innerHTML = capitalizedText;
}

// better formatting
function formatText() {
    let inputText = document.getElementById("original-string").innerText;
    let formattedText = inputText.replace(/&nbsp;/g, ", ");
    document.getElementById("output").innerHTML = formattedText;
}

// add your city to list
function addCityToList() {
    let newCity = prompt("Please enter the city name you want to add:");
    cities.push(newCity);
    printAllCities();
}

// check your city in list
function checkCityInList() {
    let cityToCheck = prompt("Please enter the city name you want to check:");
    if (cities.includes(cityToCheck)) {
        document.getElementById("output").innerHTML = "Yes, " + cityToCheck + " is in the list.";
    } else {
        document.getElementById("output").innerHTML = "No, " + cityToCheck + " is not in the list.";
    }
}

// find the word
function findWord() {
    let wordToFind = prompt("Please enter the word you want to find:");
    let index = cities.indexOf(wordToFind);
    if (index !== -1) {
        document.getElementById("output").innerHTML = wordToFind + " found at index " + index + " in the list.";
    } else {
        document.getElementById("output").innerHTML = wordToFind + " not found in the list.";
    }
}

// replace this word
function replaceWord() {
    let wordToReplace = prompt("Please enter the word you want to replace:");
    let replacementWord = prompt("Please enter the word you want to replace it with:");
    let index = cities.indexOf(wordToReplace);
    if (index !== -1) {
        cities[index] = replacementWord;
        printAllCities();
    } else {
        document.getElementById("output").innerHTML = wordToReplace + " not found in the list.";
    }
}
