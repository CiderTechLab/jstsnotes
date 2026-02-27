import { findSourceMap } from 'node:module';

export {};

/**
 * クラス
 * - ES6(ES2015)で追加された機能
 * - ES2022ではさらに仕様が追加
 * - 糖衣構文（シンタックスシュガー：syntax sugar）の一つ
 * - パスカルケールで命名
 * - オブジェクトをつくるためのひな型
 *   - JavaScriptはプロトタイプベースOOP
 *   - JavaなどのクラスベースOOPと同じように見えるが・・・
 * - 使用例）構造整理の時。やることが小さければ使わないのが普通。
 */

/**
 * クラスの定義
 * - コンストラクタは必須ではない。
 *   - 空白の場合、空のコンストラクタが自動で補完される。
 * @example
 * class [クラス名] {
 *  constructor( [引数, ...] ) {
 *    this.[プロパティ] = [値];
 *  }
 *
 *  [メソッド]([引数, ...]) {
 *
 *  }
 * }
 */
console.log('---クラス---');
class User {
	constructor(lastName, firstName) {
		this.lastName = lastName;
		this.firstName = firstName;
	}

	result() {
		console.log(`私の苗字は${this.lastName}で、名前は${this.firstName}です！`);
	}
}

/**
 * インスタンス化
 * - new演算子付けてインスタンス化する。
 */
const yamada = new User('yamada', 'taro');
const suzuki = new User('suzuki', 'jiro');
yamada.result();
suzuki.result();

/**
 * 静的メソッド、静的プロパティ
 * - 別名：スタティックメソッド、スタティックプロパティ
 * - インスタンス化せずに直接クラスからアクセスできる。
 * - thisは使用不可。インスタンス化すれば使用可。
 * - 静的メソッドからインスタンスのメソッドやプロパティは参照できない。
 */
console.log('---静的メソッド、静的プロパティ---');
class user {
	static userName = 'suzuki';
	static greeting() {
		console.log(`My name is ${user.userName}`);
	}

	constructor(userName) {
		this.userName = userName;
	}

	greeting() {
		console.log(`My name is ${this.userName}`);
	}
}

user.greeting();
console.log(user.userName);

const saburo = new user('saburo');
saburo.greeting();

/**
 * ゲッター、セッター
 * -
 */
console.log('---ゲッター、セッター---');
class GetterAndSetter {
	constructor(drink, food) {
		this.drink = drink;
		this.food = food;
	}

	get fullMenu() {
		return this.drink + this.food;
	}

	set value(num) {
		this._value = num;
	}

	get value() {
		return this._num;
	}
}

const menu = new GetterAndSetter('tea', 'cookie');
console.log(menu.fullMenu);

menu.num = 1000;
console.log(typeof menu.num);
console.log(menu);
