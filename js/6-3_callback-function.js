export {};

/**
 * 関数へのプロパティ、メソッドの追加
 * - 最初、fn.nameでプロパティを設定したところ、「読み取り専用だ！」と怒られる。
 *   - export{}宣言によりstrictモードだったことが原因
 *   - ただ、そもそもnameプロパティが読み取り専用プロパティだったことが原因。
 *   - nameプロパティのように、元々読み取り専用のプロパティというものが存在する。
 *     - 例）length、prototype（通常関数のみ）
 */

console.log('---関数にプロパティ、メソッドの追加---');
// 空の関数を定義
function fn() {}

fn.displayName = 'suzuki';
console.log(fn.displayName);

fn.hello = function () {
	console.log(`Hello! ${fn.displayName}`);
};
fn.hello();

/**
 * コールバック関数
 * - 他の関数に引数として渡す関数のこと
 * - Q.関数はオブジェクト？
 *   - A.オブジェクト。しかも実行可能なオブジェクト。
 */
console.log('---コールバック関数---');

function fn2(callback) {
	const result = callback();
	console.log(result + 'Taro!');
}

function hello() {
	return 'Hello!';
}

function bye() {
	return 'bye bye!';
}

fn2(hello);
fn2(bye);

/**
 * コールバック関数（組み込み関数）
 * - 組み込み関数にも内部でコールバック関数を引数にしている関数がある。
 *   - 例）setTimeout
 */
console.log('---コールバック関数（組み込み関数）---');
function fn3() {
	console.log('Hello, JavaScript World!');
}
setTimeout(fn3, 5000);

/**
 * コールバック関数に引数を渡す
 * - setTimeoutは可変長引数のため、以下のように引数追加が可能。
 */
console.log('---コールバック関数に引数を渡す---');
function fn4(name) {
	console.log('こんにちは、' + name);
}

setTimeout(fn4, 5000, '山田太郎');

/**
 * コールバック関数（無名関数）
 * - 関数が無名でもOKなのは関数がオブジェクトだから。
 */
console.log('---コールバック関数（無名関数）---');
setTimeout(function () {
	console.log('おはようございます');
}, 3000);
