export {};

/**
 * ES2022以降のクラス記法
 */
/**
 * コンストラクタ省略
 * - コンストラクタ（クラスのプロパティ）は変数とは違う。
 *
 */
console.log('---コンストラクタ省略---');

class ES2015 {
	constructor() {
		this.num = 0;
	}
}

class ES2022 {
	num = 0;
}

/**
 * パブリック、プライベート
 * - プロパティやメソッドにはパブリックとプライベート二種類のアクセス権を使える。
 * - プライベートプロパティ、プライベートメソッドの先頭には「#」を付ける。
 * - プライベートプロパティはクラスのトップレベルで宣言する必要がある。
 */
class Counter {
	#cnt = 0;

	#pnt() {
		console.log(this.#cnt);
	}

	increment() {
		this.#cnt++;
		this.#pnt();
	}
}

const counter = new Counter();
counter.increment();
// MEMO:プライベートプロパティなのでエラー
// counter.#cnt = 5;
// MEMO:プライベートメソッドなのでエラー
// counter.#pnt();

/**
 * プロトタイプ
 * - 関数オブジェクトに保持される特別なプロパティ。
 * - 関数を定義した時に自動的に設定される。
 * - prototypeオブジェクトには関数（メソッド）を格納する。
 * - prototypeはインスタンス化する際、__proto__にコピーされる。
 *   - __proto__は省略可。なので一般的には記述しない。
 *
 * Q.プロトタイプって結局使うの？
 * A.めちゃくちゃ使われているが、自分で触ることはあまりない。
 * - 流れ
 *
 * 　 関数定義
 *    ↓
 *    prototypeプロパティが自動的に設定される
 *    ↓
 *    インスタンス化 → __proto__にコピー
 *
 * - 書かなくても、理解していないとデバッグで詰む
 */
console.log('---プロトタイプ---');
function Test() {}
Test.prototype.greeting = function () {
	console.log('Hello, World!');
};
const instance = new Test();
console.log(instance.__proto__ === Test.prototype);
instance.__proto__.greeting();
/**
 * - ES6より前の機能だけでも関数だけでクラスと同等の機能を実装可能。
 * - コンストラクタ関数
 *   - class内のコンストラクタと同等の動きをする関数。
 *   - パスカルケースを使用
 * @example
 * function ConstructorFunc([引数1],[引数2]...) {
 *  this.[プロパティ名] = [値];
 * }
 */
