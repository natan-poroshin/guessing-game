class GuessingGame {
    constructor() {}

    #number = 0;
    #left = 0;
    #right = 0;

    setRange(min, max) {
        this.#left = min;
        this.#right = max;
    }

    guess() {
        return this.#number = this.#left + Math.ceil((this.#right - this.#left) / 2);
    }

    lower() {
        this.#right = this.#number;
    }

    greater() {
        this.#left = this.#number;
    }
}

module.exports = GuessingGame;
