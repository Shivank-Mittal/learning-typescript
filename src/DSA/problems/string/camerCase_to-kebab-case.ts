// Convert camelCase to kebab case

export function convertCameToKebabCase(st: string): string{
    const kebabCase:string[] = []

    const isCapital = (char: string) => char === char.toUpperCase();

    for (let index = 0; index < st.length; index++) {
        if(isCapital(st[index])) {
            kebabCase.push('-')
        }
        kebabCase.push(st[index].toLocaleLowerCase())
    }

    return kebabCase.join('');
} 