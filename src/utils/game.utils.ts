/**
 * Generates the turn's secret code, which is
 * a number between 1000 and 9999
 */
export function generateSecret(): number {
    const min = Math.ceil(1000);
    const max = Math.floor(9999);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function evaluateGuess(secret: string, guess: string) {
    let bulls = 0, cows = 0;

    const map = new Map<string, number>();

    for (let i = 0; i < secret.length; i++) {
        const secretChar = secret[i];
        const guessChar = guess[i];

        if (secretChar === guessChar) {
            bulls++;
        } else {
            // @ts-ignore
            if (map.get(secretChar) < 0) cows++;
            // @ts-ignore
            if (map.get(guessChar) > 0) cows++

            map.set(secretChar, (map.get(secretChar) || 0) + 1);
            map.set(guessChar, (map.get(guessChar) || 0) - 1);
        }
    }

    return `${bulls}B ${cows}C`;
}
