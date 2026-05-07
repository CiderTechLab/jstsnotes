export {};
/**
 * インターフェース
 * - オブジェクトの形状に名前を付けて宣言するための方法
 * - クラスが実装すべきフィールドやメソッドを定義した型
 */
/**
 * 型エイリアスとインターフェースの比較
 * - 下2つは同じ意味を持つ
 */
type PlayerType = {
	name: string;
	uniformNumber: number;
};

interface PlayerInterface {
	name: string;
	uniformNumber: number;
}

/**
 * 割り当て可能性
 */
let startingPlayer: PlayerInterface = {
	name: 'Austin',
	uniformNumber: 10,
};

/**
 * インターフェースのプロパティ
 */
/**
 * オプショナルプロパティ
 */
interface Book {
	title: string;
	author?: string; // オプショナルプロパティ
	pages: number;
}

let myBook: Book = {
	title: 'TypeScript Handbook',
	author: 'Microsoft',
	pages: 250,
};

// authorプロパティが無くてもエラーにならない
let anotherBook: Book = {
	title: 'Effective TypeScript',
	pages: 300,
};

/**
 * 読み取り専用プロパティ
 * - 一度値が設定されたら変更できないプロパティ
 */
interface User {
	id: number;
	readonly name: string;
}

let user: User = {
	id: 1,
	name: 'Austin',
};

// user.name = 'Bob';
// ERROR: 読み取り専用プロパティであるため、'name' に代入することはできません。
// ts(2540)

/**
 * 関数とメソッド
 */
interface Member {
	firstName: () => string;
	lastName: string;
}

let human: Member = {
	firstName: () => 'Austin',
	lastName: 'Smith',
};

/**
 * 呼び出しシグネチャ
 * - 関数として呼び出せる値の呼び出し方法を型システムで記述したもの
 */
type FunctionAlias = (x: number, y: number) => number;

interface FunctionInterface {
	(x: number, y: number): number;
}

let addFunction: FunctionAlias = (x, y) => x + y;
let addFunctionInterface: FunctionInterface = (x, y) => x + y;

/**
 * インデックスシグネチャ
 * - オブジェクトのプロパティ名とその型を定義するための構文
 */
interface StringArray {
	[index: number]: string;
}
