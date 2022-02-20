let sentence1 = "Javascript is like a beautiful butterfly";
let sentence2 = "The more you want to catch it";
let sentence3 = "It flies farther and farther away";
let sentence4 = "At the end, you stay there alone";
let sentence5 = "and you just cry in the middle of night.";

function cleanse(sentence, words) {
    let splitSentence = sentence.split(" ");
    let filterWords = ["beautiful", "farther", "cry"];
    let result = "";

    for (const izek of splitSentence) {
        let isCleanWord = true;

        for (const lollypop of filterWords) {

            if (izek === lollypop) {
                isCleanWord = false;
            };            
        };
    
        if (isCleanWord === true) {
            result = result + " " + izek;
        } else {
            result = result + " **** ";
        }
            
    }

    return result
        
}

console.log(cleanse(sentence1));
console.log(cleanse(sentence2));
console.log(cleanse(sentence3));
console.log(cleanse(sentence4));
console.log(cleanse(sentence5));


