export {};
/**
 * ジェネレータ
 * - イテレータよりも簡潔に反復処理を書ける
 */
/**
 * 数値の1から3を取得するジェネレータ
 * @returns index
 */
function* generator1to3() {
	console.log('---数値の1から3を取得するジェネレータ---');
	let index = 1;
	yield index;
	index++;
	yield index;
	index++;
	return index;
}

const gen = generator1to3();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
/**
 * インクリメントした値を返すジェネレータ
 */
function* generator(maxVal) {
	let val = 0;
	while (val < maxVal) {
		yield val++;
	}
}

const iterator = generator(3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
