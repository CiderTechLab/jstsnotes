export {};
/**
 * WeakMapコレクション
 * - キーにオブジェクトのみ使用可能なコレクション
 * - new WeakMap()したオブジェクトは直接見ることができない。
 *   getなどでキーを指定する必要がある。
 */
function wm() {
	console.log('---set/getメソッド---');
	const wmObj = new WeakMap();
	/**
	 * setメソッド
	 * - WeakMapオブジェクトにキーと値を追加する。
	 * getメソッド
	 * - WeakMapオブジェクトのキーに対応する値を取得する。
	 */
	let keyObj = {};
	wmObj.set(keyObj, 'value');
	console.log(wmObj);
	console.log(wmObj.get(keyObj));

	/**
	 * deleteメソッド
	 * - WeakMapオブジェクトのキーに対応する値を削除する。
	 */
	console.log('---deleteメソッド---');
	console.log(wmObj.delete(keyObj));

	// deleteしたのでsetで追加する。
	wmObj.set(keyObj, 'value');

	/**
	 * hasメソッド
	 * - WakeMapオブジェクト内に一致するキーがあれば真偽値を返す。
	 */
	console.log('---hasメソッド---');
	console.log(wmObj.has(keyObj));
	console.log(wmObj.has({}));
}
wm();
