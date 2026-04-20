/**
 * 関数
 * @author S.K
 */
/**
 * 関数のパラメーター
 * - TypeScriptでは関数の引数に型を指定することができる。
 * - 引数に型を指定しないと暗黙的にany型と推論される。
 * @param {string} langage - 言語
 * @return {void}
 */
function greeting(langage) {
    console.log(`---関数のパラメーター---`);
    console.log(`Hello, ${langage} world!`);
}
greeting('TypeScript');
/**
 * 関数のオプションパラメーター
 * - 関数の引数に?を付けると、その引数はオプションパラメーターになる。
 * - オプションパラメーターは省略可能であり、省略した場合はundefinedになる。
 * - オプションパラメーターは必須パラメーターの後に配置する必要があり、必須パラメータ
 *   ーの前に配置することはできない。SyntaxErrorになる。
 * @param {string} langage - 言語
 * @param {string} [name] - 名前
 * @return {void}
 */
function greetingWithOption(langage, name) {
    console.log(`---関数のオプションパラメーター---`);
    console.log(`Hello ${name}!, ${langage} world!`);
}
greetingWithOption('TypeScript');
greetingWithOption('TypeScript', 'S.K');
/**
 * 関数のデフォルトパラメーター
 * - 関数の引数に=を付けて初期値を指定すると、その引数はデフォルトパラメーターになる。
 * - デフォルトパラメーターは省略可能であり、省略した場合は初期値が使用される。
 */
function greetingWithDefault(langage, name = 'Guest') {
    console.log(`---関数のデフォルトパラメーター---`);
    console.log(`Hello ${name}!, ${langage} world!`);
}
greetingWithDefault('TypeScript');
greetingWithDefault('TypeScript', 'S.K');
/**
 * 関数のレストパラメーター
 * - 関数の引数に...を付けると、その引数はレストパラメーターになる。
 * - レストパラメーターは複数の引数を1つの配列として受け取ることができる。
 */
function lestParameter(...number) {
    console.log(`---関数のレストパラメーター---`);
    console.log(number);
}
lestParameter(1, 2, 3, 4, 5);
/**
 * 関数の戻り値の型
 * - 関数の戻り値の型を指定することができる。
 * - 戻り値の型を指定しないと暗黙的にany型と推論される。
 */
function rerurnType(langage) {
    console.log(`---関数の戻り値の型---`);
    return `Hello, ${langage} world!`;
}
console.log(rerurnType('TypeScript'));
/**
 * 関数の型
 * - 関数の型を定義することができる。
 * - 関数の型は、引数の型と戻り値の型を指定することができる。
 */
console.log(`---関数の型---`);
const add = (a, b) => {
    return a + b;
};
/**
 * 関数の戻り値の型
 * - void : 戻り値がないことを示す型。
 * - never: 戻り値がないだけではなく関数の処理も返さない型。
 * @return {void}
 */
function voidFunction() {
    console.log(`---void関数---`);
    const text = 'This function does not return anything.';
    console.log(text);
    // ERROR: 型 'string' を型 'void' に割り当てることはできません。(ts2322)
    // return text;
}
voidFunction();
/**
 * @return {never}
 */
function throwError() {
    // 以下文で意図的に例外（エラー）をスローする。
    throw new Error('エラー');
}
function overLoad(a, b) {
    console.log(`---関数のオーバーロード---`);
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else {
        throw new Error('型エラー');
    }
}
console.log(overLoad(1, 2));
console.log(overLoad('Hello, ', 'world!'));
export {};
// ERROR: 引数の型 'boolean' は、パラメーターの型 'number' に割り当てることができません。(ts2345)
// console.log(overLoad(true, false));
