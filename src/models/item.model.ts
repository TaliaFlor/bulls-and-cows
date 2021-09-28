import {countConsonants, countVowels} from "../utils/string.utils";

export class ItemModel {
    index?: number;
    value: string;
    private cod: string = '';


    constructor(value: string) {
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
