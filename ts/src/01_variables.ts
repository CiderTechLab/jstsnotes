/**
 * MEMO: export{}文
 * - モジュールとして認識させるためのexport文
 * - ただし、JavaScriptでは実行順は関係ない。
 *   そのためコンパイル後のソースコードでは文末に出力されることがある。
 */
export {};
/**
 * 変数と型注釈
 * @author S.K
 */

/**
 * 型推論が働く例
 * @type {number}
 */
// 型推論の例
let x = 1; // let x: number = 1;と同じ意味になる
x = 2; // OK

// ERROR: 型 'string' を型 'number' に割り当てることはできません。ts(2322)
// x = "hello";

/**
 * 型注釈が必要な例
 * @type {string}
 */
const num: string = 'Do not number type';
console.log(num);

// ERROR: この式は呼び出し可能ではありません。ts(2349)
// 型 'Number' には呼び出しシグネチャがありません。
// console.log(num.length());

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
/**
 * 割り当てによる型の絞り込み
 */
function typeNarrowing(): void {
	console.log('# 型の絞り込み');
	let val: string | number;
	val = 'Hello, TypeScript World!';
	console.log(val.toUpperCase()); // Hello, TypeScript World!
	// ERROR: number型でないためtoFixed()は使えない
	// console.log(val.toFixed());
}
typeNarrowing();

/**
 * 条件チェック（if文チェック）
 */
function ifCheck(): void {
	console.log('- if文チェック');
	let player: string | number;
	player = true ? 'ohtani' : 1;

	if (player === 'ohtani') {
		console.log(player.toUpperCase()); // OK
	}

	// ERROR: プロパティ 'toUpperCase' は型 'string | number' に存在しません。ts(2339)
	//console.log(player.toUpperCase()); // NG
}
ifCheck();

/**
 * typeof演算子チェック
 */
function typeOfCheck(): void {
	console.log('- typeof演算子チェック');
	let player: string | number;
	player = true ? 'suzuki' : 1;

	if (typeof player === 'string') {
		console.log(player.toUpperCase()); // OK
	}
}
typeOfCheck();

/**
 * リテラル型
 * - プリミティブ型の特定の値だけを代入可とする型
 */
function literalType(): void {
	console.log('# リテラル型');
	let direction: number | 'up' | 'down' | 'left' | 'right';
	console.log((direction = 'up'));
	console.log((direction = 555));
}
literalType();

/**
 * nullチェック
 * - TypeScriptでは厳格なnullチェックがある。
 */
function nullCheck(): void {
	console.log('# nullチェック');
	// ERROR: TS2322: Type 'undefined' is not assignable to type
	// let name: string | null = undefined;
}
nullCheck();
