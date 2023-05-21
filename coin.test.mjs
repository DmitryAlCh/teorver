import Coin from './coin.mjs';
import Chai from 'chai';
const { expect } = Chai;
import { Streaks } from './streaks.mjs';
import { sequence } from './list-from-random-org.mjs';

describe('Testing the coin toss', () => {
    it('should return only "heads" or "tails" while making 1000 tosses', () => {
        const coin = new Coin();
        const outcomes = new Set();
        for (let i = 0; i < 1000; i++) {
            let outcome = coin.toss();
            outcomes.add(outcome);
        }
        expect(outcomes.size).to.equal(2);
        expect(outcomes.has('heads')).to.be.true;
        expect(outcomes.has('tails')).to.be.true;
    });
    it('should have close heads/tails counts out of 1000 tosses', () => {
        const coin = new Coin();
        const counts = new Map();
        for (let i = 0; i < 1000; i++) {
            let outcome = coin.toss();
            let count = counts.get(outcome);
            if (count >= 1) {
                counts.set(outcome, count + 1);
            } else {
                counts.set(outcome, 1);
            }
        }
        expect(counts.get('heads') / 1000).to.be.lessThan(0.6);
        expect(counts.get('heads') / 1000).to.be.greaterThan(0.4);
        expect(counts.get('tails') / 1000).to.be.lessThan(0.6);
        expect(counts.get('tails') / 1000).to.be.greaterThan(0.4);
    });
    describe('Same outcome in a row test for 1000 tosses', () => {
        it('Comparing tails in a rows vs heads vs random sequence in a row', () => {
            const tosses = 1001;
            const coin = new Coin();
            let outcomes = [];
            for (let i = 0; i < tosses; i++) {
                outcomes.push(coin.toss());
            }
            const h1 = new Streaks(outcomes, ['heads']);
            const h2 = new Streaks(outcomes, ['heads', 'heads']);
            const h3 = new Streaks(outcomes, ['heads', 'heads', 'heads']);
            const h4 = new Streaks(outcomes, [
                'heads',
                'heads',
                'heads',
                'heads',
            ]);
            const h5 = new Streaks(outcomes, [
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
            ]);
            const h6 = new Streaks(outcomes, [
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
            ]);
            const h7 = new Streaks(outcomes, [
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
            ]);
            const h8 = new Streaks(outcomes, [
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
            ]);
            const h9 = new Streaks(outcomes, [
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
            ]);
            const h10 = new Streaks(outcomes, [
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
                'heads',
            ]);
            const t1 = new Streaks(outcomes, ['tails']);
            const t2 = new Streaks(outcomes, ['tails', 'tails']);
            const t3 = new Streaks(outcomes, ['tails', 'tails', 'tails']);
            const t4 = new Streaks(outcomes, [
                'tails',
                'tails',
                'tails',
                'tails',
            ]);
            const t5 = new Streaks(outcomes, [
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
            ]);
            const t6 = new Streaks(outcomes, [
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
            ]);
            const t7 = new Streaks(outcomes, [
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
            ]);
            const t8 = new Streaks(outcomes, [
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
            ]);
            const t9 = new Streaks(outcomes, [
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
            ]);
            const t10 = new Streaks(outcomes, [
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
            ]);
            const c2 = new Streaks(outcomes, ['tails', 'heads']);
            const c3 = new Streaks(outcomes, ['tails', 'heads', 'tails']);
            const c4 = new Streaks(outcomes, [
                'heads',
                'tails',
                'heads',
                'tails',
            ]);
            const c5 = new Streaks(outcomes, [
                'tails',
                'tails',
                'heads',
                'tails',
                'heads',
            ]);
            const c6 = new Streaks(outcomes, [
                'tails',
                'tails',
                'tails',
                'tails',
                'heads',
                'tails',
            ]);
            const c7 = new Streaks(outcomes, [
                'heads',
                'tails',
                'tails',
                'heads',
                'tails',
                'tails',
                'tails',
            ]);
            const c8 = new Streaks(outcomes, [
                'tails',
                'tails',
                'heads',
                'tails',
                'tails',
                'tails',
                'tails',
                'tails',
            ]);
            const c9 = new Streaks(outcomes, [
                'tails',
                'tails',
                'heads',
                'tails',
                'heads',
                'tails',
                'tails',
                'tails',
                'tails',
            ]);
            const c10 = new Streaks(outcomes, [
                'tails',
                'tails',
                'tails',
                'heads',
                'tails',
                'heads',
                'heads',
                'tails',
                'tails',
                'tails',
            ]);
            console.table({
                '1 in a row': {
                    'simulation heads': h1.streakCount,
                    'simulation tails': t1.streakCount,
                    'simulation random': t1.streakCount,
                    math: tosses / 2,
                },
                '2 in a row': {
                    'simulation heads': h2.streakCount,
                    'simulation tails': t2.streakCount,
                    'simulation random': c2.streakCount,
                    math: tosses / 4,
                },
                '3 in a row': {
                    'simulation heads': h3.streakCount,
                    'simulation tails': t3.streakCount,
                    'simulation random': c3.streakCount,
                    math: tosses / 8,
                },
                '4 in a row': {
                    'simulation heads': h4.streakCount,
                    'simulation tails': t4.streakCount,
                    'simulation random': c4.streakCount,
                    math: tosses / 16,
                },
                '5 in a row': {
                    'simulation heads': h5.streakCount,
                    'simulation tails': t5.streakCount,
                    'simulation random': c5.streakCount,
                    math: tosses / 32,
                },
                '6 in a row': {
                    'simulation heads': h6.streakCount,
                    'simulation tails': t6.streakCount,
                    'simulation random': c6.streakCount,
                    math: tosses / 64,
                },
                '7 in a row': {
                    'simulation heads': h7.streakCount,
                    'simulation tails': t7.streakCount,
                    'simulation random': c7.streakCount,
                    math: tosses / 128,
                },
                '8 in a row': {
                    'simulation heads': h8.streakCount,
                    'simulation tails': t8.streakCount,
                    'simulation random': c8.streakCount,
                    math: tosses / 256,
                },
                '9 in a row': {
                    'simulation heads': h9.streakCount,
                    'simulation tails': t9.streakCount,
                    'simulation random': c9.streakCount,
                    math: tosses / 512,
                },
                '10 in a row': {
                    'simulation heads': h10.streakCount,
                    'simulation tails': t10.streakCount,
                    'simulation random': c10.streakCount,
                    math: tosses / 1024,
                },
            });
            expect(true).to.equal(true);
        });
    });
    describe('Calculating the rates true-random values', () => {
        it('just consoling', () => {
            const h1 = new Streaks(sequence, [1]);
            const h2 = new Streaks(sequence, [1, 1]);
            const h3 = new Streaks(sequence, [1, 1, 1]);
            const h4 = new Streaks(sequence, [1, 1, 1, 1]);
            const h5 = new Streaks(sequence, [1, 1, 1, 1, 1]);
            const h6 = new Streaks(sequence, [1, 1, 1, 1, 1, 1]);
            const h7 = new Streaks(sequence, [1, 1, 1, 1, 1, 1, 1]);
            const h8 = new Streaks(sequence, [1, 1, 1, 1, 1, 1, 1, 1]);
            const h9 = new Streaks(sequence, [1, 1, 1, 1, 1, 1, 1, 1, 1]);
            const h10 = new Streaks(sequence, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
            const t1 = new Streaks(sequence, [0]);
            const t2 = new Streaks(sequence, [0, 0]);
            const t3 = new Streaks(sequence, [0, 0, 0]);
            const t4 = new Streaks(sequence, [0, 0, 0, 0]);
            const t5 = new Streaks(sequence, [0, 0, 0, 0, 0]);
            const t6 = new Streaks(sequence, [0, 0, 0, 0, 0, 0]);
            const t7 = new Streaks(sequence, [0, 0, 0, 0, 0, 0, 0]);
            const t8 = new Streaks(sequence, [0, 0, 0, 0, 0, 0, 0, 0]);
            const t9 = new Streaks(sequence, [0, 0, 0, 0, 0, 0, 0, 0, 0]);
            const t10 = new Streaks(sequence, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            const c2 = new Streaks(sequence, [0, 1]);
            const c3 = new Streaks(sequence, [0, 1, 0]);
            const c4 = new Streaks(sequence, [1, 0, 1, 0]);
            const c5 = new Streaks(sequence, [0, 0, 1, 0, 1]);
            const c6 = new Streaks(sequence, [0, 0, 0, 0, 1, 0]);
            const c7 = new Streaks(sequence, [1, 0, 0, 1, 0, 0, 0]);
            const c8 = new Streaks(sequence, [0, 0, 1, 0, 0, 0, 0, 0]);
            const c9 = new Streaks(sequence, [0, 0, 1, 0, 1, 0, 0, 0, 0]);
            const c10 = new Streaks(sequence, [0, 0, 0, 1, 0, 1, 1, 0, 0, 0]);
            console.table({
                '1 in a row': {
                    'simulation heads': h1.streakCount,
                    'simulation tails': t1.streakCount,
                    'simulation random': t1.streakCount,
                    math: 1000 / 2,
                },
                '2 in a row': {
                    'simulation heads': h2.streakCount,
                    'simulation tails': t2.streakCount,
                    'simulation random': c2.streakCount,
                    math: 1000 / 4,
                },
                '3 in a row': {
                    'simulation heads': h3.streakCount,
                    'simulation tails': t3.streakCount,
                    'simulation random': c3.streakCount,
                    math: 1000 / 8,
                },
                '4 in a row': {
                    'simulation heads': h4.streakCount,
                    'simulation tails': t4.streakCount,
                    'simulation random': c4.streakCount,
                    math: 1000 / 16,
                },
                '5 in a row': {
                    'simulation heads': h5.streakCount,
                    'simulation tails': t5.streakCount,
                    'simulation random': c5.streakCount,
                    math: 1000 / 32,
                },
                '6 in a row': {
                    'simulation heads': h6.streakCount,
                    'simulation tails': t6.streakCount,
                    'simulation random': c6.streakCount,
                    math: 1000 / 64,
                },
                '7 in a row': {
                    'simulation heads': h7.streakCount,
                    'simulation tails': t7.streakCount,
                    'simulation random': c7.streakCount,
                    math: 1000 / 128,
                },
                '8 in a row': {
                    'simulation heads': h8.streakCount,
                    'simulation tails': t8.streakCount,
                    'simulation random': c8.streakCount,
                    math: 1000 / 256,
                },
                '9 in a row': {
                    'simulation heads': h9.streakCount,
                    'simulation tails': t9.streakCount,
                    'simulation random': c9.streakCount,
                    math: 1000 / 512,
                },
                '10 in a row': {
                    'simulation heads': h10.streakCount,
                    'simulation tails': t10.streakCount,
                    'simulation random': c10.streakCount,
                    math: 1000 / 1024,
                },
            });
            expect(true).to.equal(true);
        });
    });
});
