/**
 * オブジェクト型
 * @author S.K
 */
/**
 * オブジェクト型の宣言
 * @return {void}
 */
function objType() {
    console.log('---オブジェクト型の宣言---');
    let vegitable;
    vegitable = {
        name: 'トマト',
        value: 100,
    };
    console.log(vegitable);
    // vegitable = 'キャベツ';
    // ERROR: 型 'string' を型 '{ name: string; value: number; }' に割り当てることはできません。ts(2322)
}
objType();
/**
 * オブジェクト型のエイリアス
 * @return {void}
 */
function objTypeAlias() {
    console.log('---オブジェクト型のエイリアス---');
    let vegitable; // 変数vegitableに型Vegiを割り当てる
    vegitable = {
        name: 'きゅうり',
        value: 80,
    };
    console.log(vegitable);
}
objTypeAlias();
/**
 * 構造的型付け
 */
function structuralType() {
    console.log('---構造的型付け---');
    const fullName = {
        firstName: '山田',
        lastName: '太郎',
    };
    let first = fullName;
    let last = fullName;
    console.log(first + ' ' + last);
    // MEMO: +で文字連結すると暗黙的にtoString()が呼び出されるため、
    // [object Object]という文字列が出力される。
    console.log(first.firstName + ' ' + last.lastName);
    // MEMO: プロパティの値にアクセスすると文字列が出力できる。
}
structuralType();
/**
 * オブジェクト型のプロパティチェック
 * - オブジェクト型で複数のプロパティが割り当てられている場合、全てのプロパティが必要になる。
 * - 足りない場合、エラーになる。
 */
function usageCheck() {
    console.log('---オブジェクト型のプロパティチェック---');
    const hasBoth = {
        firstName: 'sato',
        lastName: 'jiro',
    };
    console.log(hasBoth); // OK
    // const hasFirst: fullName = {
    // 	firstName: 'suzuki',
    // };
    // ERROR: 型 '{ firstName: string; }' を型 'fullName' に割り当てることは
    // できません。
    // プロパティ 'lastName' が型 'fullName' に存在しません。ts(2322)
}
usageCheck();
/**
 * オブジェクト型の過剰プロパティチェック
 * - オブジェクト型で宣言された変数が、その型以上のフィールドを持つとエラーに
 *   なる。
 */
function excessPropertyCheck() {
    console.log('---過剰プロパティチェック---');
    const person = {
        name: '佐藤',
        age: 30,
    };
    console.log(person);
    // const excessPerson: fullName = {
    // 	name: '鈴木',
    // 	age: 25,
    // 	position: 'third',
    // };
    // ERROR: オブジェクトリテラルは、既知のプロパティのみを指定できます。'position' は型 'fullName' に存在しません。ts(2322)
}
excessPropertyCheck();
/**
 * オブジェクト型のネスト
 */
function nestedObject() {
    console.log('---オブジェクト型のネスト---');
    const player = {
        name: {
            firstName: 'suzuki',
            lastName: 'seiya',
        },
        age: 30,
    };
    console.log(player);
    // const player2: person = {
    // 	name: {
    // 		firstName: 'ohtani',
    // 		lastName: 'shohei',
    // 	},
    // 	position: 'pitcher',
    // };
    // ERROR: オブジェクトリテラルは、既知のプロパティのみを指定できます。'position' は型 'person' に存在しません。ts(2322)
}
nestedObject();
/**
 * オブジェクト型のオプショナルプロパティ
 * - オブジェクト型のプロパティに?をつけると、そのプロパティはオプショナルになり、
 *   そのプロパティがなくてもエラーにならない。
 */
function optionalProperty() {
    console.log('---オプショナルプロパティ---');
    const player1 = {
        name: 'suzuki',
        age: 30,
    };
    console.log(player1);
    const player2 = {
        name: 'kohndo',
    };
    console.log(player2);
    // const player3: person = {
    // 	age: 30,
    // };
    // nameプロパティには?がついていないため、nameの値は必須となる。
    // ERROR: 型 '{ age: number; }' を型 'person' に割り当てることはできません。
    // プロパティ 'name' が型 'person' に存在しません。ts(2322)
}
optionalProperty();
/**
 * オブジェクト型のユニオン型
 * - ユニオン型は複数の型のどれかを表す型
 * - オブジェクト型のユニオン型は複数のオブジェクトのどれかを表す型である。
 */
function unionObject() {
    console.log('---オブジェクト型のユニオン型---');
    const player1 = {
        name: 'ohtani',
        age: 30,
        position: 'pitcher',
    };
    console.log(player1);
    // const player2: person = {
    // 	name: 'suzuki',
    // 	age: 30,
    // 	position: 'defender',
    // };
    // // ERROR: 型 '"defender"' を型 '"pitcher" | "batter"' に割り当てることはできません。ts(2322)
    // console.log(player2);
}
unionObject();
/**
 * オブジェクト型の絞り込み
 */
function narrowingObject() {
    console.log('---オブジェクト型の絞り込み---');
    const player = {
        name: 'ohtani',
        age: 30,
        position: 'pitcher',
    };
    if ('position' in player) {
        console.log('Yes, position property is in player.');
    }
    else {
        console.log('No, position property is not in player.');
    }
}
narrowingObject();
/**
 * オブジェクト型のタグ付きユニオン型
 */
function taggedUnion() {
    console.log('---タグ付きユニオン型---');
    const player1 = {
        name: 'ohtani',
        position: 'pitcher',
    };
    console.log(player1);
    const player2 = {
        name: 'ohtani',
        position: 'batter',
    };
    console.log(player2);
}
taggedUnion();
/**
 * オブジェクト型のインターセクション型
 * - ユニオン型と対をなす型。
 * - ユニオン型は複数の型のどれかを表すのに対し、
 *   インターセクション型は複数の型を全て満たすことを表す。
 */
function intersectionObject() {
    console.log('---インターセクション型---');
    const player = {
        name: 'ohtani',
        age: 30,
    };
    console.log(player);
}
intersectionObject();
export {};
