export {};
/**
 * コレクション
 * - ～ESS: Object, Array
 * - ES6～: Map, Set, WeakMap, WeakSet（追加された)
 */
/**
 * 配列
 * - empty: 空の
 * 操作	    動き  意味
 * ---------------------
 * push	    後ろに追加
 * pop	    後ろから取り出す
 * shift	  前から取り出す
 * unshift	前に追加
 * splice   要素の切り取り（開始位置から特定の長さ分切り取り）: 接合する、継ぐ
 * concat   配列の結合、複製
 *
 * - 配列の増減（破壊的操作）
 * - 配列の増減（非破壊操作）
 * - 配列の調査
 *   - indexOf: 完全一致
 * メソッド      検索方法
 * ---------------------
 * indexOf()	  完全一致
 * includes()	  完全一致（true/false）
 * find()	      条件検索
 * findIndex()	条件検索（index）
 */
console.log('---配列---');
const salad = ['cabbage', 'lettuce', 'tomato', 'carrot'];
console.log(salad);
console.log(salad[0]);
salad[0] = 'cucumber';
console.log('配列[0]をcucumberに変更');
console.log(salad);

const emptyArr = new Array(3);
console.log(emptyArr);

const filledArr = new Array(1, 2, 3);
console.log(filledArr);

/**
 * 配列の操作
 */
console.log('---配列の操作---');
const player = ['ohtani', 'suzuki', 'kondo'];
console.log(player);
console.log('.push');
player.push('yoshida');
console.log(player);

console.log('.pop');
player.pop();
console.log(player);

console.log('.shift');
player.shift();
console.log(player);

console.log('.unshift');
player.unshift('syuto');
console.log(player);

console.log('.splice()');
player.splice(1, 2);
console.log(player);

console.log('.concat（結合)');
const newPlayer = player.concat(['suzuki', 'kondo']);
console.log(newPlayer);

console.log('.concat（複製）');
player.concat();
console.log(newPlayer);

console.log('.slice');
const arterPlayer = newPlayer.slice(1, 2);
console.log(arterPlayer);
console.log(newPlayer);

console.log('---配列の調査---');
console.log('.indexOf');
const menber = ['ohtani', 'suzuki', 'kondo'];
console.log(menber.indexOf('suzuki'));

console.log('.includes');
console.log(menber.includes('ohtani'));

console.log('---配列（要素）の結合---');
console.log('.join');
console.log(menber.join('/'));

console.log('---要素を埋める---');
console.log('.fill');
console.log(new Array(10).fill(7));

console.log('---多次元配列の平坦化---');
console.log('.flat');
const threeD = [1, [2], 3, [4, [5]]];
console.log(threeD);
console.log(threeD.flat());
console.log(threeD.flat(2));

console.log('---要素の逆転---');
console.log('.reverse');
console.log(menber);
console.log(menber.reverse());

/**
 * forEach
 * - 配列の各要素を使って繰り返し処理を行う
 */
const numbers = [1, 2, 3];
numbers.forEach((value, index, array) => console.log(value, index, array));
