import {evaluateGuess} from "../utils/game.utils";

export class ItemModel {
    index?: number;
    guess: number;
    secret: number;
    private cod: string = '';


    constructor(guess: number, secret: number) {
        this.guess = guess;
        this.secret = secret;
    }


    get code(): string {
        if (!this.cod) {
            this.cod = this.generateCode();
        }
        return this.cod;
    }

    private generateCode(): string {
        if (!this.guess) {
            return '0B 0C';
        }

        return evaluateGuess(this.secret.toString(), this.guess.toString());
    }

}
