class Round {

    constructor(wordList) {
        this.targetWord = wordList[Math.floor(Math.random() * wordList.length)];
        this.targetRegEx = new RegExp(this.targetWord);
        this.userString = "";
        this.targetChar = 0;
        this.userChar;
        this.correctlyTyped = "";
    }


}

export default Round;