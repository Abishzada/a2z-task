function findLongestWordWithMostVowels(sentence) {
    const words = sentence.match(/[a-zA-Z]+/g);

    if (!words) {
        return null;
    }
    let longestWord = "";
    let maxVowels = 0;

    for (const word of words) {
        const vowelsCount = (word.match(/[aeiouAEIOU]/g) || []).length;

        if (word.length > longestWord.length || (word.length === longestWord.length && vowelsCount > maxVowels)) {
            longestWord = word;
            maxVowels = vowelsCount;
        }
    }

    return longestWord;
}

const sentence = "Smart people learn from everything and everyone, average people from their Experience, experience stupid people already, have all the answers (Socrates)";
const longestWord = findLongestWordWithMostVowels(sentence);
console.log(longestWord); 
