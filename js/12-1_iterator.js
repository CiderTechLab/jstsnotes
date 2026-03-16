import { appendFile } from 'node:fs';

export {};
/**
 * イテレータ
 * - オブジェクトの反復処理を定義するときに使用するオブジェクト。
 * - パーサ、ゲームループ、プロトコル処理（大量のデータ処理）に使われる。
 * return {@param done [ true | false ], @param value}
 */
function makeIterator(maxVal) {
	let val = 0;

	return {
		next() {
			if (val < maxVal) {
				return {
					done: false,
					value: val++,
				};
			} else {
				return {
					done: true,
				};
			}
		},
	};
}

const iterator = makeIterator(5);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/**
 * 文字列を返すイテレータ
 */
function atozIterator(start = 'a', goal = 'z') {
	console.log('---文字列を返すイテレータ---');
	if (start > goal) {
		throw '終了文字より前のアルファベットを選択してください。';
	}

	const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const startNum = ALPHABET.indexOf(start);
	const goalNum = ALPHABET.indexOf(goal);

	const targetAlphabet = ALPHABET.slice(startNum, goalNum + 1);

	return {
		next() {
			const alphabet = targetAlphabet.shift();

			return {
				value: alphabet,
				done: alphabet ? false : true,
			};
		},
	};
}

const it = atozIterator('b', 'd');
let nextVal = it.next();
while (!nextVal.done) {
	console.log(nextVal);
	nextVal = it.next();
}

/**
 * 反復オブジェクト
 */
console.log('---反復オブジェクト---');
const iterableObj = {
	[Symbol.iterator]() {
		let val = 0;

		return {
			next() {
				if (val > 3) {
					return { done: true };
				} else {
					return {
						done: false,
						value: val++,
					};
				}
			},
		};
	},
};
for (const val of iterableObj) {
	console.log(val);
}

/**
 * 値を2倍にするイテレータ
 */
function twiceIterator() {
	console.log('---値を2倍にするイテレータ---');
	let index = 0;
	let array = this;

	return {
		next() {
			if (index < array.length) {
				return {
					done: false,
					value: array[index++] * 2,
				};
			} else {
				return {
					done: true,
				};
			}
		},
	};
}

for (let i of [1, 2, 3]) {
	console.log(i);
}

Array.prototype[Symbol.iterator] = twiceIterator;
for (let j of [1, 2, 3]) {
	console.log(j);
}
