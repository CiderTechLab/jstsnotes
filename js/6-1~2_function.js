export {};

/**
 * 関数宣言
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 *
 * - JSの関数は全て戻り値がある。（Undefinedも含め）
 *   - returnがないとUndefinedが戻る。
 * - returnは複数記述できるが、最初のreturn文が実行された時点で関数の処理は終了。
 * - 関数宣言で関数名が重複している時、最後の関数宣言が実行される。
 * - 巻き上げ可能
 *   - 関数の内容の前に関数を実行しても正常に動く。
 */
console.log('---関数宣言（return無）---');
function sum(num1, num2) {
	let total = num1 + num2;
}
console.log(sum(1, 3));

console.log('---関数宣言（return有）---');
function sum2(num1, num2) {
	let total = num1 + num2;
	return total;
}
console.log(sum2(1, 3));

/**
 * 関数式
 * - 関数の戻り値を変数に格納
 * - あまり頻繁には使わない
 * - 関数式で関数名が重複した場合、エラーが発生する。
 *   - 変数が重複しているため。
 * - 巻き上げ不可能
 *   - 関数実行は関数の内容の後じゃないとエラーが発生する。
 */
console.log('--関数式--');
let total2 = function (num1, num2) {
	return num1 + num2;
};

console.log(total2(2, 3));

/**
 * 名前付き関数式
 * - 名前付き関数の戻り値を変数に格納
 * - あまり頻繁には使わない
 */
console.log('---名前付き関数式---');
let total3 = function sum3(num1, num2) {
	return num1 + num2;
};
console.log(total3(3, 5));

/**
 * Functionコンストラクタ、eval関数
 * - 引数や関数を文字列として定義できる。そのためセキュリティホールの温床になる。
 * - 可読性悪い。
 * - v8などJSエンジンの解析で不利。パフォーマンス面でも劣る。
 * - 歴史的な経緯で残されているだけなので、通常は使わない。参考程度に。
 */
console.log('---Functionコンストラクタ---');
const funcConst = new Function('num1', 'num2', 'return num1 + num2');
const result = funcConst(4, 5);
console.log(result);

console.log('---eval関数---');
eval('console.log( 4 + 5 );');

/**
 * デフォルト引数
 * - 引数のデフォルト値を設定できる、
 */
console.log('---デフォルト引数---');
function defaultFunc(num1, num2 = 2) {
	let result = num1 + num2;
	return result;
}
console.log(defaultFunc(1));
console.log('// 引数を2つ渡すと値が変わる');
console.log(defaultFunc(1, 5));

/**
 * オブジェクト引数
 */
console.log('---オブジェクト引数---');
function fn(obj) {
	obj.firstname ??= 'yamada';
	obj.lastname ??= 'taro';
	return obj;
}
console.log(fn({}));
