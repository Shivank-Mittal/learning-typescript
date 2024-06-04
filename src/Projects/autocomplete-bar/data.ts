const wordsCollection = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini"];

export async function getMatchingOptions(input: string) { 
    const p = new Promise<string[]>(res => {
        console.log('api called')
        setTimeout(() => {
            input === '' ? 
                res([]) :
                res(wordsCollection.filter(wordC => wordC.includes(input.toLowerCase().trim()))) 
        }
        , 800)
    });
    return p
}

