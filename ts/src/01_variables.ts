/**
 * @author S.K
 * MEMO: export{}文
 * - モジュールとして認識させるためのexport文
 * - ただし、JavaScriptでは実行順は関係ないのでコンパイル後のソースコードでは文末に
 *   出力されることがある。
 */
export {};

/**
 * 型推論が働く例
 * @type {number}
 */
// 型推論の例
let x = 1; // let x: number = 1;と同じ意味になる
x = 2; // OK

// NOTE: 型 'string' を型 'number' に割り当てることはできません。ts(2322)
// x = "hello";

/**
 * 型注釈が必要な例
 * @type {string}
 */
const num: string = 'Do not number type';
console.log(num);

/**
 * ユニオン型
 */
function unionTypeExample(val: string | number): void {
	console.log('# ユニオン型');
	console.log(val); // Hello, TypeScript World!
	val = 1;
	console.log(val); // 1
}
unionTypeExample('Hello, TypeScript World!');

/**
 * 型の絞り込み
 */
function typeNarrowingExample(): void {
	console.log('# 型の絞り込み');
	let val: string | number;
	val = 'Hello, TypeScript World!';
	console.log(val.toUpperCase()); // Hello, TypeScript World!
	// console.log(val.toFixed()); // エラー: number型でないためtoFixed()は使えない
}
typeNarrowingExample();
