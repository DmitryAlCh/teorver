export default class Coin {
    toss() {
        return Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails';
    }
}
