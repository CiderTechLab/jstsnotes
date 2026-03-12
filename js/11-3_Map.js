export {};
/**
 * Map
 * - キー：バリューを対で保持するコレクション
 * - ES6で追加された。
 */
function initializationMap() {
	console.log('---Map初期化---');
	const initialMap = new Map();
	console.log(initialMap);
}
initializationMap();

function twodMap() {
	console.log('---二次元配列からMapオブジェクトを作成---');
	const mapObj = new Map([
		['key1', 'value1'],
		['key2', 'value2'],
	]);
	console.log(mapObj);
}
twodMap();

/**
 * setメソッド
 * - Mapオブジェクトに値を追加できる。
 */
function setMap() {
	console.log('---setメソッド---');
	const salad = new Map();
	salad.set(1, 'tomato');
	const emptyObj = {};
	salad.set(emptyObj, 'cabbage');
	salad.set(true, 'carrot');
	console.log(salad);
}
setMap();

/**
 * getメソッド
 * - Mapオブジェクトの値を取得する。
 */
function getMap() {
	console.log('---getメソッド---');
	const emptyObj = {};
	const salad = new Map([
		[1, 'tomato'],
		[emptyObj, 'cabbage'],
		[true, 'carrot'],
	]);
	console.log(salad.get(1));
}
getMap();

/**
 * deleteメソッド
 * - Mapオブジェクトの値を削除する。
 * - deleteオブジェクト自体は真偽値を返す。
 */
function delMap() {
	console.log('---deleteメソッド---');
	const emptyObj = {};
	const salad = new Map([
		[1, 'tomato'],
		[emptyObj, 'cabbage'],
		[true, 'carrot'],
	]);
	salad.delete(1);
	console.log(salad);
}
delMap();

/**
 * clearメソッド
 * - Mapオブジェクトの値を全て削除する。
 */
function clrMap() {
	console.log('---clearメソッド---');
	const emptyObj = {};
	const salad = new Map([
		[1, 'tomato'],
		[emptyObj, 'cabbage'],
		[true, 'carrot'],
	]);
	salad.clear();
	console.log(salad);
}
clrMap();

/**
 * hasメソッド
 * - Mapオブジェクトのキーの存在確認
 * - 真偽値で返す
 */
function hasMap() {
	console.log('---hasメソッド---');
	const emptyObj = {};
	const salad = new Map([
		[1, 'tomato'],
		[emptyObj, 'cabbage'],
		[true, 'carrot'],
	]);
	console.log(salad.has(emptyObj));
	console.log(salad.has(2));
}
hasMap();

/**
 * forEachメソッド
 * - コールバック関数を使ってループ処理を行う。
 */
function forEachMap() {
	console.log('---forEachメソッド---');
	const salad = new Map([
		[1, 'tomato'],
		[2, 'cabbage'],
		[3, 'carrot'],
	]);
	salad.forEach((val, key, map) => {
		console.log(`キー:${key}, バリュー:${val},${map}`);
	});
}
forEachMap();

/**
 * sizeプロパティ
 * - Mapの長さ情報を持っている
 */
function sizeMap() {
	console.log('--sizeプロパティ---');
	const salad = new Map([
		[1, 'tomato'],
		[2, 'cabbage'],
		[3, 'carrot'],
	]);
	console.log(salad.size);
}
sizeMap();

/**
 * Object.fromEntriesメソッド
 * - Mapからオブジェクトへ変換する
 */
function fromEntriesMap() {
	console.log('---fromEntriesメソッド');
	const salad = new Map([
		[1, 'tomato'],
		[2, 'cabbage'],
		[3, 'carrot'],
	]);
	console.log(Object.fromEntries(salad));
}
fromEntriesMap();
