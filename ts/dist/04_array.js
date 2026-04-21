/**
 * 配列
 * @author S.K
 */
/**
 * 配列型
 */
console.log('---配列型---');
let arrayPlayers;
arrayPlayers = ['ohtani', 'kondoh', 'suzuki'];
console.log(arrayPlayers);
/**
 * 配列型と関数型
 */
// string型の配列を返す関数型
let createStrings;
// string型の配列を返す関数型の配列
let stringPlayers;
/**
 * ユニオン型の配列
 */
console.log('---ユニオン型の配列---');
let unionPlayers;
unionPlayers = ['ohtani', 17, 'kondoh', 9, 'suzuki', 51];
console.log(unionPlayers);
/**
 * 多次元配列
 * - 二次元配列は[][]で表す。
 * - 三次元配列は[][][]で表す。それ以降は同様に[]を追加していく。
 */
// []の中に[]が入っている点に注目。
let arrayMulti;
arrayMulti = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log('---多次元配列---');
console.log(arrayMulti);
/**
 * 配列のメンバー
 */
console.log('---配列のメンバー---');
let arrayMembers;
arrayMembers = ['ohtani', 'kondoh', 'suzuki'];
console.log(arrayMembers[0]);
/**
 * スプレッド演算子
 */
console.log('---スプレッド演算子---');
let arraySpread1 = [1, 2, 3];
let arraySpread2 = [4, 5, 6];
let arraySpread3 = [...arraySpread1, ...arraySpread2];
console.log(arraySpread3);
/**
 * レストパラメーター
 */
console.log('---レストパラメーター---');
function sum(...numbers) {
    // reduce():配列の各要素に対して、指定された関数を実行し、単一の値を返すメソッド。
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5));
export {};
