export {};

/**
 * thisキーワード
 * - thisはWindowオブジェクトの一つ
 *
 * - 実行コンテキスト
 *   - コード実行前にJavaScriptエンジンによって準備される、コード実行環境
 *     - グローバルコンテキスト、関数コンテキストがある
 *   - グローバルコンテキスト
 *     - <script>タグ直下、jsファイル直下のコードが実行される直前に生成
 *       - つまり、トップレベルでコードを実行する直前
 *     - 変数、関数、Windowsオブジェクト、thisキーワードが使用可能になる。
 *   - 関数コンテキスト
 *     - 関数が実行される直前に生成
 *     - 変数、関数、thisキーワード、superキーワード、argumentsオブジェクト、
 *       レキシカルスコープの変数・関数
 *
 *  - 実行コンテキストが変わると、thisの参照先も変わる
 */

/**
 * コールスタック
 * - 実行コンテキストの積み重ね
 */
console.log('---コールスタック---');
function firstFunc() {
	const x = 'first';
	secondFunc();
}
function secondFunc() {
	const x = 'second';
	console.log(x);
}
firstFunc();

/**
 * thisの挙動
 */
/**
 * オブジェクトのメソッドとして実行
 * - thisの参照先はメソッドが格納されているオブジェクト
 * @example [オブジェクト].[メソッド]()
 */
console.log('---thisの挙動（オブジェクトのメソッド）---');
const user = {
	name: 'suzuki',
	hello: function () {
		console.log('Hello,' + this.name); //nameだけでは実行できない。
	},
};
user.hello();

/**
 * 関数として実行
 * - thisの参照先はWindowオブジェクト
 * - ただし、Node.js環境下ではglobalオブジェクトの参照になる。
 *   - なのでglobalThisで参照する必要がある。
 *
 * - 以下コードは、strictモードでReferenceError
 * @example
 * window.name = 'aoki';
 * function hello() {
 *	console.log('Hello,' + this.name);
 * }
 * hello();
 */
console.log('---thisの挙動（関数）---');
global.name = 'aoki';
function hello() {
	console.log('Hello,' + globalThis.name); // windowで指定すると出力
}
hello();

/**
 * アロー関数で実行
 * - できない！アロー関数の関数コンテキストにはthisは存在しない。
 */
console.log('---thisの挙動（アロー関数）---');

const ichiro = {
	name: 'イチロー',
	hello: function () {
		const saburo = {
			name: 'サブロー',
			hello: () => {
				console.log('こんにちは' + this.name);
			},
		};

		saburo.hello();
	},
};
ichiro.hello();

/**
 * コールバック関数で実行
 */
console.log('---thisの挙動（コールバック関数）---');
global.name = 'suzuki';

const saburo = {
	name: 'saburo',
	hello: function () {
		console.log('こんにちは' + globalThis.name);
	},
};

function greeting(callback) {
	callback(); // hello: function()を実行
}
greeting(saburo.hello);
