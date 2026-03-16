export {};
/**
 * スプレッド演算子
 * - ES6で追加された演算子
 * - オブジェクトや配列の要素を展開、まとめることができる。
 */
console.log('---スプレッド演算子---');
function sum(...vals) {
	let result = 0;
	for (const val of vals) {
		result += val;
	}

	return result;
}

console.log(sum(1, 3));
console.log(sum(1, 3, 5));
console.log(sum(1, 3, 5, 7));
