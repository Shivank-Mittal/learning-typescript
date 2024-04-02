export function lengthOfLastWord(s: string): number {
    const sArray = s.split(' ').filter( w => w.trim() !== '')
    return sArray[sArray.length - 1].length
};