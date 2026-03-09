export {};
/**
 * ラッパーオブジェクト
 * - プリミティブ値を内包するオブジェクトのこと。
 * - プリミティブ値自体はメソッドは持っていないが、暗黙的にラッパーオブジェクト
 *   のメソッドやプロパティが呼び出されるため、プリミティブ値にメソッドを設定で
 *   きる。
 * - null、undefinedには存在しない。
 */
console.log('---ラッパーオブジェクト---');
const text = 'This is wrapper object.';
console.log(
	`${text}文字数は${text.length}、全て大文字にします。${text.toUpperCase()}`
);
