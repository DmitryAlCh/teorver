import { Streaks, Streak } from './streaks.mjs';
import Chai from 'chai';
const { expect } = Chai;

describe('Testing value Streaks handling', () => {
    it('Should find correct amount of streaks every time', () => {
        const t1 = new Streaks(
            ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
            ['t']
        );
        expect(t1.streakCount).to.equal(10);
        const t2 = new Streaks(
            ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
            ['t', 't']
        );
        expect(t2.streakCount).to.equal(5);
        const t3 = new Streaks(
            ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
            ['t', 't', 't']
        );
        expect(t3.streakCount).to.equal(3);
        const t4 = new Streaks(
            ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
            ['t', 't', 't', 't']
        );
        expect(t4.streakCount).to.equal(2);
        const t5 = new Streaks(
            ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
            ['t', 't', 't', 't', 't']
        );
        expect(t5.streakCount).to.equal(2);
        const t6 = new Streaks(
            ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
            ['t', 't', 't', 't', 't', 't']
        );
        expect(t6.streakCount).to.equal(1);
    });
    it('Should find correct amount of streaks every time', () => {
        const t1 = new Streaks(
            ['t', 't', 'h', 't', 't', 'h', 't', 't', 'h', 't'],
            ['t']
        );
        expect(t1.streakCount).to.equal(7);
        const t2 = new Streaks(
            ['t', 't', 'h', 't', 't', 'h', 't', 't', 'h', 't'],
            ['t', 't']
        );
        expect(t2.streakCount).to.equal(3);
        const t3 = new Streaks(
            ['t', 't', 'h', 't', 't', 'h', 't', 't', 'h', 't'],
            ['t', 't', 't']
        );
        expect(t3.streakCount, 'ttt').to.equal(0);
        const t4 = new Streaks(
            ['t', 't', 'h', 't', 't', 'h', 't', 't', 'h', 't'],
            ['t', 't', 't', 't']
        );
        expect(t4.streakCount).to.equal(0);
        const t5 = new Streaks(
            ['t', 't', 'h', 't', 't', 'h', 't', 't', 'h', 't'],
            ['t', 't', 't', 't', 't']
        );
        expect(t5.streakCount).to.equal(0);
        const t6 = new Streaks(
            ['t', 't', 'h', 't', 't', 'h', 't', 't', 'h', 't'],
            ['t', 't', 't', 't', 't', 't']
        );
        expect(t6.streakCount).to.equal(0);
    });
    it('Should work with 0 and 1', () => {
        const t1 = new Streaks([1, 0, 1, 1, 1, 1, 0, 0, 0], [1]);
        expect(t1.streakCount).to.equal(5);
        const t2 = new Streaks([1, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0]);
        expect(t2.streakCount).to.equal(1);
        const t3 = new Streaks([1, 0, 1, 1, 1, 1, 0, 0, 0], [1, 1]);
        expect(t3.streakCount).to.equal(2);
        const t4 = new Streaks([1, 0, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1]);
        expect(t4.streakCount).to.equal(1);
    });
});
