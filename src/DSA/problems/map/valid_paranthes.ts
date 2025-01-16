export default function(valueString: string): boolean {
    if(valueString.length <= 1) return false
    if(valueString.length % 2 != 0) return false;
    const record: string[] = []
    const sot: Map<string, string> = new Map ([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])

    for (const char of valueString) {
        const firstBracket = sot.get(char);
        if(firstBracket) {
            record.push(char);
            continue;
        }

        if(sot.get(record[record.length - 1]) !== char) return false;

        record.pop();
    }
    return record.length === 0 ? true : false
}