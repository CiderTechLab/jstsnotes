export {};

/**
 * アロー関数
 * - **ES6（ES2015）で追加**された
 * - 以前バージョンだと動かない。tsだと以前バージョンでも動くようコンパイルする。
 * - 配列メソッドと一緒に使うことが圧倒的に多い。
 */
/**
 * 引数がないパターン
 * - 使用例）非同期処理、イベント、コールバック関数
 * @example イベント
 * button.addEventListener("click", () => {
 *   console.log("クリックされた");
 * });
 */
setTimeout(() => console.log('---アロー関数（引数なし）---'), 3000);
setTimeout(() => console.log('Hello, Arrow Function!'), 3000);

/**
 * 引数が一つのパターン
 */
console.log('---アロー関数（引数1つ）---');
const arr = [1, 2, 3];
console.log(arr.map((x) => x * 2));

/**
 * 引数が複数のパターン
 */
console.log('---アロー関数（引数複数）---');
(x, y, z) => {};

/**
 * 関数の本文が一行のパターン
 */

/**
 * 関数の本文が複数行のパターン
 */
