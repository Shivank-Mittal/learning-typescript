export function reverseVowels(st: string): string {
    let s = [...st]
    let startPoint = 0
    let endPoint: number = s.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const isVowel = (s: string) => {
        return vowels.includes(s.toLowerCase())
    }

    while(startPoint <= endPoint) {
        if(isVowel(s[startPoint]) && isVowel(s[endPoint])) {
            const t = s[startPoint];
            s[startPoint] = s[endPoint];
            s[endPoint] = t;
            startPoint++;
            endPoint--;
            continue;
        }

        isVowel(s[startPoint]) ? endPoint-- : startPoint++;
    }
    return s.join('')
};