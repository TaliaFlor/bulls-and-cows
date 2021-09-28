import {countConsonants, countVowels} from "../utils/string.utils";

export class Item {
    number: number;
    value: string;
    cod: string | undefined;


    constructor(number: number, value: string) {
        this.number = number;
        this.value = value.trim();
    }


    get code(): string {
        if (!this.cod) {
            this.cod = this.generateCode();
        }
        return this.cod;
    }

    private generateCode(): string {
        if (!this.value) {
            return '0v 0c';
        }

        const vowels = countVowels(this.value);
        const consonants = countConsonants(this.value);

        return `${vowels}v ${consonants}c`;
    }
}
