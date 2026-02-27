export {};

/**
 * スコープ
 * - Q. スコープとは？
 * - A. 実行中のコードから参照できる、変数や関数の範囲のこと
 *
 * - グローバルスコープ
 *   - トップレベル（関数で囲まれていないスコープ）
 *   - varを使って定義された変数や関数
 *   - 関数宣言によって定義された関数
 * - スクリプトスコープ（ES6で追加）
 *   - トップレベル（関数で囲まれていないスコープ）
 *   - let、constを使って定義された変数や関数
 *   - windowオブジェクトのプロパティではない。
 * - 関数スコープ
 *   - 関数内で定義された変素や関数
 * - ブロックスコープ
 *   - if文やwhile文などのブロック内で、let、constにて宣言された変数や関数
 * - モジュールスコープ
 *   - ES Modulesの機能が有効な時のトップレベルのスコープ
 *   - モジュール内だけのスコープ
 */

/**
 * Windowオブジェクトについて
 * - Windowインターフェースを実装している特殊なグローバルオブジェクト
 * - Windowオブジェクトに格納されているプロパティやメソッドは先頭のwindowを省略しても記述できる。
 *   - 例）SetTimeout()
 */

/**
 * レキシカル(lexical)スコープ
 * - 実行中のコードが属するスコープ（自スコープ）の外側のスコープ
 */

/**
 * スコープチェーン
 * - レキシカルスコープが多層階に連なっている状態
 * - 一階層ずつ、外側に探しにいくので以下の関数ではoutScope()のlet aは
 */
console.log('---スコープチェーン---');
function outScope() {
	let a = '外側のスコープ';

	function innerScope() {
		let a = '内側のスコープ';
		console.log(a);
	}
	innerScope();
}
outScope();

/**
 * クロージャ
 */
console.log('---クロージャ---');
function closureTest() {
	let cnt = 0;
	return function () {
		console.log(++cnt);
	};
}
const execute = closureTest();
execute();
execute();
execute();
