export {};
/**
 * JSONオブジェクト
 * - JSONの特徴
 *   - コメント書けない。
 *   - ダブルクオートのみ使用可。シングルクオーテーション使用不可。
 *   - キーは必ずダブルクオーテーションで囲う。
 *   - Q.なんでこんなに厳しいの？
 *     - A.言語に依存しないデータフォーマットだから！
 *       （Java、C#、Python、Go...あらゆる言語で使えるようにしたかったから。）
 */
const list = [
	{
		name: 'hosokawa',
		age: 27,
		team: 'dragons',
	},

	{
		name: 'sato',
		age: 27,
		team: 'tigers',
	},
];

const jsonList = JSON.stringify(list);
console.log('---JSON形式に変換---');
console.log(jsonList);
console.log('---オブジェクトに変換---');
console.log(JSON.parse(jsonList));
console.log('---JSON形式を整形---');
console.log(JSON.stringify(list, null, 2));
