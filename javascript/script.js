const setofwords = ["My name is yash saxena and I am a software engineer",
    "Hope you are doing good this is a simple game you can make", "My college is Medi-Caps University Indore", "I love you radhekanhaji", "Radhe Radhe Japo Chale Aayege Bihari"];
const msg = document.getElementById('msg');
const typedwords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;
const wordCount = (str) => {
    let response = str.split(" ");   //It returns an array of the substring and substrings are counted by the strings after space
    return response.length;
}
const playGame = () => {
    let randomNumber = Math.floor((Math.random() * setofwords.length));
    msg.innerText = setofwords[randomNumber];
    startTime = Date.now();
    console.log(startTime);
    btn.innerText = "Done";
}
const msgWordsCnt=(str)=>{
let wordsArry=str.split(" ");
return wordsArry.length;
}
const wordChecker = (str1, str2) => {
    let array1 = str1.split(" ");
    let array2 = str2.split(" ");//Qki split karne per same hi split hoge isliye hum aisa likh rahe hain aur haa correct order m likhege tab hi correct words count honge bhaiya
    let cnt = 0;
    array1.forEach((items, index) => {
        if (items == array2[index]) {
            cnt++;
        }
    });
    return cnt;
}
const endGame = () => {
    endTime = Date.now();
    console.log(endTime);
    let totalTime = endTime - startTime;
    totalTime = totalTime / 1000;
    console.log(totalTime);
    let typedString = typedwords.value;
    let totalTypedWords = wordCount(typedString);
    console.log(totalTypedWords);
    let speed = Math.round((totalTypedWords / totalTime) * 60);
    console.log(speed);
    let finalmsg = "You typed at the speed of " + speed + " words per minute";
    console.log(finalmsg);
    let msgCount=msgWordsCnt(msg.innerText);
    let correctWords = wordChecker(msg.innerText, typedString);
    let incorrectWords = totalTypedWords - correctWords;
    finalmsg += " You typed " + totalTypedWords + " words out of "+msgCount + " words and total correct words are " + correctWords + " and incorrect words are " + incorrectWords;
    msg.innerText = finalmsg;
}
btn.addEventListener('click', function () {
    console.log(this);
    if (this.innerText == 'Start') {
        typedwords.disabled = false;   //Yeh disabled property disable kar deti h text area ko
        playGame();
    }
    else if (this.innerText == 'Done') {
        typedwords.disabled = true;
        endGame();
    }
}); 