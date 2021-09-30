/**
 * Counts the number of vowels in a string.
 * @param str the string to be analysed
 */
export function countVowels(str: string): number {
    let count = 0;
    for (let char of str.trim().toLowerCase()) {
        if (isVowel(char)) count += 1;
    }
    return count;
}

function isVowel(char: string): boolean {
    return testChar(char, 'aáàãâeéèêiíìîoóòõôuúùû');
}

/**
 * Counts the number of consonants in a string.
 * @param str the string to be analysed
 */
export function countConsonants(str: string): number {
    let count = 0;
    for (let char of str.trim().toLowerCase()) {
        if (isConsonant(char)) count += 1;
    }
    return count;
}

function isConsonant(char: string): boolean {
    return testChar(char, "bcçdfghjklmnpqrstvwxyz");
}


function testChar(char: string, values: string) {
    return values.includes(char.trim().toLowerCase());
}
