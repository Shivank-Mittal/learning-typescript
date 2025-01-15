export default function (ransomNote: string, magazine: string) {
    const magazineWordStore: Map<string, number> = new Map();

    magazine.trim().split("").forEach(word => {
        const exist = magazineWordStore.get(word);
        exist ? magazineWordStore.set(word, exist! + 1) : magazineWordStore.set(word, 1);
    })

    let magazineArray = ransomNote.trim().split("");

    for (let index = 0; index < magazineArray.length; index++) {
        const word = magazineArray[index];
        const wordCount = magazineWordStore.get(word);
        if(!wordCount) {
            return false;
        }
        wordCount === 1 ? magazineWordStore.delete(word): magazineWordStore.set(word, wordCount - 1)
    }
   
   return true
}