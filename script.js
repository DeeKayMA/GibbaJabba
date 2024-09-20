//Create the Gibberish 
function Gibberish(word) {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case 'a':
                newWord += 'e';
                break;
            case 'e':
                newWord += 'i';
                break;
            case 'i':
                newWord += 'o';
                break;
            case 'o':
                newWord += 'u';
                break;
            case 'u':
                newWord += 'a';
                break;
            case 'A':
                newWord += 'E';
                break;
            case 'E':
                newWord += 'I';
                break;
            case 'I':
                newWord += 'O';
                break;
            case 'O':
                newWord += 'U';
                break;
            case 'U':
                newWord += 'A';
                break;
            default:
                newWord += word[i];
                break;
        }
    }
    return newWord;
}

//Processes the Gibberish
function processWord() {
    const input = document.getElementById('inputWord').value;
    const option1 = Gibberish(input);
    const option2 = Gibberish(option1);
    const option3 = Gibberish(option2);
    const option4 = Gibberish(option3);
    const option5 = Gibberish(option4);

    document.getElementById('option1').textContent = option1;
    document.getElementById('option2').textContent = option2;
    document.getElementById('option3').textContent = option3;
    document.getElementById('option4').textContent = option4;
    document.getElementById('option5').textContent = option5;
}

//Returns random word form array
function randWord(){
    let randomWords = [
        "Banana",
        "Area",
        "Idea",
        "Audio",
        "Oregano",
        "Family",
        "Beautiful",
        "Animal",
        "Eager",
        "Orange",
        "Peaceful",
        "Vacation",
        "Coffee",
        "Aisle",
        "Cheese",
        "Elope",
        "Journey",
        "Sugar",
        "Festival",
        "Music",
        "Balloon",
        "Bicycle",
        "Cookie",
        "Island",
        "Unique",
        "Umbrella",
        "Tortoise",
        "Mongoose",
        "Aquarium",
        "Telephone",
        "Gibba Jabba"
    ]
    let randNum = Math.floor(Math.random()* randomWords.length)
    return randomWords[randNum]
}

const inputField = document.getElementById('inputWord');
const randButton = document.getElementById('randButton');



randButton.addEventListener('click', function(){
    inputField.value = randWord();
    processWord()

})

document.getElementById('inputWord').addEventListener('input', processWord);

// Functions for styling buttons 

const boldButton = document.getElementById('boldBtn');
const italicButton = document.getElementById('italicBtn');
const normalcaseButton = document.getElementById('normalcase');
const lowercaseButton = document.getElementById('lowercase');
const uppercaseButton = document.getElementById('uppercase');
const fontSelector = document.getElementById('font-selector');
const fontSizeSlider = document.getElementById('fontSizeSlider');
const lightModeButton = document.getElementById('light-mode');
const darkModeButton = document.getElementById('dark-mode');
const root = document.documentElement;


const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const option5 = document.getElementById('option5');

//Helper function 
function toggleStyleForElement(element, styleProperty, value) {
    element.style[styleProperty] = element.style[styleProperty] === value ? 'normal' : value;
}



//Bold the results
boldButton.addEventListener('click', function(){
    boldButton.classList.toggle('active');
    toggleStyleForElement(option1,'fontWeight', 'bold');
    toggleStyleForElement(option2,'fontWeight', 'bold');
    toggleStyleForElement(option3,'fontWeight', 'bold');
    toggleStyleForElement(option4,'fontWeight', 'bold');
    toggleStyleForElement(option5,'fontWeight', 'bold');
});

// Italic ths resutls 
italicButton.addEventListener('click', function(){
    italicButton.classList.toggle('active');
    toggleStyleForElement(option1,'fontStyle', 'italic');
    toggleStyleForElement(option2,'fontStyle', 'italic');
    toggleStyleForElement(option3,'fontStyle', 'italic');
    toggleStyleForElement(option4,'fontStyle', 'italic');
    toggleStyleForElement(option5,'fontStyle', 'italic');
});

// lowercase-----
lowercaseButton.addEventListener('click', function(){
    lowercaseButton.classList.toggle('active');
    uppercaseButton.classList.remove('active');
    normalcaseButton.classList.remove('active')
    toggleStyleForElement(option1,'textTransform', 'lowercase');
    toggleStyleForElement(option2,'textTransform', 'lowercase');
    toggleStyleForElement(option3,'textTransform', 'lowercase');
    toggleStyleForElement(option4,'textTransform', 'lowercase');
    toggleStyleForElement(option5,'textTransform', 'lowercase');
});

// uppercase-----
uppercaseButton.addEventListener('click', function(){
    lowercaseButton.classList.remove('active');
    uppercaseButton.classList.toggle('active');
    normalcaseButton.classList.remove('active')
    toggleStyleForElement(option1,'textTransform', 'uppercase');
    toggleStyleForElement(option2,'textTransform', 'uppercase');
    toggleStyleForElement(option3,'textTransform', 'uppercase');
    toggleStyleForElement(option4,'textTransform', 'uppercase');
    toggleStyleForElement(option5,'textTransform', 'uppercase');
});

// normalcase-----
normalcaseButton.addEventListener('click', function(){
    lowercaseButton.classList.remove('active');
    uppercaseButton.classList.remove('active');
    normalcaseButton.classList.toggle('active')
    toggleStyleForElement(option1,'textTransform', 'none')
    toggleStyleForElement(option2,'textTransform', 'none')
    toggleStyleForElement(option3,'textTransform', 'none')
    toggleStyleForElement(option4,'textTransform', 'none')
    toggleStyleForElement(option5,'textTransform', 'none')
});

//Change font

fontSelector.addEventListener('change', function (){
    switch(fontSelector.value){
        case 'Playfair':
            toggleStyleForElement(option1,'fontFamily', "'Playfair', serif");
            toggleStyleForElement(option2,'fontFamily', "'Playfair', serif");
            toggleStyleForElement(option3,'fontFamily', "'Playfair', serif");
            toggleStyleForElement(option4,'fontFamily', "'Playfair', serif");
            toggleStyleForElement(option5,'fontFamily', "'Playfair', serif");
            break;
        case 'Times New Roman':
            toggleStyleForElement(option1,'fontFamily', "'Times New Roman', Times, serif");
            toggleStyleForElement(option2,'fontFamily', "'Times New Roman', Times, serif");
            toggleStyleForElement(option3,'fontFamily', "'Times New Roman', Times, serif");
            toggleStyleForElement(option4,'fontFamily', "'Times New Roman', Times, serif");
            toggleStyleForElement(option5,'fontFamily', "'Times New Roman', Times, serif");
            break;
        case 'Lato':
            toggleStyleForElement(option1,'fontFamily', "'Lato', sans-serif");
            toggleStyleForElement(option2,'fontFamily', "'Lato', sans-serif");
            toggleStyleForElement(option3,'fontFamily', "'Lato', sans-serif");
            toggleStyleForElement(option4,'fontFamily', "'Lato', sans-serif");
            toggleStyleForElement(option5,'fontFamily', "'Lato', sans-serif");
            break;
        case 'Lucida Sans':
            toggleStyleForElement(option1,'fontFamily', "'Lucida Sans', sans-serif");
            toggleStyleForElement(option2,'fontFamily', "'Lucida Sans', sans-serif");
            toggleStyleForElement(option3,'fontFamily', "'Lucida Sans', sans-serif");
            toggleStyleForElement(option4,'fontFamily', "'Lucida Sans', sans-serif");
            toggleStyleForElement(option5,'fontFamily', "'Lucida Sans', sans-serif");
            break;
        case 'Impact':
            toggleStyleForElement(option1,'fontFamily', "'Impact', sans-serif");
            toggleStyleForElement(option2,'fontFamily', "'Impact', sans-serif");
            toggleStyleForElement(option3,'fontFamily', "'Impact', sans-serif");
            toggleStyleForElement(option4,'fontFamily', "'Impact', sans-serif");
            toggleStyleForElement(option5,'fontFamily', "'Impact', sans-serif");
        break;
        default:
            toggleStyleForElement(option1,'fontFamily', "'Lato', sans-serif");
            toggleStyleForElement(option2,'fontFamily', "'Lato', sans-serif");
            toggleStyleForElement(option3,'fontFamily', "'Lato', sans-serif");
            toggleStyleForElement(option4,'fontFamily', "'Lato', sans-serif");
            toggleStyleForElement(option5,'fontFamily', "'Lato', sans-serif");

    }
});

//Change font size

fontSizeSlider.addEventListener('input', function(){
    let fontSize = fontSizeSlider.value + 'px';

    toggleStyleForElement(option1,'fontSize', fontSize);
    toggleStyleForElement(option2,'fontSize', fontSize);
    toggleStyleForElement(option3,'fontSize', fontSize);
    toggleStyleForElement(option4,'fontSize', fontSize);
    toggleStyleForElement(option5,'fontSize', fontSize);
});

//Change theme 

// Light Mode-----
lightModeButton.addEventListener('click', function(){
    lightModeButton.classList.toggle('active');
    darkModeButton.classList.remove('active')
    root.style.setProperty('color-scheme', 'light')
});

// Dark Mode-----
darkModeButton.addEventListener('click', function(){
    lightModeButton.classList.remove('active');
    darkModeButton.classList.toggle('active')
    root.style.setProperty('color-scheme', 'dark')
});