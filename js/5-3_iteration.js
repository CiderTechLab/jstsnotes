export {};

/**
 * while文
 * - 条件式がtrueの間、ブロック内の処理を繰り返す。
 * - while(true) {}で無限ループになるが、使いどころに注意。
 */
console.log('---while文---');
let i = 0;
while (i < 7) {
	console.log(i);
	i += 2;
}

/**
 * for文
 * - 初期化式、条件式、更新式を指定して繰り返し処理を行う。
 * - 初期化式はループ開始前に1回だけ実行される。
 * - 条件式がtrueの間、ブロック内の処理を繰り返す。
 * - 更新式はループの各反復の後に実行される。
 * - for(;;) {}で無限ループになるが、使いどころに注意。
 */
console.log('---for文---');
for (let i = 0; i < 10; i += 3) {
	console.log(i);
}

/**
 * 配列とfor文
 */
console.log('---配列とfor文---');
const array = [10, 20, 23, 47];

let j = 0;
for (let i = 0; i < array.length; i++) {
	j += array[i];
}
console.log(j);

/**
 * for...in文
 * - オブジェクトの要素に対して繰り返し処理をしたい時に使用する。
 * 	- 例）オブジェクトからキーを取り出す。
 * 	- 値を取りたい時はオブジェクト名[キー]
 */
console.log('---オブジェクトとfor文---');
const obj = {
	firstName: 'yamada',
	lastName: 'taro',
	age: '25',
};

for (const key in obj) {
	console.log(key + ':' + obj[key]);
}

/**
 * TODO:列挙可能性（enumerable）
 * - 列挙可能性を無効にしたプロパティはfor...inの列挙対象外となる。
 * - 下記例ではprop1のみ出力される。
 */
console.log('---列挙可能性---');

const text = { prop1: '列挙可能プロパティ' };

// @exapmle Reflect.defineProperty(["プロパティ"], ["修正対象プロパティ"])
Reflect.defineProperty(text, 'prop2', {
	value: '列挙不可能プロパティ',
	enumerable: false,
});

for (const key in text) {
	console.log(key, text[key]);
}

/**
 * TODO:列挙可能性（for...in文とSymbol）
 * - Symbol型も列挙対象外
 */
console.log('---列挙可能性（Symbol Type)---');
const x = Symbol();
const obj2 = { [x]: '列挙対象外' };

for (const key in obj2) {
	console.log(key, obj2[key]); // 表示されない
}

/**
 * for...of文
 * - 反復可能オブジェクトに対する繰り返し処理を記述できる。
 */
console.log('---for...of文---');
const vegetables = ['carrot', 'cabbage', 'lettuce'];

for (const obj of vegetables) {
	console.log(obj);
}

console.log('---for...of文（オブジェクト）---');
const vege = {
	carrot: 'にんじん',
	cabbage: 'キャベツ',
	lettuce: 'レタス',
};
const props = Object.keys(vege);
console.log(props);

for (const prop of props) {
	console.log(`${prop}: ${vege[prop]}`);
}

/**
 * break文
 * - ブロック処理を抜けられる
 */
function breakTest() {
	console.log('---break文---');
	let i = 0;
	while (true) {
		if (i >= 5) {
			break;
		}
		console.log(i);
		i++;
	}
}
breakTest();

/**
 * continue文
 * - ループを中断し、次のループを始める
 */
function continueTest() {
	console.log('---continue文---');
	for (let i = 0; i < 10; i++) {
		if (i % 2 === 0) {
			continue;
		}
		console.log(i);
	}
}
continueTest();

/**
 * label文
 * - **ブロックに対して**ラベルを付けられる。
 * - GoTo文とは違う点に注意。
 * - ループのどこを抜けるか指定するための目印で、任意の場所へ飛べるわけではない。
 * - 必須ではないが、continue/break文と合わせて使うのが一般的。
 *   - そもそも、label文は極力使わない方が良い。（スパゲッティコードに繋がるので）
 */
function labelTest() {
	console.log('---label文---');
	first: for (i = 0; i <= 10; i++) {
		for (j = 0; j <= 10; j++) {
			console.log(`[${i},${j}]`);

			if (i === 0 && j === 10) {
				break first;
			}
		}
	}
}
labelTest();
