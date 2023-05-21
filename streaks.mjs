export class Streaks {
    constructor(sequence, pattern) {
        this.pattern = pattern;
        this.patternIndex = 0;
        this.sequence = [...sequence];
        this.streakCount = 0;
        this.findPatterns(this.sequence, this.pattern);
    }
    findPatterns(arr, patternArr) {
        while (arr.length) {
            let a1 = arr.shift();
            let p1 = patternArr[this.patternIndex];
            if (a1 === p1) {
                if (this.patternIndex < patternArr.length - 1) {
                    this.patternIndex++;
                } else {
                    this.streakCount++;
                    this.patternIndex = 0;
                }
            } else {
                this.patternIndex = 0;
            }
        }
    }
}

export class Streak {
    constructor(pattern) {
        this.pattern = pattern;
        this.position = 0;
        this.whatever = [];
    }
    add(value, index) {
        if (this.pattern[this.position] == value) {
            this.position++;
            this.whatever.push({ value, index });
        }
    }
}
